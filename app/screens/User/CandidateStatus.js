import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import appliedJobStatus from '../../data/firestore/appliedJobStatus';
import Timeline from 'react-native-timeline-flatlist';
import colors from '../../assets/color'

Icon.loadFont();
function CandidateStatus({ route, navigation }) {
  const [position, setPosition] = useState({});
  const [loading, setLoading] = useState(false);

useEffect(()=>{
  const param = route.param('item');
  //let status = await appliedJobStatus(param.position,param.seekerID);
  let status = appliedJobStatus(param.position,param.seekerID);
  setPosition(status);

});
  return (
    <Timeline
      circleSize={20}
      circleColor="rgb(45,156,219)"
      lineColor="rgb(45,156,219)"
      //description text color
      descriptionStyle={{color:'gray'}}
      //description box style
      detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
      options={{
        style: {paddingTop: 15, padding: 5},
      }}
      // to fix the shift problem
      timeContainerStyle={{minWidth:52, marginTop: -5}}
      data={position}
    />
  );
  }

//TODO use style instead of static values
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

//mock data
// this.data = [
    //   {
    //     time: '17 Jan',
    //     title: 'Submit Request',
    //     circleColor: colors.primaryColor,
    //     lineColor: colors.primaryColor,
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
    //   },
    //   {
    //     time: '18 Jan',
    //     title: 'Reviewed by Business',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
    //   },
    //   {
    //     time: '20 Jan',
    //     title: 'Accepted',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sem felis. Curabitur tempor lacinia felis et ullamcorper. Aliquam tristique quis erat eu lacinia. Praesent mollis at ligula id.',
    //   },
    // ];
