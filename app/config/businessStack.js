import HomeBusiness from '../screens/HomeBusiness';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from '../screens/Splash';

const BusinessStack = createStackNavigator(
  {
    // Splash: {
    //   screen: Splash,
    //   navigationOptions: () => ({
    //     title: 'Splash',
    //   }),
    // },
    Home: {
      screen: HomeBusiness,
      navigationOptions: () => ({
        title: 'Business Home',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);
export default BusinessStack;
