import React, {Component} from 'react';
import {Text, ActivityIndicator, Button, View} from 'react-native';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import EStyleSheet from 'react-native-extended-stylesheet';

class Profile extends Component {
  logout = () => {
    this.setState({loading: true});
    this.render();
    auth()
      .signOut()
      .then(() => {
        this.onLoginSuccess();
        this.props.navigation.navigate('UserTabStack');
      });
  };
  login = () => {
    const {navigate} = this.props.navigation;
    navigate('Login');
  };
  onLoginSuccess() {
    this.setState({
      loading: false,
    });
  }
  state = {
    loading: false,
  };
  //check if the user is authenticated and then take him to the right screen
  render() {
    const loader = {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
      marginTop: 90,
    };
    const submitButton = {
      marginTop: 10,
      marginRight: 50,
      marginLeft: 50,
    };
    const textStyle = {
      marginTop: 80,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    };
    if (this.state.loading) {
      return (
        <Container>
          <View>
            <ActivityIndicator size={'large'} style={loader} />
          </View>
        </Container>
      );
    }
    if (!auth().currentUser) {
      return (
        <Container>
          <Text style={textStyle}>You are not logedin</Text>
          <Button
            style={submitButton}
            title="Login"
            onPress={() => this.login()}
          />
        </Container>
      );
    } else {
      return (
        <Container>
          <Text style={textStyle}>
            Your Amazing Profile page {auth().currentUser.email}
          </Text>
          <Button
            title="Logout"
            color={EStyleSheet.value('$primaryColor')}
            onPress={() => this.logout()}
            style={submitButton}
          />
        </Container>
      );
    }
  }
}
export default Profile;
