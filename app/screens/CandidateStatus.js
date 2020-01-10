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
  constructor() {
    super();
    this.data = [
      {
        time: '17 Jan',
        title: 'Submit Request',
        circleColor: '#009688',
        lineColor: '#009688',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
      },
      {
        time: '18 Jan',
        title: 'Reviewed by Business',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
      },
      {
        time: '20 Jan',
        title: 'Accepted',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
      },
    ];
  }
  render() {
    const timeStyle = {
      textAlign: 'center',
      backgroundColor: EStyleSheet.value('$primaryColor'),
      color: 'white',
      padding: 5,
      borderRadius: 13,
    };
    const descriptionStyle = {color: 'gray'};
    const timeContainerStyle = {minWidth: 52, marginTop: -5};
    return (
      <Timeline
        circleSize={20}
        innerCircle="dot"
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={timeContainerStyle}
        timeStyle={timeStyle}
        descriptionStyle={descriptionStyle}
        options={{
          style: {paddingTop: 50, padding: 10},
        }}
        data={this.data}
      />
    );
  }
}

export default CandidateStatus;
