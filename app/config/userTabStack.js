import UserStack from './userStack';
import AuthStack from './authStack';
import AppliedJobs from '../screens/User/AppliedJobs';
import Profile from '../screens/Auth/Profile';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/User/Home';

const UserTabStack = createBottomTabNavigator({
  AppliedJobs: {
    screen: AuthStack,
    navigationOptions: () => ({
      title: 'Applied Jobs',
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
  Profile: {
    screen: AuthStack,
    navigationOptions: () => ({
      title: 'Profile',
    }),
  },
});
export default UserTabStack;
