// import {StyleSheet} from 'react-native';
// export const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     // backgroundColor: 'white'
//   },
//   // searchTab: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   marginHorizontal: 30,
//   //   marginVertical: '10%',
//   //   borderRadius: 20,
//   //   backgroundColor: 'lightgray',
//   // },
//   iconsearch: {
//     marginHorizontal: 10,
//   },
//   mainTabBgImg: {
//     height: 250,
//     width: 250,
//     marginHorizontal: 7,
//   },
//   touchable: {marginLeft: '90%', position: 'absolute'},
//   searchTextInput: {fontSize: 18, maxWidth: '75%'},
//   searchTab: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 10,
//     marginVertical: 10,
//     borderRadius: 20,
//     backgroundColor: '#f2f0eb',
//     width: '75%',
//     marginLeft: 30,
//   },
// });

import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../common';
export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    height: 400,
  },
  heading: {
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 10,
  },
  backArrowButton: {
    borderRadius: 20,
    padding: 3,
  },
  headText: {
    fontSize: 26,
    marginLeft: '4%',
    fontWeight: 'bold',
  },
  planCardView1: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: '#FFB3B3',
    elevation: 3,
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.2,
    width: 200,
    height: 150,
  },
  cardContainer: {
    // padding: 15,
    borderRadius: 20,
    // marginHorizontal: 5,
    // marginLeft: '4%',
    margin: '4%',
  },
  searchTab: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f2f0eb',
    width: '75%',
    marginLeft: 30,
  },
  searchTextInput: {
    fontSize: 18,
    maxWidth: '100%',
  },
  iconfeed: {
    height: 50,
    width: 50,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  searchTabMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerBackground: {
    backgroundColor: '#fff',
    borderRadius: 25,
    height: '100%',
  },
  listItemContainer: {
    backgroundColor: '#FFB3B3',
    borderRadius: 10,
    padding: 12,
    margin: 10,
    borderColor: 'red',
  },
  secondaryContainer: {
    borderColor: 'blue',
    marginRight: 2,
    flexDirection: 'row',
  },
  bulletConatianer: {
    marginRight: 10,
  },
  bullet: {
    marginTop: 10,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.black,
  },
  itemHeading: {
    color: colors.black,
    fontSize: fontSize.xsmall,
    fontFamily: fontFamily.popinMedium,
    marginTop: -18,
    width: 130,
  },
  itemAdmin: {
    color: colors.green2,
    fontSize: fontSize.small,
    fontFamily: fontFamily.popinMedium,
  },
  itemLocation: {
    color: colors.Yellow2,
    fontSize: fontSize.small,
    fontFamily: fontFamily.popinMedium,
  },
  dateContainer: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  itemDate: {
    color: colors.green2,
    fontSize: fontSize.tiny,
    fontFamily: fontFamily.popinMedium,
  },
  templeCard: {
    height: 225,
    width: 170,
    alignItems: 'center',
    borderRadius: 25,
    padding: 12,
    margin: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
  },
  viewCard: {
    padding: 1,
    height: 150,
    width: 150,
    borderRadius: 20,
    // backgroundColor: 'black',
  },
  loaderContainer: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noAvailable: {
    color: colors.black,
    fontFamily: fontFamily.popinBold,
  },
  image: {
    marginTop: 5,
  },
  itemView: {
    position: 'absolute',
    top: '75%',

    right: '10%',

    left: '80%',

  },
  addContainer: {
    alignSelf: 'flex-end',
    marginTop: 70,
  },
  templeList: {
    marginLeft: 110,
  },
});
