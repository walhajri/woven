import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import styles from './styles';

const IconWithText = ({text, color}) => {
  const iconStyle = [styles.inactive];
  if (color) {
    iconStyle.push(styles.active);
  }
  return (
    <View style={iconStyle}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

IconWithText.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default IconWithText;
