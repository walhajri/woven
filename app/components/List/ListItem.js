import PropTypes, { symbol } from 'prop-types';
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {ButtonWithText} from '../Buttons/ButtonWithText';
const ListItem = ({
  jobCompany,
  jobTile,
  jobLocation,
  jobTotalSalary,
  onPress,
  visible,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../data/images/starbucks.png')}
        />
        <View style={styles.groupText}>
          <Text style={styles.secondaryText}>{jobCompany}</Text>
          <Text style={styles.primaryText}>{jobTile}</Text>
          <Text style={styles.secondaryText}>{jobLocation}</Text>
        </View>
        <View>
          <Text style={styles.primaryText}>SR {jobTotalSalary}</Text>
        </View>
      </View>
      {/* <Text style={styles.text}>{text}</Text> */}
      <ButtonWithText />
    </View>
  </TouchableHighlight>
);
ListItem.propTypes = {
  jobCompany: PropTypes.string,
  jobTile: PropTypes.string,
  jobLocation: PropTypes.string,
  jobTotalSalary: PropTypes.string,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
};

export default ListItem;
