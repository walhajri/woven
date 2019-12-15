import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: () => ({
        title: 'Register',
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        title: 'Login',
      }),
    },
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },
    JobDetails: {
      screen: JobDetails,
      navigationOptions: () => ({
        title: 'Job Discription',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);
const App = createAppContainer(MainNavigator);

export default App;
