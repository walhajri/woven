import UserStack from './homeStack';
import AppliedJobStack from './appliedJobStack';
import AppliedJobs from '../screens/User/AppliedJobs';
import Home from '../screens/User/Home';
import homeStack from '../config/homeStack'
import Profile from '../screens/Auth/Profile';
import React, {Component} from 'react';
import assetsObject from '../assets/assets';
import {Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/color';
import AuthStack from './authStack';



const Tab = createBottomTabNavigator();
function UserTabStack() {
  Icon.loadFont();
  return(
    <Tab.Navigator initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'AppliedJobsStack') {
            iconName = 'briefcase';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.success,
        inactiveTintColor: colors.gray,
      }} >
      <Tab.Screen name="AppliedJobsStack" component={AppliedJobStack} />
      <Tab.Screen name="HomeStack" component={homeStack} />
      <Tab.Screen name="Profile" component={AuthStack} />
    </Tab.Navigator>
  );
}
export default UserTabStack;