import BusinessStack from './businessStack';
import AppliedJobs from '../screens/AppliedJobs';
import Profile from '../screens/Profile';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const BusinessTabStack = createBottomTabNavigator({
  AppliedJobs: {
    screen: AppliedJobs,
    navigationOptions: () => ({
      title: 'Applied Jobs',
    }),
  },
  Home: {
    screen: BusinessStack,
    navigationOptions: () => ({
      title: 'Business Home',
    }),
  },
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Profile',
    }),
  },
});
export default BusinessTabStack;
