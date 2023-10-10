import {StyleSheet} from 'react-native';
import {colors, fontFamily} from '../../common';
export const styles = StyleSheet.create({
  headerContinaer: {
    padding: 10,
    marginLeft: -25,
  },
  heading: {
    marginTop: 10,
    margin: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowButton: {
    borderRadius: 20,
    // padding: 3,
  },
  headText: {
    fontSize: 30,
    color: 'black',
    // marginLeft: '4%',
  },
  countTrack: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray5,
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  countText: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: fontFamily.popinBold,
  },
  trackScreenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  line: {
    width: 30,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: colors.black,
  },
  templeStep1view: {
    marginHorizontal: 30,
    marginTop: '5%',
    height: '100%',
    // backgroundColor: 'white'
  },
  subFormElement: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 25,
  },
  choiceText: {
    fontSize: 18,
    color: colors.orangeColor,
  },
  buttonContainer: {
    marginTop: 15,
    width: 90,
    alignSelf: 'flex-end',
  },
  uploadContainer: {
    marginBottom: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  preViewImage: {
    height: undefined,
    width: undefined,
    flex: 1,
    borderRadius: 75,
  },
  uploadPic: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noimageText: {color: colors.red2, textAlign: 'left'},
  crossIconContainer: {position: 'absolute', right: 20, zIndex: 100},
  preViewImageContainer: {
    borderWidth: 0.5,
    height: 150,
    width: 150,
    borderRadius: 75,
  },
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
    backgroundColor: colors.green3,
  },
  error: {
    color: colors.red2,
    textTransform: 'capitalize',
    fontFamily: fontFamily.popinRegular,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  buttonContainer1: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    marginRight: '5%',
  },
  reset: {
    borderWidth: 2,
    borderColor: colors.orangeColor,
    width: 90,
    alignItems: 'center',
    padding: 6,
    borderRadius: 8,
    marginRight: 10,
  },
  resetText: {
    color: colors.blue3,
    fontSize: 12,
    fontFamily: fontFamily.popinMedium,
  },
  addBtnContainer: {width: 90},
});
