import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import appliedJobs from '../data/appliedJobs';
import {ListItem, Separator} from '../components/List';
import {Container} from '../components/Container';

class AppliedJob extends Component {
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('JobDetails', {item: item});
  };

  async componentDidMount() {
    console.log('here ');
    var positions = await appliedJobs();
    this.setState({appliedPositions: positions});
  }

  state = {appliedPositions: {}};

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
