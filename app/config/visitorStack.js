import React from 'react';
import Login from '../screens/Auth/Login';
import Profile from '../screens/Auth/Profile';
import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/color';

const Stack = createStackNavigator();
function VisitorStack() {
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
export default VisitorStack;
