import {StyleSheet} from 'react-native';
import { colors, fontFamily } from '../../common';
export const styles = StyleSheet.create({
  dropDownContianer: {
    marginTop: 30,
    marginHorizontal: '10%',
  },
  DTextStyle: {
    fontFamily: fontFamily.popinRegular,
    fontSize: 15,
    color: colors.orangeColor,
    textTransform: 'capitalize',
  },
  DbuttonStyle: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    backgroundColor: colors.green2,
  },
});
