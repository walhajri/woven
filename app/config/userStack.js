import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import {createStackNavigator} from 'react-navigation-stack';
import AppliedJobs from '../screens/User/AppliedJobs';

const UserStack = createStackNavigator(
  {
    CandidateStatus: {
      screen: CandidateStatus,
      navigationOptions: () => ({
        title: 'Job Status',
      }),
    },
    JobDetails: {
      screen: JobDetails,
      navigationOptions: () => ({
        title: 'Job Discription',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);
export default UserStack;
