import { isIphoneX } from 'react-native-iphone-x-helper';
import { Platform, StatusBar, Dimensions } from 'react-native';

export const scale = (size: number, standardScreenHeight = 680) => {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (size * deviceHeight) / standardScreenHeight;

  return `${Math.round(heightPercent)}px`;
};
