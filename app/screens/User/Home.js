import React, {Component, useEffect, useState} from 'react';
import {FlatList, View,Image} from 'react-native';
import offers from '../../data/firestore/offers';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


function Home({ route, navigation }) {
  const [positions, setPositions] = useState([]);
  const [position, setPosition] = useState({});


  handlePress = item => {
    if(auth().currentUser){
      let db = firestore();
      const path = db.collection('appliedJobs');
      const job = path.doc(auth().currentUser.uid+item.position);
      job.get().then(function(doc) {
        if (doc.exists) {
          Toast.show('Already appiled to this job');
          navigation.navigate('CandidateStatus', {item: item});
        }
        else{
          navigation.navigate('JobDetails', {item: item});
        }
      });
    }
    else{
      navigation.navigate('JobDetails', {item: item});
    }
  };

  login = () => {
    navigation.navigate('login');
  };
  useEffect(()=>{
    offers().then((positions)=> setPositions(positions));
  }, []);
  return (
    <Container>
      <View>
        <FlatList
          data={positions}
          renderItem={({item}) => (
            <ListItem
              img={item.img}
              jobTitle={item.jobTitle}
              jobLocation={item.jobLocation}
              jobTotalSalary={item.jobTotalSalary}
              jobCompany={item.jobCompany}
              onPress={() => this.handlePress(item)}
              jobDays={item.jobDays}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </Container>
  );
  }
export default Home;
