import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/Login';
import Profile from '../screens/Auth/Profile';
import PreRegister from '../screens/Auth/PreRegister';
import Register from '../screens/Auth/Register';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Login',
      }),
    },
    PreRegister: {
      screen: PreRegister,
      navigationOptions: () => ({
        title: 'PreRegister',
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: () => ({
        title: 'Register',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

export default AuthStack;
