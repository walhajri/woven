import React, {Component, useEffect, useState} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import appliedJobsUpdate from '../../data/firestore/appliedJobs';
// import appliedJobStatusUpdate from '../../data/firestore/appliedJobStatus';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import assetsObject from '../../assets/assets';
import EStyleSheet from 'react-native-extended-stylesheet';

function AppliedJob({navigation}) {
  const [appliedPositions, setAppliedPositions] = useState([]);
  const [empty, setEmpty] = useState(false);

  useEffect(() =>{
    appliedJobsUpdate().then((appliedPositions)=> setAppliedPositions(appliedPositions));
    if (appliedPositions.length === 0) {
      setEmpty(false);
    }else{
      setEmpty(true);
    }
  },[appliedPositions.length])
  handlePress = item => {
    navigation.navigate('CandidateStatus', {item: item});
  };
  if (empty) {
    return (
      <Container>
        <View>
          <FlatList
            data={appliedPositions}
            renderItem={({item}) => (
              <ListItem
                img={item.img}
                jobTitle={item.jobTitle}
                jobLocation={item.jobLocation}
                jobTotalSalary={item.jobTotalSalary}
                jobCompany={item.jobCompany}
                onPress={() => handlePress(item)}
                jobDays={item.jobDays}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </Container>
    );
  } else {
    return (
      <Container>
        <Text style={styles.textStyle}>You didn't applied to any job</Text>
        <Image
          source={assetsObject.emptyJob}
          style={styles.logo}
          resizeMode="contain"
        />
      </Container>
    );
  }
  }
const styles = EStyleSheet.create({
  textStyle: {
    marginTop: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});
export default AppliedJob;
