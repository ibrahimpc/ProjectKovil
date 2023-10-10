/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import {allTexts} from '../../common';
import Icon from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary} from 'react-native-image-picker';
import {InputField1, PrimaryButton, BackgroundImage} from '../../components';
import {UploadPhoto} from '../../utils/svgs';
import {Switch} from '@react-native-material/core';
import {colors} from '../../common';
import {styles} from './styles';
import BackIcon from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';
import {fireSnackBar} from '../../common/snackbar';
import ApplicationContext from '../../utils/context-api/Context';
import {
  AddTempleAdmin,
  createTemple,
  UploadTemplePicture,
  getAuthTokenDetails,
} from '../../utils/api';
const NewAddTemple = ({navigation}) => {
  const {userDetails} = useContext(ApplicationContext);
  const [isRoleSelected, setIsRoleSelected] = useState('');
  const [isPopular, setIsPopular] = useState(false);
  const [isSeasonal, setIsSeasonal] = useState(false);
  const [screenNo, setScreenNo] = useState(1);
  const [image, setImage] = useState(null);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [dropDownError, setDropDownError] = useState(false);
  const [addBtnLoading, setaddBtnLoading] = useState(false);
  const [isAllDataAvailable, setIsAllDataAvailable] = useState(false);
  const [userID, setUserID] = useState(1);
  const [admin, setAdmin] = useState(false);
  const [templeData, setTempleData] = useState({
    name: '',
    description: '',
    date: '',
    address_line1: '',
    address_line2: '',
    address_line3: '',
    address_pincode: '',
    address_state: '',
    address_latitude: '',
    address_longitude: '',
    category: '',
    community: '',
    popular_temple: isPopular,
    seasonal: isSeasonal,
    email: '',
    roleSelected: isRoleSelected,
  });
  // console.log('userd', userDetails);
  const uploadPhoto = () => {
    try {
      launchImageLibrary(
        {mediaType: 'photo', saveToPhotos: true, includeBase64: true},
        res => {
          if (!res.didCancel && !res.errorCode) {
            setImage(res.assets[0]);
            setimageUploaded(false);
          } else {
            console.log(res.errorMessage);
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getImageObj = img => {
    let newUri =
      Platform.OS === 'ios' ? img.uri : img.uri.replace('file://', 'file:');
    let imageObj = {
      uri: newUri,
      name: `${Date.now()}.jpg`,
      type: 'image/jpeg',
    };
    return imageObj;
  };
  const step1 = () => {
    if (templeData.name === '') {
      fireSnackBar('temple name should be entered');
    } else if (templeData.description === '') {
      fireSnackBar('Discrription should be entered');
    } else if (templeData.community === '') {
      fireSnackBar('Community shold be entered');
    } else if (
      templeData.name &&
      templeData.description &&
      templeData.community
    ) {
      setScreenNo(2);
    } else {
      alert('something went wrong');
    }
  };
  const step2 = () => {
    if (templeData.address_pincode === '') {
      fireSnackBar('pincode name should be entered');
    } else if (templeData.address_line1 === '') {
      fireSnackBar('line1 should be entered');
    } else if (templeData.address_line2 === '') {
      fireSnackBar('Community shold be entered');
    } else if (templeData.address_line3 === '') {
      fireSnackBar('line3 shold be entered');
    } else if (
      templeData.address_pincode &&
      templeData.address_line1 &&
      templeData.address_line2 &&
      templeData.address_line3
    ) {
      setScreenNo(3);
    } else {
      alert('something went wrong');
    }
  };
  const step3 = async () => {
    if (image === null || '') {
      fireSnackBar('image should be select');
    } else {
      // setScreenNo(4);
      CreateTempleHandler();
    }
  };
  const step4 = () => {
    if (isRoleSelected === '') {
      fireSnackBar('role should be selected');
    } else {
      // console.log('----------', templeData);
    }
  };
  const CreateTempleHandler = () => {
    let CreatePayLoad = {
      name: templeData.name,
      desciption: templeData.description,
      line1: templeData.address_line1,
      line2: templeData.address_line2,
      line3: templeData.address_line3,
      establishedOn: templeData.date, // for now it was static
      seasonal: isSeasonal,
      platform: 'KOVELA',
      zipCode: templeData.address_pincode,
      subCategoryId: 1, // for now it was static
    };
    // console.log(CreatePayLoad, 'crepayload');
    setaddBtnLoading(true);
    createTemple(CreatePayLoad).then(createRes => {
      // console.log('create', createRes.data);
      if (createRes && createRes.status === 200) {
        let id = createRes?.data?.id;
        // console.log('id', id);
        setUserID(id);
        let img = getImageObj(image);
        console.log('img', img);
        let formData = new FormData();
        formData.append('jtItemId', id);
        formData.append('profilePicture', img);
        UploadTemplePicture(formData).then(picRes => {
          console.log('9', picRes);
          if (picRes && picRes.status === 200) {
            let templeAdminPayload = {
              itemId: id,
              userName: userDetails.email,
              roleName: allTexts.constants.roleTypes.admin,
            };
            AddTempleAdmin(templeAdminPayload).then(async res => {
              Alert.alert(
                'Success',
                `Temple Creation was done with code : ${createRes?.data?.code}`,
                [
                  {
                    text: 'Yes',
                    onPress: () =>
                      navigation.navigate(allTexts.screenNames.myTamples),
                  },
                ],
              );
              // navigation.navigate(allTexts.screenNames.myTamples);
              if (res && res.status === 200) {
                setaddBtnLoading(false);
              }
            });
          }
        });
      }
    });
  };
  // const openTwoButtonAlert = () => {
  //   Alert.alert('Success', 'Temple Creation was done with code 1234', [
  //     {text: 'Yes', onPress: () => console.log('Yes button clicked')},
  //   ]);
  // };
  const onResetBtnPress = () => {
    setTempleData('');
    setImage(null);
    setScreenNo(1);
  };
  // const IdVerify = async emp => {
  //   var myHeaders = new Headers();
  //   myHeaders.append('Authorization', token);
  //   myHeaders.append('Content-Type', 'application/json');
  //   myHeaders.append('Accept', 'application/json');

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow',
  //   };

  //   let token = await getAuthTokenDetails();
  //   let access_token = token.replace('bearer ', '');
  //   console.log('tocj------', access_token);
  //   fetch(
  //     `http://20.255.59.150:8082/api/v1/jtcustomer/search/${templeData?.email}?access_token=${access_token}`,
  //     requestOptions,
  //   )
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.validCustomer) {
  //         console.log('ok');
  //         // onAddBtnPress(emp, isRoleSelected, () => {
  //         //   setIsAllDataAvailable(true);
  //         // console.log('emp', emp);
  //         // });
  //       } else {
  //         setAdmin(true);
  //         setIsAllDataAvailable(false);
  //       }
  //     })
  //     .catch(error => console.log('error', error));
  // };
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <BackgroundImage />
      <SafeAreaView style={{height: '100%'}}>
        <View style={styles.headerContinaer}>
          <View style={styles.heading}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backArrowButton}>
              <BackIcon name="chevron-left" size={35} color={'orange'} />
            </TouchableOpacity>
            <Text style={styles.headText}>Add Temples</Text>
          </View>
        </View>
        <View style={styles.trackScreenContainer}>
          <CountNo
            no={1}
            onPress={() => {
              if (screenNo === 3 || screenNo === 2) {
                setScreenNo(1);
              }
            }}
            selectedNo={screenNo}
          />
          <View style={styles.line} />
          <CountNo
            no={2}
            onPress={() => {
              if (screenNo === 3) {
                setScreenNo(2);
              }
            }}
            selectedNo={screenNo}
          />
          <View style={styles.line} />
          <CountNo
            no={3}
            onPress={() => {
              if (screenNo === 3) {
                setScreenNo(3);
              }
            }}
            selectedNo={screenNo}
          />
          {/* <View style={styles.line} />
          <CountNo
            no={4}
            onPress={() => {
              if (screenNo === 4) {
                setScreenNo(4);
              }
            }}
            selectedNo={screenNo}
          /> */}
        </View>
        {screenNo === 1 && (
          <ScrollView>
            <View style={styles.templeStep1view}>
              <InputField1
                title={'Temple Name'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.name || {}}
                onChange={val => setTempleData({...templeData, name: val})}
              />
              <InputField1
                title={'Description'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.description}
                multiline={true}
                onChange={val =>
                  setTempleData({...templeData, description: val})
                }
              />
              <InputField1
                title={'Community'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.community}
                onChange={val => setTempleData({...templeData, community: val})}
              />
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Regular</Text>
                <Switch
                  value={isSeasonal}
                  onChange={() => setIsSeasonal(!isSeasonal)}
                  style={{marginLeft: '3%'}}
                />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Seasonal</Text>
                <Switch
                  value={isPopular}
                  onChange={() => setIsPopular(!isPopular)}
                />
              </View>
              <View style={{...styles.buttonContainer, marginTop: '45%'}}>
                <PrimaryButton
                  bgColor={colors.orangeColor}
                  onPress={() => step1()}
                  text={'next'}
                  radius={8}
                  fontsize={10}
                  padding={8}
                />
              </View>
            </View>
          </ScrollView>
        )}
        {screenNo === 2 && (
          <ScrollView>
            <View style={styles.templeStep1view}>
              <InputField1
                title={'Pincode'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.address_pincode}
                onChange={val =>
                  setTempleData({...templeData, address_pincode: val})
                }
              />
              <InputField1
                title={'Line 1'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.address_line1}
                onChange={val =>
                  setTempleData({...templeData, address_line1: val})
                }
              />
              <InputField1
                title={'Line 2'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.address_line2}
                onChange={val =>
                  setTempleData({...templeData, address_line2: val})
                }
              />
              <InputField1
                title={'Line 3'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.address_line3}
                onChange={val =>
                  setTempleData({...templeData, address_line3: val})
                }
              />
              <View style={{...styles.buttonContainer, marginTop: '48%'}}>
                <PrimaryButton
                  bgColor={colors.orangeColor}
                  onPress={() => step2()}
                  text={'next'}
                  radius={8}
                  fontsize={10}
                  padding={8}
                />
              </View>
            </View>
          </ScrollView>
        )}
        {screenNo === 3 && (
          <View>
            <View style={styles.templeStep1view}>
              <View style={styles.uploadContainer}>
                {image !== null ? (
                  <View style={styles.preViewImageContainer}>
                    <View style={styles.crossIconContainer}>
                      <Icon
                        onPress={() => {
                          setImage(null);
                        }}
                        name="closecircle"
                        color={colors.orangeColor}
                        size={25}
                      />
                    </View>
                    <Image
                      resizeMode="cover"
                      style={styles.preViewImage}
                      source={{uri: image?.uri}}
                    />
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.uploadPic}
                    onPress={() => {
                      uploadPhoto();
                    }}>
                    <UploadPhoto />
                  </TouchableOpacity>
                )}
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 24,
                  color: 'black',
                  fontWeight: 'bold',
                  marginTop: '5%',
                }}>
                Upload Profile Picture{' '}
              </Text>
              {/* <View style={{...styles.buttonContainer, marginTop: '95%'}}>
                <PrimaryButton
                  bgColor={colors.orangeColor}
                  onPress={() => step3()}
                  text={'next'}
                  radius={8}
                  fontsize={10}
                  padding={8}
                />
              </View> */}
              <View style={{...styles.buttonContainer1, marginTop: '30%'}}>
                <TouchableOpacity
                  onPress={() => onResetBtnPress()}
                  style={styles.reset}>
                  <Text style={styles.resetText}>{'Reset'}</Text>
                </TouchableOpacity>
                <View style={styles.addBtnContainer}>
                  <PrimaryButton
                    bgColor={colors.orangeColor}
                    onPress={() => step3()}
                    text={'add'}
                    radius={8}
                    fontsize={10}
                    padding={8}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
        {screenNo === 4 && (
          <View>
            <View style={{margin: 20}}>
              <InputField1
                title={'Email'}
                placeholder={'text here'}
                titleColor={colors.orangeColor}
                value={templeData.email}
                onChange={val => setTempleData({...templeData, email: val})}
              />
            </View>
            <View style={styles.dropDownContianer}>
              <SelectDropdown
                data={['admin', 'super admin']}
                buttonTextStyle={styles.DTextStyle}
                defaultValue={isRoleSelected}
                onSelect={e => {
                  setIsRoleSelected(e);
                  setDropDownError(false);
                  setTempleData({...templeData, roleSelected: e});
                  console.log('role', templeData.roleSelected);
                }}
                buttonStyle={styles.DbuttonStyle}
                defaultButtonText="Select Designation"
                renderDropdownIcon={() => (
                  <View>
                    <Icon color={colors.orangeColor} size={20} name="down" />
                  </View>
                )}
              />
            </View>
            <View style={{...styles.buttonContainer1, marginTop: '30%'}}>
              <TouchableOpacity
                onPress={() => onResetBtnPress()}
                style={styles.reset}>
                <Text style={styles.resetText}>{'Reset'}</Text>
              </TouchableOpacity>
              <View style={styles.addBtnContainer}>
                <PrimaryButton
                  bgColor={colors.orangeColor}
                  onPress={() => step4()}
                  text={'add'}
                  radius={8}
                  fontsize={10}
                  padding={8}
                />
              </View>
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};
export default NewAddTemple;
const CountNo = ({no, selectedNo, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.countTrack,
        {
          backgroundColor:
            selectedNo === no ? colors.orangeColor : colors.gray5,
          borderWidth: selectedNo === no ? 2 : 0,
          borderColor: colors.orangeColor,
        },
      ]}>
      <Text style={styles.countText}>{no}</Text>
    </TouchableOpacity>
  );
};
