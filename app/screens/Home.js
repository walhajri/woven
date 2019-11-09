import React, {Component} from 'react';
import {Text, FlatList, View} from 'react-native';
import offers from '../data/offers';
import {ListItem, Separator} from '../components/List';
import {Icon} from 'react-native-elements';
import {Container} from '../components/Container';
import PropTypes from 'prop-types';

class Home extends Component {
handlePress = () => {
    console.log('do something amazing');
    const {navigate} = this.props.navigation;
    navigate('JobDetails');
  };

  render() {
    const {navigate} = this.props.navigation;
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
                onPress={this.handlePress}
                jobDays={item.jobDays}
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
