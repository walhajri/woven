import React, {Component} from 'react';
import {Text, FlatList, View} from 'react-native';
import offers from '../data/offers';
import {ListItem, Separator} from '../components/List';
import {Icon} from 'react-native-elements';
import {Container} from '../components/Container';

class Home extends Component {
  handlePress = () => {
    console.log('do something amazing');
  };

  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={offers}
            renderItem={({item}) => (
              <ListItem
                jobTile={item.jobTile}
                jobLocation={item.jobLocation}
                jobTotalSalary={item.jobTotalSalary}
                jobCompany={item.jobCompany}
                onPress={this.handlePress}
              />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </Container>
    );
  }
}
export default Home;
