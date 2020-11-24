import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import AppliedJobs from '../screens/User/AppliedJobs';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function AppliedJobStack() {
      return(
        <Stack.Navigator>
          <Stack.Screen name="AppliedJobs" component={AppliedJobs} />
          <Stack.Screen name="CandidateStatus" component={CandidateStatus} />
        </Stack.Navigator>
      );
}
export default AppliedJobStack;
