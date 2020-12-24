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

const RootStack = createStackNavigator();
function MainStack() {
  return (
    <RootStack.Navigator initialRouteName="MainScreen">
      <RootStack.Screen name="MainScreen" 
        component={MainScreen} 
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />
      <RootStack.Screen name="UserPath" component={UserTabStack} />
      <RootStack.Screen name="Auth" component={AuthStack} />
      <RootStack.Screen name="Visitor" component={VisitorStack} />
      <RootStack.Screen name="CandidateStatus" component={CandidateStatus} />
    </RootStack.Navigator>
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
