import {Dimensions, PixelRatio, Platform} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {colors} from './theme';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;
export const fireSnackBar = message => {
  setTimeout(() => {
    Snackbar.show({
      text: message,
      duration: 3000,
      backgroundColor: colors.orangeColor,
      textColor: colors.white,
      numberOfLines: 3,
    });
  }, 300);
};
