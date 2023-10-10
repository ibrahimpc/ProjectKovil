import {StyleSheet} from 'react-native';
import {windowHeight} from '../../common/config';
import {colors} from '../../common';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  uploadContainer: {
    marginBottom: 30,
    marginTop: '6%',
    alignItems: 'center',
  },
  form: {
    // paddingHorizontal: 20,
    // paddingTop: 0.1 * windowHeight,
    margin: 20
  },
  moreImages: {
    marginHorizontal: 10,
    text: {
      fontSize: 18,
      fontWeight: '500',
      color: '#262626',
    },
  },
  imagePanel: {
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: -2, height: 4},
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 15,
    marginVertical: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    item: {
      marginHorizontal: 4,
    },
  },
  submitContainer: {
    marginVertical: 80,
    paddingBottom: 80,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    columnGap: 12,
  },
  cancelButton: {
    button: {
      backgroundColor: 'transparent',
      padding: 10,
    },
    title: {
      color: 'black',
      fontSize: 18,
    },
  },
  nextButton: {
    button: {
      backgroundColor: '#FFAA02',
      paddingVertical: 10,
      paddingHorizontal: 26,
      borderRadius: 22,
    },
    title: {
      color: 'white',
      fontSize: 18,
    },
  },
  preViewImageContainer: {
    borderWidth: 0.5,
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: colors.orangeColor,
  },
  preViewImage: {
    height: undefined,
    width: undefined,
    flex: 1,
    borderRadius: 75,
  },
  crossIconContainer: {position: 'absolute', right: 20, zIndex: 100},
  uploadtxt: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
  },

});
