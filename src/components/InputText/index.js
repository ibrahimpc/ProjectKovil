/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import {styles} from './style';
import {TextInput} from '@react-native-material/core';

export const TempleInput = ({
  label,
  placeholder,
  width,
  value,
  onChangetxt,
}) => {
  return (
    <TextInput
      value={value}
      variant="outlined"
      label={label}
      placeholder={placeholder}
      color={'#FFA001'}
      leadingContainerStyle={styles.inputField}
      style={{width: width}}
      onChangeText={onChangetxt}
    />
  );
};
