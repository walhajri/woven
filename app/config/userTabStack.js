import UserStack from './homeStack';
import AppliedJobStack from './appliedJobStack';
import AppliedJobs from '../screens/User/AppliedJobs';
import Profile from '../screens/Auth/Profile';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React, {Component} from 'react';
import assetsObject from '../assets/assets';
import {Image} from 'react-native';



const UserTabStack = createBottomTabNavigator({
  // changing the applied jobs screen with UserStack will not load new appiledJobs
  AppliedJobs: {
    screen: AppliedJobStack,
    navigationOptions: {
      tabBarLabel: () => {
        return null;
      },
      tabBarIcon: () => (
        <Image
          source={assetsObject.workIcon}
        />
      )
    }
  },
  Home: {
    screen: UserStack,
    navigationOptions: {
      tabBarLabel: () => {
        return null;
      },
      tabBarIcon: () => (
        <Image
          source={assetsObject.homeIcon}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: () => {
        return null;
      },
      tabBarIcon: () => (
        <Image
          source={assetsObject.accountIcon}
        />
      )
    }
  },
});
export default UserTabStack;
