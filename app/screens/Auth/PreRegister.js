import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Container} from '../../components/Container';
import EStyleSheet from 'react-native-extended-stylesheet';

class PreRegister extends Component {
  RegisterCompany = () => {
    console.log('add the company user');
    const {navigate} = this.props.navigation;
    navigate('Register', {registerType: 'company'});
  };
  Register = () => {
    console.log('add the individual user');
    const {navigate} = this.props.navigation;
    navigate('Register', {registerType: 'user'});
  };
  render() {
    return (
      <Container>
        <View style={styles.layout}>
          <Text style={styles.titleText}>Select Your Account</Text>
          <Button
            style={styles.submitButton}
            title="I want to work"
            type="outline"
            onPress={() => this.RegisterIndividual()}
          />
          <Button
            style={styles.submitButton}
            title="I want to hire"
            onPress={() => this.RegisterCompany()}
            type="outline"
          />
        </View>
      </Container>
    );
  }
}
const styles = EStyleSheet.create({
  submitButton: {
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 20,
  },
  layout: {
    marginTop: 150,
    margin: 10,
  },
  titleText: {
    marginLeft: 40,
    color: () => EStyleSheet.value('$primaryColor'),
    fontSize: 24,
  },
});
export default PreRegister;
