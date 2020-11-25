import React, {Component, useEffect, useState} from 'react';
import {FlatList, View,Image} from 'react-native';
import offers from '../../data/firestore/offers';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';

function Home({ route, navigation }) {
  const [positions, setPositions] = useState({})

  handlePress = item => {
    navigation.navigate('JobDetails', {item: item});
  };

  login = () => {
    navigation.navigate('login');
  };
  useEffect(()=>{
    //initial line
    //let positionList = await offers();
    let positionList = offers();
    setPositions(positionList);

  });
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
