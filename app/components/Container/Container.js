import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './styles';
// import SafeAreaView from 'react-native-safe-area-view';

const Container = ({children}) => (
  // <SafeAreaView>
    <View style={styles.container}>{children}</View>
  // </SafeAreaView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
