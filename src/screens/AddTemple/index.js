/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {StatusBar} from 'expo-status-bar';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import PageHeader from '../../components/PageHeader';
import {Switch} from '@react-native-material/core';
import {useState} from 'react';
import {TextInput} from 'react-native-paper';

function AddTempleKovela() {
  const [templeData, setTempleData] = useState({
    name: '',
    description: '',
    line1: '',
    line2: '',
    line3: '',
    establishedOn: '',
    seasonal: false,
    platform: 'KOVELA',
    zipCode: '',
    subCategoryId: 1,
  });

  console.log(templeData);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: 'https://i.postimg.cc/bNn6hVhm/Untitled-design-2.png'}}>
        <View style={styles.form}>
          <PageHeader pageTitle={'Add Temples'} />

          <ScrollView
            contentContainerStyle={styles.formContainer}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}>
            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Details</Text>

              <View style={styles.subFormElement}>
                <TextInput
                  label="Name of Temple"
                  value={templeData.name}
                  onChangeText={name =>
                    setTempleData({...templeData, name: name})
                  }
                  placeholder={'Type here'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Description"
                  multiline={true}
                  numberOfLines={4}
                  value={templeData.description}
                  onChangeText={e =>
                    setTempleData({...templeData, description: e})
                  }
                  placeholder={'Type here'}
                  style={styles.inputArea}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Date of Establishment"
                  value={templeData.establishedOn}
                  onChange={e =>
                    setTempleData({...templeData, establishedOn: e})
                  }
                  placeholder={'DD-MM-YY'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
            </View>

            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Address</Text>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 1"
                  value={templeData.line1}
                  onChange={e => setTempleData({...templeData, line1: e})}
                  placeholder={'Address Line 1'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 2"
                  value={templeData.line2}
                  onChange={e => setTempleData({...templeData, line2: e})}
                  placeholder={'Address Line 2'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 3"
                  value={templeData.line3}
                  onChange={e => setTempleData({...templeData, line3: e})}
                  placeholder={'Address Line 3'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Pincode"
                  value={templeData.zipCode}
                  onChange={e => setTempleData({...templeData, zipCode: e})}
                  placeholder={'Pincode'}
                  style={styles.inputCut}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
                <TextInput
                  label="State"
                  placeholder={'State'}
                  style={styles.inputCut}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
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
                  placeholder={'Select Category'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Communities"
                  placeholder={'Select Community'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Popular Temple</Text>
                <Switch />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Seasonal</Text>
                <Switch
                  value={templeData.seasonal}
                  onChange={e =>
                    setTempleData({
                      ...templeData,
                      seasonal: !templeData.seasonal,
                    })
                  }
                />
              </View>
            </View>

            <View style={styles.subFormContainer}>
              <Text style={styles.subFormHeading}>Address</Text>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 1"
                  onChange={e =>
                    setTempleData({...templeData, line1: e.target.value})
                  }
                  placeholder={'Address Line 1'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 2"
                  onChange={e =>
                    setTempleData({...templeData, line2: e.target.value})
                  }
                  placeholder={'Address Line 2'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Address Line 3"
                  onChange={e =>
                    setTempleData({...templeData, line3: e.target.value})
                  }
                  placeholder={'Address Line 3'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Pincode"
                  onChange={e =>
                    setTempleData({...templeData, zipCode: e.target.value})
                  }
                  placeholder={'Pincode'}
                  style={styles.inputCut}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
                <TextInput
                  label="State"
                  placeholder={'State'}
                  style={styles.inputCut}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
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
                  placeholder={'Select Category'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <TextInput
                  label="Communities"
                  placeholder={'Select Community'}
                  style={styles.input}
                  mode="outlined"
                  activeOutlineColor="#7995AA"
                  outlineStyle={{borderRadius: 15}}
                />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Popular Temple</Text>
                <Switch value={true} />
              </View>
              <View style={styles.subFormElement}>
                <Text style={styles.choiceText}>Seasonal</Text>
                <Switch
                  onChange={e =>
                    setTempleData({...templeData, seasonal: e.target.value})
                  }
                  value={true}
                />
              </View>
            </View>

            <View style={styles.submitContainer}>
              <TouchableHighlight
                style={styles.cancelButton.button}
                onPress={() => setTempleData('')}>
                <Text style={styles.cancelButton.title}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.nextButton.button}
                onPress={() =>
                  navigation.navigate(
                    allTexts.screenNames.addtempleimage,
                    {
                      data: templeData,
                    },
                    console.log('okay'),
                  )
                }>
                <Text style={styles.nextButton.title}>Next</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default AddTempleKovela;
