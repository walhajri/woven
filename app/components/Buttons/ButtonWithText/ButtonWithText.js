import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

const ButtonWithText = () => (
  <View style={styles.list}>
    <Icon name="android" />
    <Icon name="android" />
    <Icon name="android" />
    <Icon name="android" />
    <Icon name="android" />
    <Icon name="android" />
    <Icon name="android" />
  </View>
);

export default ButtonWithText;
