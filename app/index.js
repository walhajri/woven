import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#00bcd4',
  $darkPrimaryColor: '#005662',
  $textColor: '#ffffff',
  $primaryText: '#000000',
  $secondaryText: '#808080',
  $border: '#E2E2E2',
  $white: '#ffff',
});
export default () => <Home />;
