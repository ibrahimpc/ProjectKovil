/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './style';
import {AddTampleSchemaS3} from '../../common/schemas';
import {InputField, PrimaryButton} from '../index';
import {allTexts, colors} from '../../common';
import {Formik} from 'formik';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import {getAuthTokenDetails} from '../../utils/preferences/localStorage';
import {launchImageLibrary} from 'react-native-image-picker';
import {UploadPhoto} from '../../utils/svgs';
export const AddTampleStep3 = ({
  onAddBtnPress,
  data,
  isAllDataAvailable,
  setIsAllDataAvailable,
  onAllDataCollected,
  loading,
  onResetBtnPress,
  cardData,
  image,
  setImage,
}) => {
  const [isRoleSelected, setIsRoleSelected] = useState(data.role);
  const [dropDownError, setDropDownError] = useState(false);
  const [imageUploaded, setimageUploaded] = useState(false);
  const [admin, setAdmin] = useState(false);
  const IdVerify = async emp => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Accept', 'application/json');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    let token = await getAuthTokenDetails();
    let access_token = token.replace('bearer ', '');
    console.log('tocj------', access_token);
    fetch(
      `http://20.255.59.150:8082/api/v1/jtcustomer/search/${emp?.employeId}?access_token=${access_token}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.validCustomer) {
          onAddBtnPress(emp, isRoleSelected, () => {
            setIsAllDataAvailable(true);
            console.log('emp', emp);
          });
        } else {
          setAdmin(true);
          setIsAllDataAvailable(false);
        }
      })
      .catch(error => console.log('error', error));
  };
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
  useEffect(() => {}, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.uploadContainer}>
        {image !== null ? (
          <View style={styles.preViewImageContainer}>
            <View style={styles.crossIconContainer}>
              <Icon
                onPress={() => {
                  setImage(null);
                }}
                name="closecircle"
                color={colors.red2}
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
              <Text style={styles.noimageText}>{'Please upload a photo'}</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.keyBoardStyle}
        contentContainerStyle={styles.scrollContainer}>
        {/* <Formik
          onSubmit={(values, formikActions) => {
            console.log('statevalue', values);
            formikActions.setSubmitting(true);
            if (image === null) {
              setimageUploaded(true);
              return;
            } else if (isRoleSelected == '') {
              setDropDownError(true);
            } else {
              IdVerify(values);
            }
          }}
          validationSchema={AddTampleSchemaS3}
          initialValues={{
            employeId: data.employeId,
          }}>
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          }) => {
            return (
              <View style={styles.fieldContainer}>
                <InputField
                  value={values.employeId}
                  title={allTexts.headings.inputTitles.addEmployeeId}
                  titleColor={colors.orangeColor}
                  error={touched.employeId && errors.employeId}
                  onBlur={handleBlur('employeId')}
                  setState={handleChange('employeId')}
                  maxLength={25}
                />
                {admin && (
                  <Text style={styles.admin}>
                    you are not a valid user to add employee
                  </Text>
                )}
                <View style={styles.dropDownContianer}>
                  <SelectDropdown
                    data={['admin', 'super admin']}
                    buttonTextStyle={styles.DTextStyle}
                    defaultValue={isRoleSelected}
                    onSelect={e => {
                      setIsRoleSelected(e);
                      setDropDownError(false);
                    }}
                    buttonStyle={styles.DbuttonStyle}
                    defaultButtonText="Select Designation"
                    renderDropdownIcon={() => (
                      <View>
                        <Icon
                          color={colors.orangeColor}
                          size={20}
                          name="down"
                        />
                      </View>
                    )}
                  />
                  {dropDownError && (
                    <Text style={styles.error}>{allTexts.other.role}</Text>
                  )}
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      onResetBtnPress(() => setIsAllDataAvailable(false))
                    }
                    style={styles.reset}>
                    <Text style={styles.resetText}>{'Reset'}</Text>
                  </TouchableOpacity>
                  <View style={styles.addBtnContainer}>
                    <PrimaryButton
                      bgColor={colors.orangeColor}
                      onPress={handleSubmit}
                      // onPress={setIsAllDataAvailable}
                      text={'add'}
                      radius={8}
                      fontsize={10}
                      padding={8}
                      loading={loading}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        </Formik> */}
        <View style={styles.dropDownContianer}>
          <SelectDropdown
            data={['admin', 'super admin']}
            buttonTextStyle={styles.DTextStyle}
            defaultValue={isRoleSelected}
            onSelect={e => {
              setIsRoleSelected(e);
              setDropDownError(false);
            }}
            buttonStyle={styles.DbuttonStyle}
            defaultButtonText="Select Designation"
            renderDropdownIcon={() => (
              <View>
                <Icon color={colors.orangeColor} size={20} name="down" />
              </View>
            )}
          />
          {dropDownError && (
            <Text style={styles.error}>{allTexts.other.role}</Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => onResetBtnPress(() => setIsAllDataAvailable(false))}
            style={styles.reset}>
            <Text style={styles.resetText}>{'Reset'}</Text>
          </TouchableOpacity>
          <View style={styles.addBtnContainer}>
            <PrimaryButton
              bgColor={colors.orangeColor}
              // onPress={handleSubmit}
              onPress={setIsAllDataAvailable}
              text={'add'}
              radius={8}
              fontsize={10}
              padding={8}
              loading={loading}
            />
          </View>
        </View>

        {isAllDataAvailable && (
          <>
            <TempleListCard name={cardData.name} id={cardData.id} />
            <View style={styles.finishcontainer}>
              <PrimaryButton
                bgColor={colors.blue3}
                radius={25}
                text={'Finish'}
                onPress={onAllDataCollected}
              />
            </View>
          </>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};
const TempleListCard = ({name, id}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row1}>
        <View
          style={{
            backgroundColor: colors.black,
            height: 10,
            width: 10,
            borderRadius: 5,
            marginRight: 10,
          }}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.row2}>
        <Text
          style={
            styles.detail
          }>{`Designation - ${allTexts.constants.roleTypes.admin}`}</Text>
      </View>
      <View style={styles.row2}>
        <Text style={styles.detail}>{`Employee ID : ${id}`}</Text>
      </View>
    </View>
  );
};
