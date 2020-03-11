import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import appliedJobs from '../../data/appliedJobs';
import appliedJobStatus from '../../data/appliedJobStatus';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';

class AppliedJob extends Component {
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('CandidateStatus', {status: this.state.appliedJobStatus});
  };
  login = () => {
    const {navigate} = this.props.navigation;
    navigate('Login');
  };
  async componentDidMount() {
    let positions = await appliedJobs();
    let status = await appliedJobStatus();
    this.setState({appliedPositions: positions, appliedJobStatus: status});
  }

  state = {appliedPositions: {}, appliedJobStatus: {}};

  render() {
    if (auth().currentUser) {
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
      const submitButton = {
        marginTop: 10,
        marginRight: 50,
        marginLeft: 50,
      };
      const textStyle = {
        marginTop: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      };
      return (
        <Container>
          <Text style={textStyle}>
            You need to login to see your applied jobs status
          </Text>
          <Button
            style={submitButton}
            title="Login"
            onPress={() => this.login()}
          />
        </Container>
      );
    }
  }
}
export default AppliedJob;
