import firestore from '@react-native-firebase/firestore';
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
export default getPositions;