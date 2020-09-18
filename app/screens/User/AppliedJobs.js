import React, {Component} from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import appliedJobs from '../../data/firestore/appliedJobs';
import appliedJobStatus from '../../data/firestore/appliedJobStatus';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import assetsObject from '../../assets/assets';
import EStyleSheet from 'react-native-extended-stylesheet';

class AppliedJob extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }

    // this will fire every time AppliedJob receives navigation focus
    this.props.navigation.addListener('willFocus', () => {
      this.componentDidMount()
    })
  }
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('CandidateStatus', {status: this.state.appliedJobStatus});
  };
  async componentDidMount() {
    let positions = await appliedJobs();
    let status = await appliedJobStatus();
    this.render()
    this.setState({appliedPositions: positions, appliedJobStatus: status});
    if (positions.length === 0) {
      this.setState({empty: true});
    }else{
      this.setState({empty: false})
    }
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
