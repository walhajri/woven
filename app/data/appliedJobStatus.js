import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

let db = firestore();
async function getAppliedJobStatus() {
  var finalList = [];
  await db
    .collection('appliedJobs')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        if (auth().currentUser.uid === data.seekerID) {
          finalList.push(data);
        }
      });
    });
  return finalList;
}
export default getAppliedJobStatus;
