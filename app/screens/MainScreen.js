import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Container} from '../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class MainScreen extends Component {
  render() {
    let db = firestore();
    if (auth().currentUser) {
      db.collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then(doc => {
          let Business = 'BusinessPath';
          let User = 'UserPath';
          const Stack = doc.data().accountType === 'company' ? Business : User;
          const {navigate} = this.props.navigation;
          navigate(Stack);
        });
    } else {
      const {navigate} = this.props.navigation;
      navigate('Auth');
    }
    const logo = {
      marginTop: 150,
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
      </Container>
    );
  }
}
export default MainScreen;
