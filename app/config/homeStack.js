import React from 'react';
import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import Profile from '../screens/Auth/Profile';
import CandidateStatus from '../screens/User/CandidateStatus';
import AppliedJobs from '../screens/User/AppliedJobs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function UserStack() {
      return(
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="JobDetails" component={JobDetails} />
        </Stack.Navigator>
      );
}
export default UserStack;