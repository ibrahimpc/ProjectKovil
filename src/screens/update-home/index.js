/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {PrimaryButton} from '../../components';
import {removeLoginSessionDetails} from '../../utils/preferences/localStorage';
import ApplicationContext from '../../utils/context-api/Context';
import {colors} from '../../common';
const UpdateHome = ({navigation}) => {
  const {userDetails, setLoginDetails} = useContext(ApplicationContext);
  const data = [
    {
      key: 1,
      name: 'Temple',
      image: require('../../utils/assets/images/temple.png'),
      color: '#96ADE7',
      page: 'MyTamples',
    },
    {
      key: 2,
      name: 'Priest',
      image: require('../../utils/assets/images/priest.png'),
      color: '#F3BB72',
      page: 'Poojari',
    },
    {
      key: 3,
      name: 'Astrologer',
      image: require('../../utils/assets/images/astrologer.png'),
      color: '#FF84A7',
      page: 'Profile',
    },
    {
      key: 4,
      name: 'Store',
      image: require('../../utils/assets/images/store.png'),
      color: '#B1DC76',
      page: 'Profile',
    },
    {
      key: 5,
      name: 'Artist',
      image: require('../../utils/assets/images/artist.png'),
      color: '#FF6657',
      page: 'Profile',
    },
    {
      key: 6,
      name: 'Admin Update',
      image: require('../../utils/assets/images/newuser.png'),
      color: '#A6E4E4',
      page: 'AdminUpdate',
    },
  ];
  const dataAdmin = [
    {
      key: 1,
      name: 'Add Employee',
      image: require('../../utils/assets/images/temple.png'),
      color: '#F3F3A7',
      page: 'AddEmployee',
    },
    {
      key: 2,
      name: 'Events',
      image: require('../../utils/assets/images/priest.png'),
      color: '#8cf5a8',
      page: 'AdminEvents',
    },
    {
      key: 3,
      name: 'Astrologer',
      image: require('../../utils/assets/images/astrologer.png'),
      color: '#a7a9e8',
      page: 'Astrologer',
    },
    {
      key: 4,
      name: 'IDols',
      image: require('../../utils/assets/images/store.png'),
      color: '#faaaad',
      page: 'Idol',
    },
    {
      key: 5,
      name: 'Artist',
      image: require('../../utils/assets/images/artist.png'),
      color: '#FF6657',
      page: 'Profile',
    },
    {
      key: 6,
      name: 'Admin',
      image: require('../../utils/assets/images/newuser.png'),
      color: '#e2abf5',
      page: 'Profile',
    },
  ];

  return (
    <>
      {userDetails.role === 'ROLE_USER' ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: colors.black}}>
            {' '}
            Inavalid User !!!{' '}
          </Text>
          <View>
            <PrimaryButton
              onPress={async () => {
                await removeLoginSessionDetails();
                setLoginDetails(null);
              }}
              bgColor={colors.orangeColor}
              radius={25}
              text={'Try Again'}
            />
          </View>
        </View>
      ) : (
        <FlatList
          data={userDetails.role === 'ROLE_ADMIN' ? dataAdmin : data}
          keyExtractor={({item, index}) => index}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
              <View style={{...styles.container, backgroundColor: item.color}}>
                <Image
                  source={item.image}
                  height={50}
                  width={60}
                  style={{
                    height: 60,
                    width: 70,
                    tintColor: 'white',
                    marginLeft: '5%',
                  }}
                />
                <Text style={styles.textContainer}>{item.name}</Text>
                <Icon
                  name="chevron-right"
                  color="white"
                  size={25}
                  style={{marginRight: '5%'}}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </>
  );
};

export default UpdateHome;
