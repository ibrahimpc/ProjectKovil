/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../common';
import {styles} from './style';
import {Loader} from '../index';
import IconVoice from 'react-native-vector-icons/MaterialIcons';

export const SearchBar = ({
  value,
  onTextChange,
  onSubmit,
  bgColor,
  placeHolder,
  loading,
  onCrossPress,
}) => {
  return (
    <View>
      <View
        style={[
          styles.searchContainer,
          // {backgroundColor: bgColor ? bgColor : colors.gray4},
        ]}>
        <View style={styles.iconContainer}>
          <Icon
            name="search1"
            size={25}
            color={colors.gray}
            style={{marginLeft: 10}}
          />

          <TextInput
            onChangeText={onTextChange}
            placeholderTextColor={colors.gray}
            placeholder={placeHolder || 'Search now'}
            style={styles.field}
            value={value}
            onSubmitEditing={onSubmit}
            selectionColor={'black'}
          />
          <TouchableOpacity style={styles.touchable}>
            <IconVoice name="keyboard-voice" size={25} />
          </TouchableOpacity>
          {loading && <Loader size={25} color={colors.Yellow2} />}
          {value !== '' && !loading && (
            <Feather
              onPress={onCrossPress}
              name="x-circle"
              color={colors.Yellow2}
              size={25}
            />
          )}
        </View>
      </View>
    </View>
  );
};
