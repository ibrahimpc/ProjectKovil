/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';
import {allTexts} from '../../common';
import {styles} from './styles';

const Splash_Screen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(allTexts.screenNames.splash);
    }, 1000);
  }, []);
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imgBackGround}
        source={require('../../utils/assets/images/newsplash.png')}
      />
    </View>
  );
};

export default Splash_Screen;
