import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';
import AppliedJobs from '../screens/AppliedJobs';
import CandidateStatus from '../screens/CandidateStatus';
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
