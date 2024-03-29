import React, {Component} from 'react';
import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import AppliedJobs from '../screens/User/AppliedJobs';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/color'

const Stack = createStackNavigator();
function AppliedJobStack() {
      return(
        <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: colors.darkPrimaryColor,
          },
          headerTintColor: colors.textColor,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
          <Stack.Screen name="AppliedJobs" component={AppliedJobs} />
          <Stack.Screen name="CandidateStatus" component={CandidateStatus}/>
        </Stack.Navigator>
      );
}
export default AppliedJobStack;
