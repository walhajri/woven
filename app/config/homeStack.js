import React from 'react';
import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import AppliedJobs from '../screens/User/AppliedJobs';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/color';

const Stack = createStackNavigator();
function UserStack() {
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
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="JobDetails" component={JobDetails} />
        </Stack.Navigator>
      );
}
export default UserStack;