import React, {Component} from 'react';
import {View} from 'react-native';
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
      console.log('username or password are wrong');
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
    navigate('Register');
  };
  state = {
    email: '',
    password: '',
    authentication: false,
  };
  render() {
    const layout = {
      marginTop: 200,
      margin: 10,
    };
    const submitButton = {
      marginTop: 10,
      marginRight: 50,
      marginLeft: 50,
    };
    const row = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    };
    const clearButton = {
      alignContent: 'flex-end',
    };

    return (
      <Container>
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
        </View>
      </Container>
    );
  }
}

export default Login;
