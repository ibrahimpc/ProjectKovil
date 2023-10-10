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

const AdminUpdate = ({navigation, route}) => {
  const {
    screenNames: {admindetails},
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
        setFilterItem(items?.filter(filTemp => filTemp?.code));
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
      filterItem.filter(item =>
        item.code.toUpperCase().includes(value.toUpperCase()),
      ),
    );
  };
  const filterTemple = () => {
    let data = filteredArray
      .filter(item => item.code)
      .map(({id, code, name, desciption, item}) => ({
        id,
        code,
        name,
        desciption,
        item,
      }));
    setFilterItem(data);
  };
  // console.log('filterItem', filterItem);
  // console.log('templeList', templeList);

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
                <Text style={styles.headText}>AdminUpdate</Text>
              </View>
              <View style={styles.searchTabMain}>
                <View style={styles.searchTab}>
                  <SearchBar
                    value={seracherdText}
                    placeHolder={'search with tmpl code'}
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
                            code={item.code}
                            date={item.creationTime}
                            onPress={() => {
                              navigation.navigate(admindetails, {
                                data: item,
                              });
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
        </ImageBackground>
      </View>
    </View>
  );
};

export default AdminUpdate;

const TempleListCard = ({name, code, onPress, img, post}) => {
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
          <Text style={styles.itemLocation}>{`code: ${code}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
