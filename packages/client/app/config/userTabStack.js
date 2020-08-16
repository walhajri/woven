import UserStack from './homeStack';
import AppliedJobStack from './appliedJobStack';
import AppliedJobs from '../screens/User/AppliedJobs';
import Profile from '../screens/Auth/Profile';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/User/Home';

const UserTabStack = createBottomTabNavigator({
  // changing the applied jobs screen with UserStack will not load new appiledJobs
  AppliedJobs: {
    screen: AppliedJobStack,
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
