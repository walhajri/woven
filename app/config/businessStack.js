import HomeBusiness from '../screens/Business/HomeBusiness';
import {createStackNavigator} from 'react-navigation-stack';
import AddPostion from '../screens/Business/AddPostion';

const BusinessStack = createStackNavigator(
  {
    BusinessHome: {
      screen: HomeBusiness,
      navigationOptions: () => ({
        title: 'Business Home',
      }),
    },
    AddPostion: {
      screen: AddPostion,
      navigationOptions: () => ({
        title: 'Add Postion',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);
export default BusinessStack;
