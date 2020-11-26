import React, { useState, useEffect } from 'react';
import {View, Image, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import assetsObject from '../../assets/assets';
import EStyleSheet from 'react-native-extended-stylesheet';

Icon.loadFont();
function Login({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  function signin() {
      setError();
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          onLoginSuccess();
          navigateToRightStack();
        })
        .catch(error => {
          let errorCode = error.code;
          let errorMessage = error.message;
          switch (errorCode) {
            case 'auth/user-disabled':
              onLoginFailure('Your account has been disabled');
              break;
            case 'auth/invalid-email':
              onLoginFailure('This email is not vaild');
              break;
            case 'auth/user-not-found':
              onLoginFailure('This email is not registered');
              break;
            case 'auth/wrong-password':
              onLoginFailure('Wrong Password');
              break;
            default:
              onLoginFailure('Well something went wrong contact us' + errorMessage);
          }
        });
    }
  function navigateToRightStack() {
    let db = firestore();
    if (auth().currentUser) {
      db.collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then(doc => {
          let User = 'UserPath';
          navigation.navigate(User);
        });
    }
  }
  function onLoginSuccess() {
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  }
  function onLoginFailure(errorMessage) {
    setError(errorMessage);
    setLoading(false);
  }
  function register() {
    console.log('add the individual user');
    navigation.navigate('Register', {registerType: 'user'});
  };
  function home() {
    navigation.navigate('Visitor');
  };
  // useEffect(()=> {


  // }, [loading])
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} style={styles.loader} />
      </View>
    )
  }
  else{
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
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <Input
        placeholder="******"
        label="Password"
        secureTextEntry
        onChangeText={password => setPassword(password)}
        value={password}
      />
      <Button
        style={styles.submitButton}
        title="Login"
        onPress={() => signin()}
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
          onPress={() => register()}
        />
      </View>
      <View />
      <View />
      <Button
        style={styles.clearButton}
        type="clear"
        title="Skip"
        onPress={() => home()}
      />
    </View>
    <Text style={styles.errorTextStyle}>{error}</Text>
  </Container>
    )
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
