import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';
import Login from '../screens/Login';
import AppliedJobs from '../screens/AppliedJobs';
import CandidateStatus from '../screens/CandidateStatus';
import Register from '../screens/Register';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },
    CandidateStatus: {
      screen: CandidateStatus,
      navigationOptions: () => ({
        title: 'Job Status',
      }),
    },
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
