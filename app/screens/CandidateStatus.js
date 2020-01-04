import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container} from '../components/Container';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import jobStatus from '../data/jobStatus';
import Timeline from 'react-native-timeline-flatlist';

Icon.loadFont();
class CandidateStatus extends Component {
  handlePress = item => {
    const {navigate} = this.props.navigation;
    navigate('JobDetails', {item: item});
  };
  render() {
    // const styles = EStyleSheet.create({
    //   container: {
    //     flex: 1,
    //     padding: 20,
    //     paddingTop: 65,
    //     backgroundColor: 'white',
    //   },
    //   list: {
    //     flex: 1,
    //     marginTop: 20,
    //   },
    // });
    const iconStyleSuccess = {
      fontSize: 56,
      color: EStyleSheet.value('$primaryColor'),
    };
    const iconStyleFaill = {
      fontSize: 56,
      color: EStyleSheet.value('$gray'),
    };
    const pageLayout = {
      padding: 50,
      flexDirection: 'column',
    };
    const line = {
      flexDirection: 'column',
      borderLeftColor: 'black',
      borderWidth: 1,
    };
    return (
      <Container>
        <Timeline data={jobStatus} />
        <View style={pageLayout}>
          {/* <Icon name="check-circle" style={iconStyleSuccess} />
          <View style={line} />
          <Icon name="check-circle" style={iconStyleSuccess} />
          <Icon name="check-circle" style={iconStyleFaill} /> */}
        </View>
      </Container>
    );
  }
}

export default CandidateStatus;
