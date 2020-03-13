import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container} from '../../components/Container';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Button} from 'react-native-elements';
import Timeline from 'react-native-timeline-flatlist';

Icon.loadFont();
class CandidateStatus extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: (
      //TODO: change the color of the button
      <Button
        style={{
          marginLeft: 10,
          fontWeight: 'bold',
        }}
        icon={
          <Icon type="material" name="chevron-left" size={20} color="white" />
        }
        onPress={() => {
          navigation.navigate('UserPath');
        }}
      />
    ),
  });
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
    return (
      <Timeline
        circleSize={20}
        innerCircle="dot"
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        timeContainerStyle={styles.timeContainerStyle}
        timeStyle={styles.timeStyle}
        descriptionStyle={styles.descriptionStyle}
        options={{
          style: {paddingTop: 50, padding: 10},
        }}
        data={this.data}
      />
    );
  }
}
const styles = EStyleSheet.create({
  timeStyle: {
    textAlign: 'center',
    backgroundColor: () => EStyleSheet.value('$primaryColor'),
    color: () => EStyleSheet.value('$white'),
    padding: 5,
    borderRadius: 13,
  },
  descriptionStyle: {color: () => EStyleSheet.value('$gray')},
  timeContainerStyle: {minWidth: 52, marginTop: -5},
});

export default CandidateStatus;
