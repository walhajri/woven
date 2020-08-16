import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {ListItem, Separator} from '../../components/List';
import {Container} from '../../components/Container';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

Icon.loadFont();
class AddPostion extends Component {
  addJob() {
    let db = firestore();
    const {navigate} = this.props.navigation;
    if (auth().currentUser) {
      db.collection('postions').add({
        businessID: this.state.businessID,
        jobTitle: this.state.jobTitle,
        jobCompany: this.state.jobCompany,
        jobDays: this.state.jobDays,
        jobDescription: this.state.jobDescription,
        jobLocation: this.state.jobLocation,
        jobTotalSalary: this.state.jobTotalSalary,
        //TODO: Add toggle option for visibilty
        visible: true,
      });
      navigate('BusinessHome');
    }
  }
  state = {
    businessID: auth().currentUser.uid,
    jobTitle: '',
    jobCompany: '',
    //TODO: Make a group button for it
    jobDays: [0, 0, 0, 0, 0, 0, 0],
    jobDescription: '',
    jobLocation: '',
    jobTotalSalary: 0,
    visible: true,
  };
  render() {
    return (
      <Container>
        <Input
          placeholder="Postion title"
          label="Job title"
          onChangeText={jobTitle => this.setState({jobTitle})}
          value={this.state.jobTitle}
        />
        <Input
          placeholder="Company dame"
          label="Company"
          onChangeText={jobCompany => this.setState({jobCompany})}
          value={this.state.jobCompany}
        />
        <Input
          placeholder="Job description"
          label="Description"
          onChangeText={jobDescription => this.setState({jobDescription})}
          value={this.state.jobDescription}
        />
        <Input
          placeholder="Job location"
          label="Location"
          onChangeText={jobLocation => this.setState({jobLocation})}
          value={this.state.jobLocation}
        />
        <Input
          placeholder="Total salary"
          label="Salary"
          onChangeText={jobTotalSalary => this.setState({jobTotalSalary})}
          value={this.state.jobTotalSalary}
        />
        <Button
          style={styles.submitButton}
          title="Submit"
          onPress={() => this.addJob()}
        />
      </Container>
    );
  }
}
const styles = EStyleSheet.create({
  text: {
    color: '$textColor',
  },
});
export default AddPostion;
