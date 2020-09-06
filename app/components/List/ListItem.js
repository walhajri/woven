import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import {ButtonDaysList} from '../Buttons/ButtonDaysList';
import {IconWithText} from '../Buttons/IconWithText';
import assetsObject from '../../assets/assets';

const ListItem = ({
  img,
  jobCompany,
  jobTitle,
  jobLocation,
  jobTotalSalary,
  onPress,
  jobDays,
  visible,
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={img ? {uri: img} : assetsObject.companyIcon}
          />
          <View style={styles.groupText}>
            <Text style={styles.secondaryText}>{jobCompany}</Text>
            <Text style={styles.primaryText}>{jobTitle}</Text>
            <Text style={styles.secondaryText}>{jobLocation}</Text>
          </View>
          <View>
            <Text style={styles.primaryText}>SR {jobTotalSalary}</Text>
          </View>
        </View>
        <ButtonDaysList list={jobDays} />
      </View>
    </TouchableHighlight>
  );
};
ListItem.propTypes = {
  img: PropTypes.any,
  jobCompany: PropTypes.string,
  jobTitle: PropTypes.string,
  jobLocation: PropTypes.string,
  jobTotalSalary: PropTypes.string,
  jobDays: PropTypes.array,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  selected: PropTypes.bool,
  visible: PropTypes.bool,
};

export default ListItem;
