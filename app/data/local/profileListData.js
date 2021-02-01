import firestore from '@react-native-firebase/firestore';

const DATA = [
  {
    //id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    
    title: 'My Account',
    iconName: 'person',
    description: 'Click here to edit your account',
    numberOf: 'None',
    
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Number of Jobs',
    iconName: 'briefcase',
    description: 'None',
    numberOf: '12',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Employers Review',
    iconName: 'reader-sharp',
    description: 'None',
    numberOf: '12',
  },
];
let db = firestore();
let positions = [];
async function getPositions() {
    positions = [];
    await db
    .collection('positions')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        data.position = doc.id;
        positions.push(data);
      });
    });   
    return positions;
}
export default DATA;