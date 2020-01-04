import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Container} from '../components/Container';
import EStyleSheet from 'react-native-extended-stylesheet';

class Register extends Component {
  RegisterCompany = () => {
    console.log('add the company user');
    // const {navigate} = this.props.navigation;
    // navigate('Login');
  };
  RegisterIndividual = () => {
    console.log('add the individual user');
    // const {navigate} = this.props.navigation;
    // navigate('Login');
  };
  render() {
    const layout = {
      marginTop: 150,
      margin: 10,
    };
    const titleText = {
      marginLeft: 40,
      color: EStyleSheet.value('$primaryColor'),
      fontSize: 24,
    };
    const submitButton = {
      marginTop: 10,
      marginRight: 40,
      marginLeft: 40,
      borderRadius: 20,
      color: EStyleSheet.value('$primaryColor'),
    };
    return (
      <Container>
        <View style={layout}>
          <Text style={titleText}>Select Your Account</Text>
          <Button
            style={submitButton}
            title="I want to work"
            type="outline"
            onPress={() => this.RegisterIndividual()}
          />
          <Button
            style={submitButton}
            title="I want to hire"
            onPress={() => this.RegisterCompany()}
            type="outline"
          />
        </View>
      </Container>
    );
  }
}

export default Register;
