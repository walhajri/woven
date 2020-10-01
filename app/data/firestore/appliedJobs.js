import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

let db = firestore();

async function getAppliedJobs() {
  var finalList = [];
  await db
    .collection('appliedJobs').where("seekerID", "==", auth().currentUser.uid)
    .get()
    .then(snapshot => {
      snapshot.forEach((doc) => {
        let data = doc.data();
        finalList.push(data);
    });
    });
  return finalList;
}
export default getAppliedJobs;