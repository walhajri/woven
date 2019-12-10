import React from 'react';
import PropTypes from 'prop-types';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';

const Container = ({children}) => (
  <SafeAreaView>
    <View style={styles.container}>{children}</View>
  </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
