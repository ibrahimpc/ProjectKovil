/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unreachable */
import React, {useContext} from 'react';
import {SafeAreaView, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, allTexts} from '../../common';
// import {CustomIcon} from '../../components';
import {
  Favorite,
  Home,
  MyTamples,
  Poojari,
  Profile,
  Search,
  TicketConfirmation,
} from '../index';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ApplicationContext from '../../utils/context-api/Context';

const Tab = createBottomTabNavigator();
export default BottomTabBase = ({navigation}) => {
  const GetHomeScreen = () => <Home navigation={navigation} />;
  const GetSearchScreen = () => <Search navigation={navigation} />;
  const GetPoojariScreen = () => <Poojari navigation={navigation} />;
  const GetTicketConfirmScreen = () => (
    <TicketConfirmation navigation={navigation} />
  );
  const GetFavoriteScreen = () => <Favorite navigation={navigation} />;
  const GetProfileScreen = () => <Profile navigation={navigation} />;
  const GetFavList = () => {
    const {favoriteList, customerRole} = useContext(ApplicationContext);
    if (customerRole === 'ROLE_AGENT') {
      return true;
    } else {
      return false;
    }
    // return favoriteList.length > 0 ? true : false;
  };
  const {customerRole} = useContext(ApplicationContext);
  return (
    <SafeAreaView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Tab.Navigator
        initialRouteName={
          GetFavList() ? allTexts.tabNames.home : allTexts.tabNames.search
        }
        tabBarOptions={{
          activeTintColor: colors.blue,
          keyboardHidesTabBar: true,
          showLabel: false,
        }}>
        <Tab.Screen
          name={allTexts.tabNames.home}
          component={customerRole === 'ROLE_AGENT' ? MyTamples : GetHomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <FoundationIcon name="home" color={color} size={30} />
              </>
            ),
          }}
        />
        {/* <Tab.Screen
          name={allTexts.tabNames.search}
          component={GetSearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <FeatherIcon name="search" color={color} size={30} />
              </>
            ),
          }}
        /> */}
        <Tab.Screen
          name={allTexts.screenNames.poojari}
          component={GetPoojariScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <Image
                  // source={require('../../../../kovelaadmin/assets/images/priest.webp')}
                  style={{height: 25, width: 30}}
                  color={color.blue}
                  size={30}
                />
                {/* <FeatherIcon name="search" color={color} size={30} /> */}
              </>
            ),
          }}
        />
        <Tab.Screen
          name={allTexts.tabNames.ticket}
          component={GetTicketConfirmScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <MaterialIcon
                  name="ticket-confirmation-outline"
                  color={color}
                  size={30}
                />
              </>
            ),
          }}
        />
        <Tab.Screen
          name={allTexts.tabNames.favorites}
          component={GetFavoriteScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <FontistoIcon name="heart-alt" color={color} size={25} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name={allTexts.tabNames.profile}
          component={GetProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <>
                <FeatherIcon name="user" color={color} size={30} />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
