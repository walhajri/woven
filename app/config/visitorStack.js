import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Auth/Login';
import Profile from '../screens/Auth/Profile';
import PreRegister from '../screens/Auth/PreRegister';
import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';

const VisitorStack = createStackNavigator(
  {
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

export default VisitorStack;
