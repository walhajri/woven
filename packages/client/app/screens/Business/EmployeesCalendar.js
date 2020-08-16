import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../components/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

Icon.loadFont();
class EmployeesCalendar extends Component {
  render() {
    return (
      <Container>
        <CalendarList
          horizontal={true}
          markedDates={{
            '2020-03-01': {
              periods: [
                {startingDay: true, endingDay: false, color: '#6B4E71'},
                {startingDay: true, endingDay: false, color: '#3A4454'},
                {startingDay: true, endingDay: false, color: '#F3687E'},
              ],
            },
            '2020-03-02': {
              periods: [
                {startingDay: false, endingDay: false, color: '#6B4E71'},
                {startingDay: false, endingDay: false, color: '#3A4454'},
                {startingDay: false, endingDay: false, color: '#F3687E'},
              ],
            },
            '2020-03-03': {
              periods: [
                {startingDay: false, endingDay: false, color: '#6B4E71'},
                {startingDay: false, endingDay: false, color: '#3A4454'},
                {startingDay: false, endingDay: false, color: '#F3687E'},
              ],
            },
            '2020-03-04': {
              periods: [
                {startingDay: false, endingDay: false, color: '#6B4E71'},
                {startingDay: false, endingDay: false, color: '#3A4454'},
                {startingDay: false, endingDay: false, color: '#F3687E'},
              ],
            },
            '2020-03-05': {
              periods: [
                {startingDay: false, endingDay: false, color: '#6B4E71'},
                {startingDay: false, endingDay: false, color: '#3A4454'},
                {startingDay: false, endingDay: false, color: '#F3687E'},
              ],
            },
            '2020-03-06': {
              periods: [
                {startingDay: false, endingDay: false, color: '#6B4E71'},
                {startingDay: false, endingDay: false, color: '#3A4454'},
                {startingDay: false, endingDay: true, color: '#F3687E'},
              ],
            },
            '2020-03-07': {
              periods: [
                {startingDay: false, endingDay: false, color: '#6B4E71'},
                {startingDay: false, endingDay: true, color: '#3A4454'},
              ],
            },
            '2020-03-08': {
              periods: [
                {startingDay: false, endingDay: true, color: '#6B4E71'},
              ],
            },
          }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType="multi-period"
        />
        <Text style={{color: '#6B4E71', alignSelf: 'flex-start'}}>
          This Month Employees:
        </Text>
        <Text style={{color: '#6B4E71', alignSelf: 'flex-start'}}> Waleed</Text>
        <Text style={{color: '#3A4454', alignSelf: 'flex-start'}}> Belal</Text>
        <Text style={{color: '#F3687E', alignSelf: 'flex-start'}}> Saad</Text>
      </Container>
    );
  }
}
const styles = EStyleSheet.create({
  text: {
    color: '$textColor',
  },
});
export default EmployeesCalendar;
