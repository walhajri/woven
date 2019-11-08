import {StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
  },
  groupText: {
    flex: 1,
    paddingLeft: 8,
  },
  primaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '$primaryText',
  },
  secondaryText: {
    fontSize: 14,
    color: '$secondaryText',
  },
  text: {
    color: '$primaryText',
    fontSize: 16,
  },
  separator: {
    backgroundColor: '$border',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20,
  },
  icon: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryColor',
  },
  checkIcon: {
    width: 18,
  },
  testicon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  testtext: {
    color: '#fff',
    width: 18,
  },
});
