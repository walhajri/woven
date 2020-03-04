import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import PreRegister from '../screens/PreRegister';
import Register from '../screens/Register';

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
