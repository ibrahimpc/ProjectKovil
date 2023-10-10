/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
// import React, {useState, useEffect, useContext, createContext} from 'react';
// import {
//   Image,
//   Text,
//   View,
//   ImageBackground,
//   TouchableOpacity,
//   Platform,
// } from 'react-native';
// import {allTexts} from '../../common';
// import Entypo from 'react-native-vector-icons/Entypo';
// import {launchImageLibrary} from 'react-native-image-picker';
// import Icon from 'react-native-vector-icons/AntDesign';
// import {UploadPhoto} from '../../utils/svgs';
// import {styles} from './styles';
// import ApplicationContext from '../../utils/context-api/Context';
// import {
//   AddTempleAdmin,
//   createTemple,
//   UploadTemplePicture,
// } from '../../utils/api';
// const EditProfile = ({navigation, route}) => {
//   const {data} = route.params || {};
//     console.log('data', data);
//   const templeData = {
//     petalImage: 'https://www.linkpicture.com/q/hello.png',
//   };
//   const [image, setImage] = useState(null);
//   const [imageUploaded, setimageUploaded] = useState(false);
//   const [addBtnLoading, setaddBtnLoading] = useState(false);
//   const [userID, setUserID] = useState(1);
//   const {userDetails} = createContext(ApplicationContext);
//   const CreateTempleHandler = () => {
//     let CreatePayLoad = {
//       name: data.name,
//       desciption: data.desciption,
//       line1: data.line1,
//       line2: data.line2,
//       line3: data.line3,
//       establishedOn: data.establishedOn, // for now it was static
//       seasonal: data.seasonal,
//       platform: 'KOVELA',
//       zipCode: data.zipCode,
//       subCategoryId: 1, // for now it was static
//     };
//     console.log(CreatePayLoad, 'crepayload');
//     setaddBtnLoading(true);
//     createTemple(CreatePayLoad).then(createRes => {
//       console.log('create', createRes);
//       if (createRes && createRes.status === 200) {
//         console.log('1');
//         let id = createRes?.data?.id;
//         console.log('id', id);
//         setUserID(id);
//         let img = getImageObj(image);
//         console.log('img', img);
//         let formData = new FormData();
//         formData.append('jtItemId', id);
//         formData.append('profilePicture', img);
//         UploadTemplePicture(formData).then(picRes => {
//           // navigation.navigate(allTexts.screenNames.updateHome);
//           console.log('9', picRes);
//           if (picRes && picRes.status === 200) {
//             console.log('2');
//             let templeAdminPayload = {
//               itemId: id,
//               userName: userDetails.email,
//               roleName: allTexts.constants.roleTypes.admin,
//             };
//             AddTempleAdmin(templeAdminPayload).then(async res => {
//               console.log('3');
//               if (res && res.status === 200) {
//                 console.log('4');
//                 setaddBtnLoading(false);
//                 console.log('5');
//                 navigation.navigate(allTexts.screenNames.updateHome);
//                 // showCard();
//               }
//             });
//           }
//         });
//       }
//     });
//   };
//   const getImageObj = img => {
//     let newUri =
//       Platform.OS === 'ios' ? img.uri : img.uri.replace('file://', 'file:');
//     let imageObj = {
//       uri: newUri,
//       name: `${Date.now()}.jpg`,
//       type: 'image/jpeg',
//     };
//     return imageObj;
//   };
//   const uploadPhoto = () => {
//     // setImageLoading(true);
//     try {
//       launchImageLibrary(
//         {mediaType: 'photo', saveToPhotos: true, includeBase64: true},
//         res => {
//           if (!res.didCancel && !res.errorCode) {
//             setImage(res.assets[0]);
//             setimageUploaded(false);
//           } else {
//             console.log(res.errorMessage);
//           }
//           // setImageLoading(false);
//         },
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.viewContainer}>
//       <View style={styles.footerBackground}>
//         <ImageBackground
//           source={{uri: templeData.petalImage}}
//           style={styles.imageContainer}>
//           <TouchableOpacity
//             style={{margin: 5}}
//             onPress={() => navigation.goBack()}>
//             <Entypo name="chevron-left" color={'#FFA001'} size={30} />
//           </TouchableOpacity>
//           <View style={styles.uploadContainer}>
//             {image !== null ? (
//               <View style={styles.preViewImageContainer}>
//                 <View style={styles.crossIconContainer}>
//                   <Icon
//                     onPress={() => {
//                       setImage(null);
//                     }}
//                     name="closecircle"
//                     color={'#FFA001'}
//                     size={25}
//                   />
//                 </View>
//                 <Image
//                   resizeMode="cover"
//                   style={styles.preViewImage}
//                   source={{uri: image?.uri}}
//                 />
//               </View>
//             ) : (
//               <TouchableOpacity
//                 style={styles.uploadPic}
//                 onPress={() => {
//                   uploadPhoto();
//                 }}>
//                 <UploadPhoto />
//                 {imageUploaded && (
//                   <Text style={styles.noimageText}>
//                     {'Please upload a photo'}
//                   </Text>
//                 )}
//               </TouchableOpacity>
//             )}
//           </View>
//           <View>
//             <Text style={styles.uploadtxt}>UpLoad a Picture Here</Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => CreateTempleHandler()}
//             // onPress={() => navigation.navigate(allTexts.screenNames.addTample)}
//             style={{
//               ...styles.addbtn,
//               marginTop: image === null ? '120%' : '103%',
//             }}>
//             <Text style={styles.btntxt}>Add Temple</Text>
//           </TouchableOpacity>
//         </ImageBackground>
//       </View>
//     </View>
//   );
// };

