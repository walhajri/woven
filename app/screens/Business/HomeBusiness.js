import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import getPositions from '../../data/businessJobs';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import {Button, Icon} from 'react-native-elements';

class HomeBusiness extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        icon={<Icon name="arrow-right" size={15} color="white" />}
        color="#fff"
      />
    ),
  };
  handlePress = item => {
    console.log('hi');
  };

  state = {
    positions: {},
  };

  async componentDidMount() {
    var positions = await getPositions();
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
export default HomeBusiness;
