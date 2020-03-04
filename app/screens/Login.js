import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container} from '../components/Container';
import auth from '@react-native-firebase/auth';

Icon.loadFont();
class Login extends Component {
  handlePress = () => {
    this.signin();
    if (auth().currentUser) {
      const {navigate} = this.props.navigation;
      navigate('AppliedJobs', {});
    } else {
      alert('username or password are wrong');
    }
  };
  async signin() {
    await auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password,
    );
  }
  register = () => {
    const {navigate} = this.props.navigation;
    navigate('PreRegister');
  };
  home = () => {
    const {navigate} = this.props.navigation;
    navigate('Tab');
  };
  state = {
    email: '',
    password: '',
    authentication: false,
  };
  render() {
    const layout = {
      marginTop: 50,
      margin: 10,
    };
    const submitButton = {
      marginTop: 10,
    };
    const row = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    };
    const clearButton = {
      alignContent: 'flex-end',
    };
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
    if (auth().currentUser) {
      const {navigate} = this.props.navigation;
      navigate('Home');
    }
    return (
      <Container>
        <View style={imageLayout}>
          <Image
            source={require('../data/images/logo.png')}
            style={logo}
            resizeMode="contain"
          />
        </View>
        <View style={layout}>
          <Input
            placeholder="example@google.com"
            label="Email"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
          <Input
            placeholder="******"
            label="Password"
            secureTextEntry
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <Button
            style={submitButton}
            title="Login"
            onPress={() => this.handlePress()}
          />
          <View style={row}>
            <Button style={clearButton} type="clear" title="Forgot Password?" />
            <Button
              style={clearButton}
              type="clear"
              title="Register"
              onPress={() => this.register()}
            />
          </View>
          <View />
          <View />
          <Button
            style={clearButton}
            type="clear"
            title="Skip"
            onPress={() => this.home()}
          />
        </View>
      </Container>
    );
  }
}

export default Login;
