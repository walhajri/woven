import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import offers from '../data/offers';
import {ListItem, Separator} from '../components/List';
import {Container} from '../components/Container';

class Home extends Component {
  handlePress = item => {
    this.props.navigation.navigate('JobDetails', {item: item});
  };

  state = {
    positions: {},
  };

  async componentDidMount() {
    var positions = await offers();
    this.setState({
      positions: positions,
    });
  }

  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={this.state.positions}
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
export default Home;
