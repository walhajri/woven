import firestore from '@react-native-firebase/firestore';
let db = firestore();
let postions = [];
async function getPositions() {
  await db
    .collection('postions')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        postions.push(data);
      });
    });
  return postions;
}
// console.log(postions);
export default getPositions;
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
//   {
//     img: '',
//     jobCompany: 'Starbucks',
//     jobTile: 'Manager',
//     jobLocation: 'Riyadh',
//     jobTotalSalary: '190',
//     jobSkill: ['Skill 1', 'Skill 2', 'Skill 3'],
//     visible: true,
//     jobDays: [1, 0, 1, 0, 0, 0, 0],
//   },
//   {
//     img: '',
//     jobCompany: 'Starbucks',
//     jobTile: 'Manager',
//     jobLocation: 'Riyadh',
//     jobTotalSalary: '190',
//     jobDescription:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
//     jobSkill: ['Skill 1', 'Skill 2', 'Skill 3'],
//     visible: true,
//     jobDays: [1, 0, 1, 0, 0, 1, 0],
//   },
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
// ];
