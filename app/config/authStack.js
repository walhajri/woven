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
          <Stack.Screen name="Profile" 
            component={Profile}
            options={({ navigation, route }) => ({
              //TODO: First time you serve to the scrren it show the login screen` then it disappear
              headerLeft:  null,
            })}/>
        </Stack.Navigator>
      );
}
export default AuthStack;