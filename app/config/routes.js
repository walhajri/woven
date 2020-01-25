import Home from '../screens/Home';
import AppliedJobs from '../screens/AppliedJobs';
import UserStack from './userStack';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AuthStack from './authStack';

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
    screen: AuthStack,
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
      App: UserStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);

export default App;
