/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
// import {StatusBar} from 'expo-status-bar';
import {
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {styles} from './style';
import { PageHeader } from '../../components';
import axios from 'axios';
import {useState} from 'react';

const data = {
  images: [
    {
      uri: 'https://thumbs.dreamstime.com/b/indian-temple-3396438.jpg',
    },
    {
      uri: 'https://i.pinimg.com/736x/5b/a7/36/5ba736a47ea684c03ffc261c56d5da40.jpg',
    },
    {
      uri: 'https://iili.io/HwCsmH7.png',
    },
  ],
  petalImage: 'https://i.postimg.cc/bNn6hVhm/Untitled-design-2.png',
};

function AddTempleImage({
  name,
  description,
  line1,
  line2,
  line3,
  establishedOn,
  seasonal,
  platform,
  zipCode,
  subCategoryId,
}) {
  const createTemple = () => {
    axios
      .post('http://20.255.59.150:8082/api/v1/agent/item/create', {
        name: name,
        description: description,
        line1: line1,
        line2: line2,
        line3: line3,
        establishedOn: establishedOn,
        seasonal: seasonal,
        platform: platform,
        zipCode: zipCode,
        subCategoryId: subCategoryId,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [filePath, setFilePath] = useState({
    data: '',
    uri: '',
  });
  const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState('');

  const chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  };

  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  };

  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setFilePath(response);
        setFileData(response.data);
        setFileUri(response.uri);
      }
    });
  };

  const renderFileData = () => {
    if (fileData) {
      return (
        <Image
          source={{uri: 'data:image/jpeg;base64,' + fileData}}
          style={styles.images}
        />
      );
    } else {
      return (
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/indian-temple-3396438.jpg',
          }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 200,
          }}
        />
      );
    }
  };

  const renderFileUri = () => {
    if (fileUri) {
      return <Image source={{uri: fileUri}} style={styles.images} />;
    }
    // else {
    //   return <Image
    //     source={require('./assets/galeryImages.jpg')}
    //     style={styles.images}
    //   />
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: data.petalImage}}>
        <View style={styles.form}>
          <PageHeader pageTitle={'Add Temples'} />

          <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/indian-temple-3396438.jpg',
                }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 200,
                }}
              />
              <Text style={styles.profileImage.text}>
                Upload Profile Picture
              </Text>
            </View>


            <View style={styles.moreImages}>
              <Text style={styles.moreImages.text}>Add More Images</Text>

              <View style={styles.imagePanel}>
                {data.images.map((image, index) => {
                  return (
                    <Pressable key={index} style={styles.imagePanel.item}>
                      <Image
                        source={{uri: image.uri}}
                        style={{
                          width: 95,
                          height: 95,
                          borderRadius: 10,
                        }}
                      />
                    </Pressable>
                  );
                })}
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
                onPress={createTemple}>
                <Text style={styles.nextButton.title}>Add Temple</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default AddTempleImage;
