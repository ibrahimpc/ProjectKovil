/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import {PageHeader} from '../../components';
import {Switch} from '@react-native-material/core';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {allTexts} from '../../common';
import {fireSnackBar} from '../../common/snackbar';
const AddTempleNew = ({navigation}) => {
  const [isPopular, setIsPopular] = useState(false);
  const [isSeasonal, setIsSeasonal] = useState(false);

  const [templeData, setTempleData] = useState({
    name: '',
    description: '',
    date: '',
    address_line1: '',
    address_line2: '',
    address_line3: '',
    address_pincode: '',
    address_state: '',
    address_latitude: '',
    address_longitude: '',
    category: '',
    community: '',
    popular_temple: isPopular,
    seasonal: isSeasonal,
  });
  const Validations = () => {
    if (templeData.name === '') {
      fireSnackBar('temple name should be entered');
    } else if (templeData.description === '') {
      fireSnackBar('Discription must enter');
    } else if (templeData.date === '') {
      fireSnackBar('enter the eastablishment date');
    } else if (templeData.address_line1 === '') {
      fireSnackBar('address should be filled');
    } else if (templeData.address_line2 === '') {
      fireSnackBar('address should be filled');
    } else if (templeData.address_line3 === '') {
      fireSnackBar('address should be filled');
    } else if (templeData.address_pincode === '') {
      fireSnackBar('enter the zipcode');
    } else {
      console.log(templeData, isSeasonal, isPopular, 'lllllllllllllllll');
      navigation.navigate(allTexts.screenNames.editprofile, {
        templeData: templeData,
        popular: isPopular,
        seasonal: isSeasonal,
      });
    }
  };
  const BG = {
    petalImage: 'https://www.linkpicture.com/q/hello.png',
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: 'https://i.postimg.cc/bNn6hVhm/Untitled-design-2.png'}}
        style={{height: 500, flex: 1}}>
        <View style={styles.form}>
          <PageHeader
            pageTitle={'Add Temples'}
            onPress={() => navigation.goBack()}
          />

          <ScrollView
            contentContainerStyle={styles.formContainer}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Details</Text>

              <View style={styles.subFormElement}>
                <TextInput
                  value={templeData.name}
                  label="Name of Temple"
                  onChangeText={e => setTempleData({...templeData, name: e})}
                  placeholder={'Type here'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Description"
                  multiline={true}
                  numberOfLines={4}
                  onChangeText={e =>
                    setTempleData({...templeData, description: e})
                  }
                  placeholder={'Type here'}
                  style={styles.inputArea}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Date of Establishment"
                  onChangeText={e => setTempleData({...templeData, date: e})}
                  placeholder={'DD-MM-YY'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
            </View>

            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Address</Text>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 1"
                  onChangeText={e =>
                    setTempleData({
                      ...templeData,
                      address_line1: e,
                    })
                  }
                  placeholder={'Address Line 1'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 2"
                  onChangeText={e =>
                    setTempleData({
                      ...templeData,
                      address_line2: e,
                    })
                  }
                  placeholder={'Address Line 2'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 3"
                  onChangeText={e =>
                    setTempleData({
                      ...templeData,
                      address_line3: e,
                    })
                  }
                  placeholder={'Address Line 3'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Pincode"
                  onChangeText={e =>
                    setTempleData({
                      ...templeData,
                      address_pincode: e,
                    })
                  }
                  placeholder={'Pincode'}
                  style={styles.inputCut}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
                <TextInput
                  label="State"
                  onChangeText={e =>
                    setTempleData({
                      ...templeData,
                      address_state: e,
                    })
                  }
                  placeholder={'State'}
                  style={styles.inputCut}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
            </View>

            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Drop Location Pin</Text>
              <View style={styles.mapContainer} />
            </View>

            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Miscellaneous</Text>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Categories"
                  onChangeText={e =>
                    setTempleData({...templeData, category: e})
                  }
                  placeholder={'Select Category'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Communities"
                  onChangeText={e =>
                    setTempleData({...templeData, community: e})
                  }
                  placeholder={'Select Community'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#FFA001"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Popular Temple</Text>
                <Switch
                  value={isSeasonal}
                  onChange={() => setIsSeasonal(!isSeasonal)}
                />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Seasonal</Text>
                <Switch
                  value={isPopular}
                  onChange={() => setIsPopular(!isPopular)}
                />
              </View>
            </View>

            <View style={styles.submitContainer}>
              <TouchableHighlight
                style={styles.cancelButton.button}
                onPress={() => alert('Simple Button pressed')}>
                <Text style={styles.cancelButton.title}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.nextButton.button}
                onPress={() => Validations()}>
                <Text style={styles.nextButton.title}>Next</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddTempleNew;
