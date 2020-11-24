import React, {Component, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';

function Register({ route, navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [accountType, setAccountType] = useState('')
  function createUser() {
    setError('');
    setLoading(true);
    let db = firestore();
    auth()
      .createUserWithEmailAndPassword(email, tpassword)
      .then(cred => {
        return db
          .collection('users')
          .doc(cred.user.uid)
          .set({
            accountType: accountType,
          });
      })
      .then(() => {
        const navigation = useNavigation();
        onLoginSuccess();
        navigation.navigate('UserPath');
      })
      .catch(error => {
        let errorCode = error.code;
        let errorMessage = error.message;
        switch (errorCode) {
          case 'auth/weak-password':
            onLoginFailure('Weak password!');
            break;
          case 'auth/invalid-email':
            onLoginFailure('This email is not vaild');
            break;
          case 'auth/email-already-in-use':
            onLoginFailure('This email is already registers');
            break;
          default:
            onLoginFailure('Well something went wrong contact us' + errorMessage);
        }
      });
  };
  function onLoginSuccess() {
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  };
  function onLoginFailure(errorMessage) {
    setError(errorMessage);
    setLoading(false);
  }
  
  useEffect(()=> {
    const param = route.param('registerType');
    setAccountType(param)
  }, [accountType])
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} style={styles.loader} />
      </View>
    );
  }
  return (
    <View style={styles.layout}>
      <Input
        placeholder="example@google.com"
        label="Email"
        onChangeText={email => setEmail({email})}
        value={email}
      />
      <Input
        placeholder="******"
        label="Password"
        secureTextEntry
        onChangeText={password => setPassword({password})}
        value={password}
      />
      <Button
        style={styles.submitButton}
        title="Register"
        onPress={() => createUser()}
      />
      <Text style={styles.errorTextStyle}>{error}</Text>
    </View>
  );
}
const styles = EStyleSheet.create({
  layout: {
    marginTop: 150,
    margin: 10,
  },
  submitButton: {
    marginTop: 10,
    marginRight: 50,
    marginLeft: 50,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  errorTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: () => EStyleSheet.value('$warning'),
  },
});
export default Register;
