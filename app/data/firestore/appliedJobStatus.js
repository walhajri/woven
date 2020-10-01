import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

let db = firestore();
async function getAppliedJobStatus(posistion,seekerID) {
  var finalList = [];
  await db
    .doc('appliedJobs/'+seekerID+posistion)
    .collection('statusInfo')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        let data = doc.data();
        finalList.push(data);
      });
    });
  return finalList;
}
export default getAppliedJobStatus;
