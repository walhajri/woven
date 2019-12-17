import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';
import Login from '../screens/Login';
import AppliedJobs from '../screens/AppliedJobs';
import Register from '../screens/Register';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    AppliedJobs: {
      screen: AppliedJobs,
      navigationOptions: () => ({
        title: 'Applied Jobs',
      }),
    },
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
