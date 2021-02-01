import React, { useState, useEffect } from 'react';
import {Text, ActivityIndicator, Button, View, FlatList} from 'react-native';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import EStyleSheet from 'react-native-extended-stylesheet';
import {ProfileListItem, Separator} from '../../components/ProfileList/';
import DATA from '../../data/local/profileListData'
function Profile({ route, navigation }) {
  
  const [loading, setLoading] = useState(false);
  function logout() {
    setLoading(true);
    auth()
      .signOut()
      .then(() => {
        onLoginSuccess();
        navigation.navigate('Visitor');
      });
  };
  function openDetails(item){
    return
  }
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
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
          <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <ProfileListItem
                iconName={item.iconName}
                title={item.title}
                description={item.description}
                numberOf={item.numberOf}
                onPress={() => this.openDetails(item)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Separator}
          />
          </View>
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
