import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import appliedJobs from '../data/appliedJobs';
import appliedJobStatus from '../data/appliedJobStatus';
import {ListItem, Separator} from '../components/List';
import {Container} from '../components/Container';

class AppliedJob extends Component {
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('CandidateStatus', {status: this.state.appliedJobStatus});
  };

  async componentDidMount() {
    let positions = await appliedJobs();
    let status = await appliedJobStatus();
    this.setState({appliedPositions: positions, appliedJobStatus: status});
  }

  state = {appliedPositions: {}, appliedJobStatus: {}};

  render() {
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
  }
}
export default AppliedJob;
