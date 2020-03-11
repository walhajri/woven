import UserStack from './userStack';
import UserTabStack from './userTabStack';
import BusinessTabStack from './businessTabStack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './authStack';
import BusinessStack from './businessStack';
import MainScreen from '../screens/MainScreen';

const MainStack = createAppContainer(
  createSwitchNavigator(
    {
      MainScreen: MainScreen,
      UserPath: UserTabStack,
      BusinessPath: BusinessTabStack,
    },
    {
      initialRouteName: 'MainScreen',
    },
  ),
);

const User = createAppContainer(
  createSwitchNavigator(
    {
      UserTab: UserTabStack,
      User: UserStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'UserTab',
    },
  ),
);
const Business = createAppContainer(
  createSwitchNavigator(
    {
      BusinessTab: BusinessTabStack,
      Business: BusinessStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'BusinessTab',
    },
  ),
);
export {MainStack, User, Business};