// export default EditProfile;

import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import ApplicationContext from '../../utils/context-api/Context';
import {styles} from './styles';
import {PageHeader} from '../../components';
import React, {useState, useContext} from 'react';
import {UploadPhoto} from '../../utils/svgs';
import {allTexts} from '../../common';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  AddTempleAdmin,
  createTemple,
  UploadTemplePicture,
} from '../../utils/api';
const data = {
  images: [
    {
      uri: 'https://thumbs.dreamstime.com/b/indian-temple-3396438.jpg',
    },
    {
      uri: 'https://i.pinimg.com/736x/5b/a7/36/5ba736a47ea684c03ffc261c56d5da40.jpg',
    },
    {
      uri: 'https://iili.io/HwCsmH7.png',
    },
  ],
  petalImage: 'https://i.postimg.cc/bNn6hVhm/Untitled-design-2.png',
};

const EditProfile = ({navigation, route}) => {
  const {userDetails} = useContext(ApplicationContext);
  const [image, setImage] = useState(null);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [addBtnLoading, setaddBtnLoading] = useState(false);
  const [userID, setUserID] = useState(1);
  const {templeData, seasonal, popular} = route.params || {};
  console.log('data', templeData, 'sesaon', seasonal, 'pop', popular);
  const CreateTempleHandler = () => {
    let CreatePayLoad = {
      name: templeData.name,
      desciption: templeData.description,
      line1: templeData.address_line1,
      line2: templeData.address_line2,
      line3: templeData.address_line3,
      establishedOn: templeData.date, // for now it was static
      seasonal: seasonal,
      platform: 'KOVELA',
      zipCode: templeData.address_pincode,
      subCategoryId: 1, // for now it was static
    };
    console.log(CreatePayLoad, 'crepayload');
    setaddBtnLoading(true);
    createTemple(CreatePayLoad).then(createRes => {
      console.log('create', createRes);
      if (createRes && createRes.status === 200) {
        console.log('1');
        let id = createRes?.data?.id;
        console.log('id', id);
        setUserID(id);
        let img = getImageObj(image);
        console.log('img', img);
        let formData = new FormData();
        formData.append('jtItemId', id);
        formData.append('profilePicture', img);
        UploadTemplePicture(formData).then(picRes => {
          // navigation.navigate(allTexts.screenNames.updateHome);
          console.log('9', picRes);
          if (picRes && picRes.status === 200) {
            console.log('2');
            let templeAdminPayload = {
              itemId: id,
              userName: userDetails.email,
              roleName: allTexts.constants.roleTypes.admin,
            };
            AddTempleAdmin(templeAdminPayload).then(async res => {
              console.log('3');
              navigation.navigate(allTexts.screenNames.myTamples);
              if (res && res.status === 200) {
                console.log('4');
                setaddBtnLoading(false);
                console.log('5');
                navigation.navigate(allTexts.screenNames.updateHome);
                // showCard();
              }
            });
          }
        });
      }
    });
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
  const uploadPhoto = () => {
    // setImageLoading(true);
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
          // setImageLoading(false);
        },
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: data.petalImage}}>
        <View style={styles.form}>
          <PageHeader onPress={() => navigation.goBack()} />

          <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
            <View style={styles.uploadContainer}>
              {image !== null ? (
                <View style={styles.preViewImageContainer}>
                  <View style={styles.crossIconContainer}>
                    <Icon
                      onPress={() => {
                        setImage(null);
                      }}
                      name="closecircle"
                      color={'#FFA001'}
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
                  {imageUploaded && (
                    <Text style={styles.noimageText}>
                      {'Please upload a photo'}
                    </Text>
                  )}
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.moreImages}>
              <Text style={styles.moreImages.text}>Add More Images</Text>

              <View style={styles.imagePanel}>
                {data.images.map((image, index) => {
                  return (
                    <Pressable key={index} style={styles.imagePanel.item}>
                      <Image
                        source={{uri: image.uri}}
                        style={{
                          width: 95,
                          height: 95,
                          borderRadius: 10,
                        }}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </View>

            <View style={styles.submitContainer}>
              <TouchableHighlight
                style={styles.cancelButton.button}
                onPress={() => alert('Simple Button pressed')}>
                <Text style={styles.cancelButton.title}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.nextButton.button}
                onPress={() => CreateTempleHandler()}>
                <Text style={styles.nextButton.title}>Add Temple</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;
