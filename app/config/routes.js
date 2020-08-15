import UserTabStack from './userTabStack';
import BusinessTabStack from './businessTabStack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './authStack';
import MainScreen from '../screens/MainScreen';
import VisitorStack from './visitorStack';
import UserStack from './homeStack';
import BusinessStack from './businessStack';
import CandidateStatus from '../screens/User/CandidateStatus';

const MainStack = createAppContainer(
  createSwitchNavigator(
    {
      MainScreen: MainScreen,
      UserPath: UserTabStack,
      // User: UserStack,
      BusinessPath: BusinessTabStack,
      // Business: BusinessStack,
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
