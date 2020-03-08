import HomeBusiness from '../screens/HomeBusiness';
import {createStackNavigator} from 'react-navigation-stack';

const BusinessStack = createStackNavigator(
  {
    Home: {
      screen: HomeBusiness,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);
export default BusinessStack;
