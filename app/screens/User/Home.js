import React, {Component} from 'react';
import {FlatList, View,Image} from 'react-native';
import offers from '../../data/offers';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import {Button} from 'react-native-elements';
import { Icon } from 'react-native-elements'
import EStyleSheet from 'react-native-extended-stylesheet';
import auth from '@react-native-firebase/auth';
import assetsObject from '../../assets/assets';

class Home extends Component {
  static navigationOptions = ({handlePress, navigation}) => ({
    headerRight: (
      //TODO: change the color of the button
      <Button
        style={{
          marginRight: 2000,
          fontWeight: 'bold',
          backgroundColor: '#008ba3'
        }}
        //<Image source={assetsObject.loginIcon}/>
        icon={<Image source={assetsObject.loginIcon}/>}
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
    // if (auth().currentUser) {
    //   this.props.navigation.navigate('UserPath');
    // }
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
