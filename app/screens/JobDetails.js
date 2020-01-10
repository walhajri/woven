import React, {Component} from 'react';
import {Text, FlatList, Button} from 'react-native';
import {Container} from '../components/Container';
import {Divider} from '../components/Shapes/Divider';
import EStyleSheet from 'react-native-extended-stylesheet';
import auth from '@react-native-firebase/auth';

class JobDetails extends Component {
  handlePress = () => {
    const {navigate} = this.props.navigation;
    if (auth().currentUser) {
      navigate('AppliedJobs', {job: this.render.param});
    } else {
      navigate('Login');
    }
  };
  render() {
    const pagelayout = {margin: 20};
    const title = {
      margin: 10,
      fontSize: 20,
      fontWeight: 'bold',
    };
    const param = this.props.navigation.getParam('item');
    return (
      <Container>
        <Text style={title}>Job Title:</Text>
        <Text style={pagelayout}>{param.jobTile}</Text>
        <Divider />
        <Text style={title}>Job Description:</Text>
        <Text style={pagelayout}>{param.jobDescription}</Text>
        <Divider />
        <Text style={title}>Total Payment:</Text>
        <Text style={pagelayout}>{param.jobTotalSalary}</Text>
        <Divider />
        <Text style={title}>Skills:</Text>
        <FlatList
          style={pagelayout}
          data={param.jobSkill}
          renderItem={({item}) => <Text style={pagelayout}>{item}</Text>}
          keyExtractor={item => item}
        />
        <Button
          title="Apply"
          color={EStyleSheet.value('$primaryColor')}
          onPress={() => this.handlePress()}
        />
      </Container>
    );
  }
}

export default JobDetails;
