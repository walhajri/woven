import UserStack from './userStack';
import UserTabStack from './userTabStack';
import BusinessTabStack from './businessTabStack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './authStack';
import BusinessStack from './businessStack';
import MainScreen from '../screens/MainScreen';
import Home from '../screens/User/Home';
import {createStackNavigator} from 'react-navigation-stack';
import VisitorStack from './visitorStack';

const MainStack = createAppContainer(
  createSwitchNavigator(
    {
      MainScreen: MainScreen,
      UserPath: UserTabStack,
      BusinessPath: BusinessTabStack,
      Auth: AuthStack,
      Visitor: VisitorStack,
    },
    {
      initialRouteName: 'MainScreen',
    },
  ),
);

const User = createSwitchNavigator(
  {
    UserTab: UserTabStack,
  },
  {
    initialRouteName: 'UserTab',
  },
);
const Business = createSwitchNavigator(
  {
    BusinessTab: BusinessTabStack,
    Business: BusinessStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'BusinessTab',
  },
);
export {MainStack, User, Business};
