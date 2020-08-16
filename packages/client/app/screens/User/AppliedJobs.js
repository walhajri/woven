import React, {Component} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import appliedJobs from '../../data/appliedJobs';
import appliedJobStatus from '../../data/appliedJobStatus';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import assetsObject from '../../assets/assets';
import EStyleSheet from 'react-native-extended-stylesheet';

class AppliedJob extends Component {
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('CandidateStatus', {status: this.state.appliedJobStatus});
  };
  async componentDidMount() {
    let positions = await appliedJobs();
    let status = await appliedJobStatus();
    if (positions.length === 0) {
      this.setState({empty: true});
    }
    this.setState({appliedPositions: positions, appliedJobStatus: status});
    console.log('yo ma boy');
  }
  state = {appliedPositions: {}, appliedJobStatus: {}, empty: false, count: 0};

  render() {
    if (!this.state.empty) {
      return (
        <Container>
          <View>
            <FlatList
              data={this.state.appliedPositions}
              renderItem={({item}) => (
                <ListItem
                  img={item.img}
                  jobTile={item.jobTile}
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
