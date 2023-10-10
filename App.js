import React, {useEffect, useState} from 'react';
import {LogBox, View} from 'react-native';
import {allTexts} from './src/common';
import {
  Splash,
  SignUp,
  Signin,
  BottomTabBase,
  OTPScreen,
  HomeCardDetails,
  UpdatePassword,
  MyTamples,
  Service,
  Seemore,
  CreatePost,
  Poojari,
  Events,
  Favorite,
  Occasions,
  Manage,
  Calender,
  AddEvents,
  Profile,
  Splash_Screen,
  AddTempleNew,
  ViewProfile,
  TempleProfile,
  EditProfile,
  AddTempleKovela,
  AddTempleImage,
  NewAddTemple,
  AdminUpdate,
  AdminDetails,
} from './src/screens';
import {AddEmployee, AdminEvents, Astrologer, Idol} from './src/AdminPannel';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from 'react-native-splash-screen';
import {
  getAuthTokenDetails,
  saveUserDetails,
} from './src/utils/preferences/localStorage';
import ApplicationContext from './src/utils/context-api/Context';
import AddTample from './src/screens/add-temple';
import {getFavoritesList, getUserInfo} from './src/utils/api';
import UpdateHome from './src/screens/update-home';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

const App = () => {
  const {
    screenNames: {
      signin,
      otpScreen,
      signup,
      splash,
      bottomTab,
      homeDetails,
      updatePassword,
      myTamples,
      addTample,
      service,
      seemore,
      createPost,
      poojari,
      events,
      favlist,
      occasions,
      manage,
      calender,
      addevents,
      updateHome,
      profile,
      splashscreen,
      addtemplenew,
      viewprofile,
      templeprofile,
      editprofile,
      addtemplekovela,
      addtempleimage,
      newaddTemple,
      adminupdate,
      admindetails,
      addemployee,
      astrologer,
      adminevents,
      idol,
    },
  } = allTexts;

  useEffect(() => {
    getLoginDetails();
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1000);
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        {/*<Stack.Screen*/}
        {/*  name={splashscreen}*/}
        {/*  component={Splash_Screen}*/}
        {/*  options={{*/}
        {/*    headerShown: false,*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name={splash}*/}
        {/*  component={Splash}*/}
        {/*  options={{*/}
        {/*    headerShown: false,*/}
        {/*  }}*/}
        {/*/>*/}
        <Stack.Screen
          name={signup}
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={signin}
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={otpScreen}
          component={OTPScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        {/* <Stack.Screen
          name={bottomTab}
          component={BottomTabBase}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name={updateHome}
          component={UpdateHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={profile}
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={homeDetails}
          component={HomeCardDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={updatePassword}
          component={UpdatePassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={myTamples}
          component={MyTamples}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={addTample}
          component={AddTample}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={service}
          component={Service}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={seemore}
          component={Seemore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={createPost}
          component={CreatePost}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={poojari}
          component={Poojari}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={events}
          component={Events}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={favlist}
          component={Favorite}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={occasions}
          component={Occasions}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={manage}
          component={Manage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={calender}
          component={Calender}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={addevents}
          component={AddEvents}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={addtemplenew}
          component={AddTempleNew}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={viewprofile}
          component={ViewProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={templeprofile}
          component={TempleProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={editprofile}
          component={EditProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={newaddTemple}
          component={NewAddTemple}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={addtempleimage}
          component={AddTempleImage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={adminupdate}
          component={AdminUpdate}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={admindetails}
          component={AdminDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={addemployee}
          component={AddEmployee}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={astrologer}
          component={Astrologer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={adminevents}
          component={AdminEvents}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={idol}
          component={Idol}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  const Stack = createStackNavigator();
  const [loginDetails, setLoginDetails] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [favoriteList, setFavoriteList] = useState([]);
  const [id, setId] = useState();
  const [customerRole, setCustomerRole] = useState();
  const getLoginDetails = async () => {
    let authDetails = await getAuthTokenDetails();
    setLoginDetails(authDetails);
  };

  const getAndSaveUserInfo = async () => {
    try {
      let response = await getUserInfo();
      setCustomerRole(response?.data?.roles?.customerRoles[0]?.role?.roleName);
      if (response && response.status === 200) {
        const {
          data: {
            firstName,
            lastName,
            emailAddress,
            roles: {customerRoles},
          },
        } = response;
        let userRole = customerRoles[0];
        const {
          role: {roleName},
        } = userRole;
        saveUserDetails({
          username: `${firstName} ${lastName}`,
          email: emailAddress,
          role: roleName,
        });
        setUserDetails({
          username: `${firstName} ${lastName}`,
          email: emailAddress,
          role: roleName,
        });
      }
    } catch (error) {
      console.log('Error 786' + error.message);
    }
  };

  const getFollowedTempleList = async () => {
    try {
      let response = await getFavoritesList(0, 100);
      if (response && response.status === 200) {
        const {
          data: {followingObjects},
        } = response;
        setFavoriteList(followingObjects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loginDetails != null && loginDetails != '') {
      getAndSaveUserInfo();
      getFollowedTempleList();
    }
  }, [loginDetails]);

  return (
    <ApplicationContext.Provider
      value={{
        loginDetails,
        setLoginDetails,
        userDetails,
        setUserDetails,
        favoriteList,
        setFavoriteList,
        id,
        setId,
        customerRole,
        setCustomerRole,
      }}>
      <SafeAreaProvider>
        <NavigationContainer>
          {/*{loginDetails === null || loginDetails === '' ? (*/}
            <AuthStack />
          {/*) : (*/}
          {/*  <HomeStack />*/}
          {/*)}*/}
        </NavigationContainer>
      </SafeAreaProvider>
    </ApplicationContext.Provider>
  );
};

export default App;
