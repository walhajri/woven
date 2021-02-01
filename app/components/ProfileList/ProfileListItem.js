import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileListItem = ({
  iconName,
  title,
  description,
  numberOf,
  onPress,
  visible,
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View>
        <View style={styles.row}>
          <Icon name={iconName} size={26}/>
        
          <View style={styles.groupText}>
            <Text style={styles.primaryText}>{title}</Text>
            <Text style={styles.secondaryText}>{description!='None' ? description : ''}</Text>
          </View>
          <View>
            <Text style={styles.primaryText}>{numberOf!='None'? numberOf: ''}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
ProfileListItem.propTypes = {
  iconName: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  numberOf: PropTypes.string,
  onPress: PropTypes.func,
};

export default ProfileListItem;
