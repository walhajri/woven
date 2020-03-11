import HomeBusiness from '../screens/Business/HomeBusiness';
import {createStackNavigator} from 'react-navigation-stack';

const BusinessStack = createStackNavigator(
  {
    BusinessHome: {
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
