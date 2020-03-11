import React, {Component} from 'react';
import {Text, Button, View, Image} from 'react-native';
import {Container} from '../../components/Container';
import {Divider} from '../../components/Shapes/Divider';
import EStyleSheet from 'react-native-extended-stylesheet';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import assetsObject from '../../assets/assets';

class JobDetails extends Component {
  handlePress = () => {
    let db = firestore();
    const {navigate} = this.props.navigation;
    if (auth().currentUser) {
      // TODO: make sure not to add the same job twice
      db.collection('appliedJobs').add({
        postion: this.state.position.position,
        seekerID: auth().currentUser.uid,
        businessID: 'ss',
        status: 'review',
      });
      navigate('AppliedJobs', {job: this.render.param});
    } else {
      navigate('Auth');
    }
  };
  state = {
    position: {},
  };
  componentDidMount() {
    const param = this.props.navigation.getParam('item');
    this.setState({position: param});
  }
  render() {
    const param = this.state.position;
    return (
      <Container>
        <View style={styles.mainDetail}>
          <View>
            <Image
              source={param.img ? {uri: param.img} : assetsObject.companyIcon}
            />
          </View>
          <View>
            <Text style={styles.mainText}>{param.jobTile}</Text>
            <Text style={styles.subText}>{param.jobLocation}</Text>
            <Text style={styles.subText}>{param.jobTotalSalary + ' SR'}</Text>
          </View>
        </View>
        <Button
          style={styles.pagelayout}
          title="Apply"
          color={styles.row}
          onPress={() => this.handlePress()}
        />
        <Divider />
        <Text style={styles.title}>Job Description:</Text>
        <Text style={styles.pagelayout}>{param.jobDescription}</Text>
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  pagelayout: {margin: 20},
  title: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainText: {fontWeight: 'bold', fontSize: 18, margin: 10},
  subText: {
    fontStyle: 'italic',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 10,
  },
  mainDetail: {
    flexDirection: 'row',
  },
});

export default JobDetails;