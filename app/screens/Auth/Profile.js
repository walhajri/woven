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
        this.props.navigation.navigate('Visitor');
      });
  };
  login = () => {
    const {navigate} = this.props.navigation;
    navigate('Profile');
  };
  onLoginSuccess() {
    this.setState({
      loading: false,
    });
  }
  state = {
    loading: false,
  };
  render() {
    if (this.state.loading) {
      return (
        <Container>
          <View>
            <ActivityIndicator size={'large'} style={styles.loader} />
          </View>
        </Container>
      );
    }
    return (
      <Container>
        <Text style={styles.textStyle}>
          Your Amazing Profile page {auth().currentUser.email}
        </Text>
        <Button
          title="Logout"
          onPress={() => this.logout()}
          style={styles.submitButton}
        />
      </Container>
    );
  }
}
const styles = EStyleSheet.create({
  loader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    marginTop: 90,
  },
  submitButton: {
    marginTop: 10,
    marginRight: 50,
    marginLeft: 50,
  },
  textStyle: {
    marginTop: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Profile;
