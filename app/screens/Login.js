import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container} from '../components/Container';

Icon.loadFont();
class Login extends Component {
  handlePress = () => {
    console.log('login');
    // const {navigate} = this.props.navigation;
    // navigate('Login');
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
          <Input placeholder="example@google.com" label="Email" />
          <Input placeholder="******" label="Password" />
          <Button
            style={submitButton}
            title="Login"
            onPress={() => this.handlePress()}
          />
          <View style={row}>
            <Button style={clearButton} type="clear" title="Forgot Password?" />
            <Button style={clearButton} type="clear" title="Register" />
          </View>
        </View>
      </Container>
    );
  }
}

export default Login;
