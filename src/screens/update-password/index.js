/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ToastAndroid, TouchableOpacity} from 'react-native';
import React, {useEffect, useContext, useState} from 'react';
import {InputField, PrimaryButton} from '../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {allTexts, colors} from '../../common';
import {Formik} from 'formik';
import {
  RegisterValidationSchema,
  UpdatePasswordValidation,
} from '../../common/schemas';
import {styles} from './style';
import {BackHeader} from '../../components';
import {RegistesrUser, UpdateUserPassword} from '../../utils/api';
import ApplicationContext from '../../utils/context-api/Context';
import Icon from 'react-native-vector-icons/Entypo';

const UpdatePassword = ({navigation}) => {
  const [temple, setTemple] = useState('');
  const {
    buttonTexts: {updatePassword},
    screenNames: {signin, otpScreen},
    placeHolders: {confirmPasswordPlace, passwordPlace},
    headings: {
      inputTitles: {password, confirmPassword},
    },
  } = allTexts;
  const {userDetails} = useContext(ApplicationContext);

  const updatePasswordHandler = async (values, formikActions) => {
    let payload = {
      userName: userDetails.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      updatePassword: true,
    };
    try {
      let result = await UpdateUserPassword(payload);
      formikActions.setSubmitting(false);
      if (result && result.status === 200) {
        ToastAndroid.show(
          'Successfully Updated your Password!',
          ToastAndroid.SHORT,
        );
        navigation.goBack();
      } else {
        ToastAndroid.show(
          'Error in Updating your Password!',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <BackHeader
          onBackPress={() => {
            navigation.goBack();
          }}
          txt={updatePassword}
        />
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.keyBoardStyle}
        contentContainerStyle={styles.scrollContainer}>
        <Formik
          onSubmit={(values, formikActions) => {
            updatePasswordHandler(values, formikActions);
          }}
          validationSchema={UpdatePasswordValidation}
          initialValues={{
            password: '',
            confirmPassword: '',
          }}>
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => {
            return (
              <View style={styles.fieldContainer}>
                <InputField
                  secureTextEntry
                  title={password}
                  titleColor={colors.green2}
                  placeholder={passwordPlace}
                  error={touched.password && errors.password}
                  onBlur={handleBlur('password')}
                  setState={handleChange('password')}
                />
                <View style={{height: 30}} />
                <InputField
                  secureTextEntry
                  title={confirmPassword}
                  titleColor={colors.green2}
                  placeholder={confirmPasswordPlace}
                  error={touched.confirmPassword && errors.confirmPassword}
                  onBlur={handleBlur('confirmPassword')}
                  setState={handleChange('confirmPassword')}
                />
                <View style={styles.buttonContainer}>
                  <PrimaryButton
                    bgColor={colors.blue3}
                    radius={25}
                    width={190}
                    loading={isSubmitting}
                    onPress={handleSubmit}
                    text={updatePassword}
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default UpdatePassword;
