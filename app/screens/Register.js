import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Container} from '../components/Container';
import EStyleSheet from 'react-native-extended-stylesheet';
import auth from '@react-native-firebase/auth';

class Register extends Component {
  Register = () => {
    console.log('register');
    console.log(this.state.email);
    console.log(this.state.password);
    this.setState({authentication: true});
    const authPromis = auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password,
    );
  };
  state = {
    email: '',
    password: '',
    authentication: false,
  };
  renderCurrentState() {
    const layout = {
      marginTop: 150,
      margin: 10,
    };
    const submitButton = {
      marginTop: 10,
      marginRight: 50,
      marginLeft: 50,
    };
    if (this.state.authentication) {
      return <Text>You are loged in </Text>;
    }
    return (
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
          title="Register"
          onPress={() => this.Register()}
        />
      </View>
    );
  }
  render() {
    return <Container>{this.renderCurrentState()}</Container>;
  }
}

export default Register;
