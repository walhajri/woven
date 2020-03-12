import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import getPositions from '../../data/businessJobs';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

Icon.loadFont();
class HomeBusiness extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
        style={{
          marginRight: 10,
          fontWeight: 'bold',
        }}
        onPress={() => alert('This is a button!')}
        icon={<Icon type="material" name="plus" size={20} color="white" />}
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
const styles = EStyleSheet.create({
  text: {
    color: '$textColor',
  },
});
export default HomeBusiness;
