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



const Tab = createBottomTabNavigator();
function UserTabStack() {
  return(
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="AppliedJobsStack" component={AppliedJobStack} />
      <Tab.Screen name="HomeStack" component={homeStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default UserTabStack;
// const UserTabStack = createBottomTabNavigator({
//   // changing the applied jobs screen with UserStack will not load new appiledJobs
//   AppliedJobs: {
//     screen: AppliedJobStack,
//     navigationOptions: {
//       tabBarLabel: () => {
//         return null;
//       },
//       tabBarIcon: () => (
//         <Image
//           source={assetsObject.workIcon}
//         />
//       )
//     }
//   },
//   Home: {
//     screen: UserStack,
//     navigationOptions: {
//       tabBarLabel: () => {
//         return null;
//       },
//       tabBarIcon: () => (
//         <Image
//           source={assetsObject.homeIcon}
//         />
//       )
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: () => {
//         return null;
//       },
//       tabBarIcon: () => (
//         <Image
//           source={assetsObject.accountIcon}
//         />
//       )
//     }
//   },
// });