import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const fontSize = {
  iconSize: 70,
  title: 32,
  h1: 30,
  h2: 28,
  h3: 26,
  h4: 25,
  h5: 24,
  h6: 22,
  xxlarge: 20,
  xlarge: 19,
  large: 18,
  medium: 17,
  average: 18.5,
  normal: 16,
  normalHalf: 15.5,
  small: 15,
  xsmall: 14,
  xxsmall: 13,
  tiny: 12,
  xtiny: 11,
  xxtiny: 10,
  xxxtiny: 9,
  xxxtinyH: 9.5,
  big: 20,
  xbig: 27,
  xxbig: 29,
};
const fontFamily = {
  semiBold: 'Lato-Semibold',
  bold: 'Lato-Bold',
  extraBold: 'Lato-Heavy',
  medium: 'Lato-Medium',
  regular: 'Lato-Regular',
  thin: 'Lato-thin',
  light: 'Lato-Light',
  hairline: 'Lato-Hairline',
  black: 'Lato-Black',
  pangram: 'pangram',
  popinRegular: 'Poppins-Regular',
  popinBold: 'Poppins-Bold',
  popinMedium: 'Poppins-Medium',
  popinLight: 'Poppins-Light',
  popinSemi: 'Poppins-SemiBold',
  PoetsenOneRegular: 'PoetsenOne-Regular',
};

const window = {
  width,
  height,
};

// updated colors being used in all ober the project
const colors = {
  orangeColor: '#FFA001',
  red1: '#FF2E01',
  red2: '#CB0000',
  red3: '#EE6C4D',
  yellowColor: '#FFE600',
  yellow2: '#F3BB72',
  gold: '#FC9605',
  black: '#000',
  green: '#31932A',
  green2: '#0A673B',
  green3: '#E6F7F1',
  green4: '#EAF8F3',
  green5: '#CEF3E8',
  green6: '#B1DC76',
  blue: '#004FE9',
  white: '#FFFFFF',
  gray: '#595959',
  gray2: '#C2C2C2',
  gray3: '#ECECEC',
  gray4: '#F3F3F3',
  gray5: '#D9D9D9',
  darkBrown: '#3F2117',
  blue2: '#0098FD',
  blue3: '#06B3C4',
  blue4: '#96ADE7',
  pink: '#FF84A7',
  darkOrange: '#FF6657',
  Yellow2: '#FFAA02',
};

export {fontSize, fontFamily, window, colors};
