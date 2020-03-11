import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import {createStackNavigator} from 'react-navigation-stack';
import AuthStack from './authStack';

const UserStack = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        title: 'Profile',
      }),
    },
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
