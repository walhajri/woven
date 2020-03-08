import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Container} from '../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class Register extends Component {
  Register = () => {
    this.setState({error: '', loading: true});
    this.renderCurrentState();
    let db = firestore();
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(cred => {
        return db
          .collection('users')
          .doc(cred.user.uid)
          .set({
            accountType: this.state.accountType,
          });
      })
      .then(() => {
        this.onLoginSuccess();
        const {navigate} = this.props.navigation;
        navigate('Tab');
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        switch (errorCode) {
          case 'auth/weak-password':
            this.onLoginFailure.bind(this)('Weak password!');
            break;
          case 'auth/invalid-email':
            this.onLoginFailure.bind(this)('This email is not vaild');
            break;
          case 'auth/email-already-in-use':
            this.onLoginFailure.bind(this)('This email is already registers');
            break;
          default:
            this.onLoginFailure.bind(this)(
              'Well something went wrong contact us' + errorMessage,
            );
        }
      });
  };
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
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
    accountType: '',
  };
  componentDidMount() {
    const param = this.props.navigation.getParam('registerType');
    this.setState({accountType: param});
  }
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
        <Text style={errorTextStyle}>{this.state.error}</Text>
      </View>
    );
  }
  render() {
    return <Container>{this.renderCurrentState()}</Container>;
  }
}

export default Register;
