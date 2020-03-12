import UserTabStack from './userTabStack';
import BusinessTabStack from './businessTabStack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './authStack';
import MainScreen from '../screens/MainScreen';
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

// const User = createSwitchNavigator(
//   {
//     UserTab: UserTabStack,
//   },
//   {
//     initialRouteName: 'UserTab',
//   },
// );
// const Business = createSwitchNavigator(
//   {
//     BusinessTab: BusinessTabStack,
//     Business: BusinessStack,
//     Auth: AuthStack,
//   },
//   {
//     initialRouteName: 'BusinessTab',
//   },
// );
export default MainStack;
