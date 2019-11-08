import PropTypes from 'prop-types';
import React from 'react';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import {IconWithText} from '../IconWithText';
import styles from './styles';

const ButtonDaysList = list => {
  return (
    <FlatList
      style={styles.list}
      data={list.list}
      renderItem={({item, index}) => (
        <IconWithText text={index + 1} color={item} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

ButtonDaysList.prototype = {
  list: PropTypes.array,
};

export default ButtonDaysList;
