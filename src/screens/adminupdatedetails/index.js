/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import {BackHeader, BackgroundImage} from '../../components';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../common';
import {getAuthTokenDetails} from '../../utils/preferences/localStorage';
import ApplicationContext from '../../utils/context-api/Context';
const AdminDetails = ({route, navigation}) => {
  const {userDetails} = useContext(ApplicationContext);
  const [checked, setChecked] = useState(false);
  const [isRoleSelected, setIsRoleSelected] = useState(false);
  const [email, setEmail] = useState('');
  const [isRole, setIsRole] = useState();
  const {data} = route.params || {};
  console.log('data', data);
  const RenderImage = () => {
    if (data?.profilePicture?.url) {
      console.log('1');
      return (
        <View>
          <Image
            source={{uri: data?.profilePicture?.url}}
            style={{height: 200, width: 150}}
          />
        </View>
      );
    } else if (!data?.profilePicture?.url) {
      console.log('2');
      return (
        <Image
          // source={require('../../../../kovelaadmin/assets/images/tempimg2.jpg')}
          style={{height: 200, width: 150}}
        />
      );
    }
  };
  const IdVerify = async emailid => {
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
    console.log('emailid', emailid);

    await fetch(
      `http://20.255.59.150:8082/api/v1/jtcustomer/search/${emailid}?access_token=${access_token}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.validCustomer) {
          console.log('ok valid');
          // onAddBtnPress(emp, isRoleSelected, () => {
          //   setIsAllDataAvailable(true);
          // console.log('emp', emp);
          // });
        } else {
          console.log('not ok');
          // setAdmin(true);
          // setIsAllDataAvailable(false);
        }
      })
      .catch(error => console.log('error', error));
  };
  console.log('email', email);

  return (
    <SafeAreaView>
      <BackgroundImage />
      <View style={{margin: '5%'}}>
        <BackHeader
          txt={'Admin Details'}
          onBackPress={() => navigation.goBack()}
        />
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          {RenderImage()}
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 18}}>{data.name} </Text>
            <Text>{`code: ${data?.code}`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '10%',
          }}>
          <Text style={{fontSize: 18}}> Want to Add Temple Admin</Text>
          <TouchableOpacity
            onPress={() => setChecked(!checked)}
            style={{marginLeft: 10}}>
            <Fontisto
              name={checked ? 'checkbox-active' : 'checkbox-passive'}
              size={20}
              color={colors.orangeColor}
            />
          </TouchableOpacity>
        </View>
        {checked && (
          <View style={{margin: 20}}>
            <TextInput
              placeholder="enter mail id"
              maxLength={40}
              onChangeText={e => setEmail(e)}
              style={{borderBottomWidth: 1, borderColor: colors.orangeColor}}
            />
            <View style={styles.dropDownContianer}>
              <SelectDropdown
                data={['admin', 'super admin']}
                buttonTextStyle={styles.DTextStyle}
                defaultValue={isRoleSelected}
                onSelect={e => {
                  setIsRoleSelected(e);
                  setIsRole(e);
                  console.log('role', isRole);
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
          </View>
        )}
      </View>
      {/* <TouchableOpacity onPress={() => IdVerify(email)}>
        <Text>click</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};
export default AdminDetails;
