import React, {Component} from 'react';
import {Text, ActivityIndicator, Button, View} from 'react-native';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useNavigation } from '@react-navigation/native';

function Profile() {
  const [loading, setLoading] = useState(false);
  function logout() {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        const navigation = useNavigation();
        onLoginSuccess();
        navigation.navigate('Visitor');
      });
  };
  function onLoginSuccess() {
    setLoading(false);
  };
  if (loading) {
    return (
      <Container>
        <View>
          <ActivityIndicator size={'large'} style={styles.loader} />
        </View>
      </Container>
    );
  }
  if (auth().currentUser) {
    return (
      <Container>
        <Text style={styles.textStyle}>
          Your Amazing Profile page {auth().currentUser.email}
        </Text>
        <Button
          title="Logout"
          onPress={() => logout()}
          style={styles.submitButton}
        />
      </Container>
    );
  } else {
    return <View />;
  }
}
const styles = EStyleSheet.create({
  loader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    marginTop: 90,
  },
  submitButton: {
    marginTop: 10,
    marginRight: 50,
    marginLeft: 50,
  },
  textStyle: {
    marginTop: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default Profile;
