import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import offers from '../../data/offers';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

Icon.loadFont();
//TODO: remove the login back button
class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <Button
        style={{
          marginRight: 10,
          fontWeight: 'bold',
          backgroundColor: 'red',
        }}
        icon={<Icon type="material" name="sign-in" size={20} color="white" />}
        onPress={() => {
          navigation.navigate('Auth');
        }}
      />
    ),
  });

  handlePress = item => {
    this.props.navigation.navigate('JobDetails', {item: item});
  };

  login = () => {
    this.props.navigation.navigate('login');
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
