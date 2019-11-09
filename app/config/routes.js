import Home from '../screens/Home';
import JobDetails from '../screens/JobDetails';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  JobDetails: {
    screen: JobDetails,
  },
});
const App = createAppContainer(MainNavigator);

export default App;
