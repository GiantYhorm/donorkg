import { View, Text, Dimensions } from 'react-native'
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const WHITE = '#e5385d'
export const RED = '#e5385d'

export const textStyle={
  color: 'black',
  fontFamily: 'AvenirNextCyr-Regular'
};

export const boldTextStyle = {
  color: 'black',
  fontFamily: 'AvenirNextCyr-Demi'
};

export const headerTextStyle = {
  flex: 1,
  color: '#e5385d',
  textAlign: 'center',
  fontFamily: 'AvenirNextCyr-Medium',
  fontWeight: '400'
};