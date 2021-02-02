import React from 'react';
import Profile from '../screens/Auth/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../assets/color'

const Stack = createStackNavigator();
function AccountStack() {
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
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      );
}
export default AccountStack;
