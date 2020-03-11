import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import AppliedJobs from '../screens/User/AppliedJobs';
import CandidateStatus from '../screens/User/CandidateStatus';
import {createStackNavigator} from 'react-navigation-stack';

const UserStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },
    CandidateStatus: {
      screen: CandidateStatus,
      navigationOptions: () => ({
        title: 'Job Status',
      }),
    },
    AppliedJobs: {
      screen: AppliedJobs,
      navigationOptions: () => ({
        title: 'Applied Jobs',
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
