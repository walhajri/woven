import React, {Component} from 'react';
import {View, Image, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import assetsObject from '../../assets/assets';

Icon.loadFont();
class Login extends Component {
  signin() {
    this.setState({error: '', loading: true});
    this.render();
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.onLoginSuccess();
        const {navigate} = this.props.navigation;
        navigate('AppliedJobs');
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        switch (errorCode) {
          case 'auth/user-disabled':
            this.onLoginFailure.bind(this)('Your account has been disabled');
            break;
          case 'auth/invalid-email':
            this.onLoginFailure.bind(this)('This email is not vaild');
            break;
          case 'auth/user-not-found':
            this.onLoginFailure.bind(this)('This email is not registered');
            break;
          case 'auth/wrong-password':
            this.onLoginFailure.bind(this)('Wrong Password');
            break;
          default:
            this.onLoginFailure.bind(this)(
              'Well something went wrong contact us' + errorMessage,
            );
        }
      });
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }
  onLoginFailure(errorMessage) {
    this.setState({error: errorMessage, loading: false});
  }
  register = () => {
    const {navigate} = this.props.navigation;
    navigate('PreRegister');
  };
  home = () => {
    const {navigate} = this.props.navigation;
    navigate('Visitor');
  };
  state = {
    email: '',
    password: '',
    authentication: false,
    loading: false,
    error: '',
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
    const loader = {
      flex: 1,
      justifyContent: 'center',
      padding: 10,
    };
    const errorTextStyle = {
      fontSize: 18,
      alignSelf: 'center',
      color: 'red',
    };
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={'large'} style={loader} />
        </View>
      );
    }
    // if (auth().currentUser) {
    //   const {navigate} = this.props.navigation;
    //   navigate('Home');
    // }
    return (
      <Container>
        <View style={imageLayout}>
          <Image source={assetsObject.logo} style={logo} resizeMode="contain" />
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
            onPress={() => this.signin()}
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
        <Text style={errorTextStyle}>{this.state.error}</Text>
      </Container>
    );
  }
}

export default Login;