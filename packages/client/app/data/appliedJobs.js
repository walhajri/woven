import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

let db = firestore();

async function getAppliedJobs() {
  var finalList = [];
  let postionID = {};
  await db
    .collection('appliedJobs')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach((doc, index, array) => {
        let data = doc.data();
        if (auth().currentUser.uid === data.seekerID) {
          postionID[data.postion] = data.postion;
          if (index === array.length - 1) {
            finalList = getPositions(postionID);
          }
        }
      });
    });
  return finalList;
}
async function getPositions(post) {
  let appliedJobs = [];
  await db
    .collection('postions')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        data.position = doc.id;
        //TODO: find a better maybe hashmap will do it -\(*.*)/-
        if (post[doc.id] !== undefined) {
          appliedJobs.push(data);
        }
      });
    });
  return appliedJobs;
}
export default getAppliedJobs;
//   {
//     img: '',
//     jobCompany: 'Starbucks',
//     jobTile: 'Manager 2',
//     jobLocation: 'Riyadh',
//     jobTotalSalary: '190',
//     jobDescription:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
//     jobSkill: ['Skill 1', 'Skill 2', 'Skill 3'],
//     visible: true,
//     jobDays: [1, 0, 1, 0, 0, 0, 1],
//   },
//   {
//     img: 'https://facebook.github.io/react/logo-og.png',
//     jobCompany: 'Not Starbucks',
//     jobTile: 'Sub-Manager',
//     jobLocation: 'Jeddah',
//     jobTotalSalary: '170',
//     jobDescription:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
//     jobSkill: ['Skill 1', 'Skill 2', 'Skill 3'],
//     visible: true,
//     jobDays: [1, 0, 0, 0, 1, 1, 1],
//   },
// ];
