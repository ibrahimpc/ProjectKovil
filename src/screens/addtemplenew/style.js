// import {StyleSheet} from 'react-native';
// import {colors, fontFamily} from '../../common';
// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   formContainer: {
//     marginHorizontal: 5,
//   },
//   subFormContainer: {
//     marginTop: 20,
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
//   subFormHeading: {
//     fontSize: 18,
//     fontWeight: '500',
//   },
//   subFormElement: {
//     marginVertical: 10,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     columnGap: 25,
//   },
//   choiceText: {
//     fontSize: 18,
//     color: '#7995AA',
//     marginRight: '3%',
//   },
//   mapContainer: {
//     marginVertical: 10,
//     backgroundColor: 'rgba(88, 88, 88, 0.3)',
//     height: 150,
//     borderRadius: 20,
//   },
//   radioLabelStyle: {
//     fontSize: 13,
//     color: colors.green2,
//     letterSpacing: -0.33,
//     fontFamily: fontFamily.popinMedium,
//     // paddingBottom: 4,
//     paddingRight: 10,
//   },
//   nxtBtn: {
//     marginBottom: '14%',
//     marginRight: 5,
//     width: '25%',
//     alignItems: 'center',
//     padding: 5,
//     borderRadius: 20,
//   },
//   nextTxt: {fontSize: 18, fontWeight: '700'},
// });

import {StyleSheet} from 'react-native';
import {windowHeight} from '../../common/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: '5%',
  },
  formContainer: {
    marginHorizontal: 5,
  },
  subFormContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  subFormHeading: {
    fontSize: 18,
    fontWeight: '500',
  },
  subFormElement: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 25,
  },
  choiceText: {
    fontSize: 18,
    color: '#7995AA',
  },
  mapContainer: {
    marginVertical: 10,
    backgroundColor: 'rgba(88, 88, 88, 0.3)',
    height: 150,
    borderRadius: 20,
  },
  submitContainer: {
    marginVertical: 40,
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
  input: {
    width: '100%',
    height: 50,
    fontSize: 16,
  },
  inputArea: {
    width: '100%',
    height: 150,
    fontSize: 16,
  },
  inputCut: {
    width: '45%',
    height: 50,
    fontSize: 16,
  },
});
