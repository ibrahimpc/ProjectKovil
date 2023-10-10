import {StyleSheet} from 'react-native';
import {windowHeight} from '../../common/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 0.1 * windowHeight,
  },
  profileImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    text: {
      fontSize: 18,
      fontWeight: '500',
      color: '#262626',
      marginVertical: 15,
    },
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
});
