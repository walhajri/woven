import UserTabStack from './userTabStack';
import AuthStack from './authStack';
import MainScreen from '../screens/MainScreen';
import VisitorStack from './visitorStack';
import React, {Component} from 'react';
import UserStack from './homeStack';
import CandidateStatus from '../screens/User/CandidateStatus';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/color';

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
      <RootStack.Screen name="UserPath" 
        component={UserTabStack}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
        />
      <RootStack.Screen name="Auth" component={AuthStack} />
      <RootStack.Screen name="Visitor" component={VisitorStack} />
    </RootStack.Navigator>
  );
}

export default MainStack;