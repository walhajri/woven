import Login from '../screens/Auth/Login';
import Profile from '../screens/Auth/Profile';
import Register from '../screens/Auth/Register';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import colors from '../assets/color';


const Stack = createStackNavigator();
function AuthStack() {
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      );
}
export default AuthStack;