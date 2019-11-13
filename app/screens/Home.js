import React, {Component} from 'react';
import {Text, FlatList, View} from 'react-native';
import offers from '../data/offers';
import {ListItem, Separator} from '../components/List';
import {Icon} from 'react-native-elements';
import {Container} from '../components/Container';
import PropTypes from 'prop-types';

class Home extends Component {
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('JobDetails', {item: item});
  };

  render() {
    return (
      <Container>
        <View>
          <FlatList
            data={offers}
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
