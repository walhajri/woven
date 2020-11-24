import UserTabStack from './userTabStack';
import BusinessTabStack from './businessTabStack';
import AuthStack from './authStack';
import MainScreen from '../screens/MainScreen';
import VisitorStack from './visitorStack';
import React, {Component} from 'react';
import UserStack from './homeStack';
import BusinessStack from './businessStack';
import CandidateStatus from '../screens/User/CandidateStatus';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="UserPath" component={UserTabStack} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Visitor" component={VisitorStack} />
    </Stack.Navigator>
  );
}

export default MainStack;

// const MainStack = createAppContainer(
//   createSwitchNavigator(
//     {
//       MainScreen: MainScreen,
//       UserPath: UserTabStack,
//       Auth: AuthStack,
//       Visitor: VisitorStack,
//     },
//     {
//       initialRouteName: 'MainScreen',
//     },
//   ),
// );
