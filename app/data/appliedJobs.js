import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

let db = firestore();
// let appliedJobs = [];

async function getAppliedJobs() {
  var finalList = [];
  await db
    .collection('appliedJobs')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        if (auth().currentUser.uid === data.seekerID) {
          finalList = getPositions(data.postion);
        }
      });
      console.log(auth().currentUser.uid);
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
        if (post === doc.id) {
          appliedJobs.push(data);
        }
      });
    });
  console.log('appliedJobs final list', appliedJobs);
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
