import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import {createStackNavigator} from 'react-navigation-stack';
import AppliedJobs from '../screens/User/AppliedJobs';

const AppliedJobStack = createStackNavigator(
  {
    AppliedJobs: {
      screen: AppliedJobs,
      navigationOptions: () => ({
        title: 'Applied Jobs',
      }),
    },
    CandidateStatus: {
      screen: CandidateStatus,
      navigationOptions: () => ({
        title: 'Job Status',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);
export default AppliedJobStack;
