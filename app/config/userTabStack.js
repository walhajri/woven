import UserStack from './userStack';
import AppliedJobs from '../screens/AppliedJobs';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const UserTabStack = createBottomTabNavigator({
  AppliedJobs: {
    screen: AppliedJobs,
    navigationOptions: () => ({
      title: 'Applied Jobs',
    }),
  },
  Home: {
    screen: UserStack,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile',
    }),
  },
});
export default UserTabStack;
