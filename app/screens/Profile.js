import React, {Component} from 'react';
import {Text, ActivityIndicator, Button} from 'react-native';
import {Container} from '../components/Container';
import auth from '@react-native-firebase/auth';
import EStyleSheet from 'react-native-extended-stylesheet';

class Profile extends Component {
  //check if the user is authenticated and then take him to the right screen
  render() {
    if (!auth().currentUser) {
      this.props.navigation.navigate('Login');
      return (
        <Container>
          <Text>You are not logedin</Text>
          <Button
            title="Login"
            color={EStyleSheet.value('$primaryColor')}
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </Container>
      );
    } else {
      return (
        <Container>
          <Text>Your Amazing Profile page {auth().currentUser.email}</Text>
          <Button
            title="Logout"
            color={EStyleSheet.value('$primaryColor')}
            onPress={() => {
              auth()
                .signOut()
                .then(this.props.navigation.navigate('Tab'));
              console.log(auth().currentUser);
            }}
          />
        </Container>
      );
    }
  }
}
export default Profile;
