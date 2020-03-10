import React, {Component} from 'react';
import {View, Image, Button} from 'react-native';
import {Container} from '../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {User, Business} from '../config/routes';

// let db = firestore();
// console.log(auth().currentUser);
// if (auth().currentUser) {
//   db.collection('users')
//     .doc(auth().currentUser.uid)
//     .get()
//     .then(doc => {
//       const Stack =
//         doc.data().accountType === 'individual' ? User : Business;
//       console.log('yooo', Stack);
//       const {navigate} = this.props.navigation;
//       navigate('Tab');
//       this.props.navigation.navigate(User);
//     });
// }
class Splash extends Component {
  handlePress = item => {
    console.log('hi');
  };
  render() {
    const logo = {
      marginTop: 50,
      width: 150,
      height: 150,
      alignContent: 'center',
    };
    const imageLayout = {
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
      <Container>
        <View style={imageLayout}>
          <Image
            source={require('../data/images/logo.png')}
            style={logo}
            resizeMode="contain"
          />
        </View>
        <Button title="Home" onPress={() => this.test()} />
      </Container>
    );
  }
}
export default Splash;
