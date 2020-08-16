import React, {Component} from 'react';
import {View, Image, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import assetsObject from '../../assets/assets';
import EStyleSheet from 'react-native-extended-stylesheet';

Icon.loadFont();
class Login extends Component {
  signin() {
    this.setState({error: '', loading: true});
    this.render();
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.onLoginSuccess();
        this.navigateToRightStack();
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
  navigateToRightStack() {
    let db = firestore();
    if (auth().currentUser) {
      db.collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then(doc => {
          let Business = 'BusinessPath';
          let User = 'UserPath';
          const Stack = doc.data().accountType === 'company' ? Business : User;
          const {navigate} = this.props.navigation;
          navigate(Stack);
        });
    }
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
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size={'large'} style={styles.loader} />
        </View>
      );
    }
    return (
      <Container>
        <View style={styles.imageLayout}>
          <Image
            source={assetsObject.logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.layout}>
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
            style={styles.submitButton}
            title="Login"
            onPress={() => this.signin()}
          />
          <View style={styles.row}>
            <Button
              style={styles.clearButton}
              type="clear"
              title="Forgot Password?"
            />
            <Button
              style={styles.clearButton}
              type="clear"
              title="Register"
              onPress={() => this.register()}
            />
          </View>
          <View />
          <View />
          <Button
            style={styles.clearButton}
            type="clear"
            title="Skip"
            onPress={() => this.home()}
          />
        </View>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
      </Container>
    );
  }
}
const styles = EStyleSheet.create({
  layout: {
    marginTop: 50,
    margin: 10,
  },
  submitButton: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    alignContent: 'flex-end',
  },
  logo: {
    marginTop: 50,
    width: 150,
    height: 150,
    alignContent: 'center',
  },
  imageLayout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    marginTop: 90,
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: () => EStyleSheet.value('$warning'),
  },
});
export default Login;
