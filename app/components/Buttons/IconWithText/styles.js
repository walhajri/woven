import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  list: {
    flex: 0,
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    padding: 8,
  },
  active: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
  },
  inactive: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    width: 18,
    textAlign: 'center',
  },
});
