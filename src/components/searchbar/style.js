import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../common';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 30
  },

  field: {
    flex: 1,
    color: colors.black,
    fontFamily: fontFamily.popinRegular,
    fontSize: 16,
    padding: 8,
    height: 50,
  },
  iconContainer: {
    // padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'lightgray',
    borderRadius: 30
  },
  touchable: {marginLeft: '85%', position: 'absolute'},

});
