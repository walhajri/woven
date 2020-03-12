import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import MainStack from './config/routes';

EStyleSheet.build({
  $primaryColor: '#00bcd4',
  $darkPrimaryColor: '#005662',
  $gray: '#808080',
  $textColor: '#ffffff',
  $primaryText: '#000000',
  $secondaryText: '#808080',
  $border: '#E2E2E2',
  $white: '#ffff',
  $warning: 'red',
});

export default () => <MainStack />;
