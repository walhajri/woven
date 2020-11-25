// import React,  from 'react';
import React, {Component, useEffect} from 'react';
import {View, Image} from 'react-native';
import {Container} from '../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import EStyleSheet from 'react-native-extended-stylesheet';

function MainScreen({ route, navigation }){

  useEffect(()=>{
    let db = firestore();
    if (auth().currentUser) {
      db.collection('users')
        .doc(auth().currentUser.uid)
        .get()
        .then(doc => {
          let User = 'UserPath';
          navigation.navigate(User);
        });
    } else {
      navigation.navigate('Auth');
    }
  });
  return (
    <Container>
      <View style={styles.imageLayout}>
        <Image
          source={require('../data/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </Container>
  );
  }

const styles = EStyleSheet.create({
  logo: {
    marginTop: 150,
    width: 150,
    height: 150,
    alignContent: 'center',
  },
  imageLayout: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MainScreen;
