/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Modal,
  ScrollView,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {allTexts, colors} from '../../common';
import {useIsFocused} from '@react-navigation/native';
import {getTempleList} from '../../utils/api';
import {Loader, SearchBar} from '../../components';

const MyTamples = ({navigation, route}) => {
  const {
    screenNames: {addtemplenew, addTample, newaddTemple},
  } = allTexts;
  const [templeList, setTempleList] = useState([]);
  const [filteredArray, setfilteredArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seracherdText, setSeracherdText] = useState('');
  const [filterItem, setFilterItem] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const changeModelVisible = value => {
    setIsVisible(value);
  };

  // console.log('visible', isVisible);

  const templeData = {
    petalImage: 'https://www.linkpicture.com/q/hello.png',
  };

  let isFocused = useIsFocused();
  const getTemples = async () => {
    try {
      let response = await getTempleList(0, 100);
      const {
        status,
        data: {items},
      } = response || {};
      if (response && status === 200) {
        setTempleList(items);
        setfilteredArray(items);
        setFilterItem(items?.filter(filTemp => filTemp?.name));
        // setFilterItem(items);

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTemples();
    filterTemple();
    filterItem;
  }, [isFocused]);
  const performFilter = value => {
    setfilteredArray(
      templeList.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };
  const filterTemple = () => {
    let data = filteredArray
      .filter(item => item.name)
      .map(({id, name}) => ({id, name}));
    setFilterItem(data);
  };
  // console.log('data', filteredArray);
  return (
    <View style={styles.viewContainer}>
      <View style={styles.footerBackground}>
        <ImageBackground
          source={{uri: templeData.petalImage}}
          style={styles.imageContainer}>
          <View>
            <View style={styles.container}>
              <View style={styles.heading}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.backArrowButton}>
                  <BackIcon name="chevron-left" size={35} color={'orange'} />
                </TouchableOpacity>
                <Text style={styles.headText}>Temples</Text>
              </View>
              <View style={styles.searchTabMain}>
                <View style={styles.searchTab}>
                  <SearchBar
                    value={seracherdText}
                    onCrossPress={() => {
                      setSeracherdText('');
                      getTemples();
                    }}
                    onTextChange={e => {
                      setSeracherdText(e);
                      performFilter(e);
                      filterTemple(e);
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={styles.iconfeed}
                  //onPress={() => setIsVisible(!isVisible)}
                  onPress={() => changeModelVisible(true)}>
                  <Image
                    // source={require('../../utils/assets/images/feedback.png')}
                    height={30}
                    width={30}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Modal
                  transparent={true}
                  animationType="fade"
                  visible={isVisible}
                  nRequestClose={() => changeModelVisible(false)}>
                  <TouchableOpacity onPress={() => changeModelVisible(false)}>
                    <View
                      style={{
                        height: 80,
                        width: 120,
                        left: 250,
                        top: 175,
                        borderRadius: 20,
                        backgroundColor: 'lightgray',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          alignItems: 'center',
                          marginLeft: 5,
                          padding: 10,
                          color: 'black',
                        }}>
                        Pincode
                      </Text>
                      <View
                        style={{
                          backgroundColor: 'gray',
                          alignItems: 'center',
                          height: 1,
                          width: 95,
                          marginLeft: 3,
                        }}
                      />
                      <Text
                        style={{
                          alignItems: 'center',
                          marginLeft: 8,
                          color: 'black',
                          bottom: -10,
                        }}>
                        Created by
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Modal>
              </View>
            </View>
          </View>
          <ScrollView>
            <View style={styles.cardContainer}>
              {loading === true ? (
                <View style={styles.loaderContainer}>
                  <Loader color={colors.green2} />
                </View>
              ) : (
                [
                  filterItem.length === 0 ? (
                    <View style={styles.loaderContainer}>
                      <Text style={styles.noAvailable}>
                        {'No Temples Available'}
                      </Text>
                    </View>
                  ) : (
                    <FlatList
                      data={filterItem}
                      numColumns={2}
                      showsVerticalScrollIndicator={false}
                      keyboardShouldPersistTaps="handled"
                      keyExtractor={(item, index) => item?.id}
                      renderItem={({item, index}) => {
                        return (
                          <TempleListCard
                            img={{
                              uri: item?.profilePicture?.url,
                            }}
                            // {media(filterItem)}
                            post={item}
                            name={item.name}
                            location={item.line1}
                            date={item.creationTime}
                            onPress={() => {
                              navigation.navigate(
                                allTexts.screenNames.viewprofile,
                                {
                                  id: item.id,
                                  title: item.name,
                                  profileImg: item?.profilePicture?.url,
                                  data: item,
                                },
                              );
                            }}
                          />
                        );
                      }}
                    />
                  ),
                ]
              )}
            </View>
          </ScrollView>
          <View style={styles.itemView}>
            <TouchableOpacity onPress={() => navigation.navigate(newaddTemple)}>
              <Image
                // source={require('../../utils/assets/images/addIcon.png')}
                height={30}
                width={30}
                style={styles.addContainer}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MyTamples;

const TempleListCard = ({name, location, onPress, img, post}) => {
  const renderImage = post => {
    if (post?.profilePicture?.url) {
      return (
        <View style={styles.mediaContainer}>
          <Image
            source={{uri: post?.profilePicture?.url}}
            style={{height: '100%', width: '100%'}}
            // resizeMode="cover"
          />
        </View>
      );
    } else {
      return (
        <Image
          // source={require('../../../../kovelaadmin/assets/images/islamabad.jpg')}
          style={{height: '100%', width: '100%'}}
          // resizeMode="cover"
        />
      );
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.templeCard}>
        <View style={styles.viewCard}>
          {/* <Image source={img} style={{height: '100%', width: '100%'}} /> */}
          {renderImage(post)}
        </View>
        <View>
          <View style={styles.templeList}>
            <BackIcon name="dots-three-horizontal" size={20} color="black" />
          </View>
          <Text style={styles.itemHeading} numberOfLines={1}>
            {name.length < 10 ? `${name}` : `${name.substring(0, 10)}...`}
          </Text>
          <Text style={styles.itemLocation}>{`${location}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
