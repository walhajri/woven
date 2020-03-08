import Home from '../screens/Home';
import AppliedJobs from '../screens/AppliedJobs';
import UserStack from './userStack';
import Profile from '../screens/Profile';
import auth from '@react-native-firebase/auth';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AuthStack from './authStack';
import BusinessStack from './businessStack';

const TabStack = createBottomTabNavigator({
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

const App = createAppContainer(
  createSwitchNavigator(
    {
      Tab: TabStack,
      Auth: AuthStack,
      User: UserStack,
      Business: BusinessStack,
    },
    {
      initialRouteName: 'Business',
    },
  ),
);

export default App;
