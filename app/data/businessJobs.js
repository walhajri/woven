import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

let db = firestore();
let postions = [];
let token = auth().currentUser;
console.log(token);
async function getPositions() {
  await db
    .collection('postions')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        if (auth().currentUser.uid === data.businessID) {
          data.position = doc.id;
          postions.push(data);
        }
      });
    });
  return postions;
}
export default getPositions;
