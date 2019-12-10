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
    const button = {
      marginTop: 10,
      marginRight: 50,
      marginLeft: 50,
    };
    return (
      <Container>
        <View style={layout}>
          <Input placeholder="example@google.com" label="Email" />
          <Input placeholder="example@google.com" label="Password" />
          <Button
            style={button}
            title="Login"
            onPress={() => this.handlePress()}
          />
        </View>
      </Container>
    );
  }
}

export default Login;
