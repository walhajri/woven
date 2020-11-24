import Login from '../screens/Auth/Login';
import Profile from '../screens/Auth/Profile';
import PreRegister from '../screens/Auth/PreRegister';
import Home from '../screens/User/Home';
import JobDetails from '../screens/User/JobDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function VisitorStack() {
      return(
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="JobDetails" component={JobDetails} />
        </Stack.Navigator>
      );
}
export default VisitorStack;
