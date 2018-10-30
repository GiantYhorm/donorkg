import ImagePicker from 'react-native-image-crop-picker';
import firebase from 'react-native-firebase';
import { PermissionsAndroid } from 'react-native';

export const pickImageFromGallety = (func) => {
  ImagePicker.openPicker({
    compressImageQuality: 1,
    mediaType: 'photo',
  }).then(image => {
    const { phoneNumber } = firebase.auth().currentUser;

    const imageRef = firebase.storage().ref(`users/${phoneNumber}/avatar.jpg`);
    imageRef.putFile(image.path)
      .then(() => {
        return imageRef.getDownloadURL();
      })
      .then(url => {
        func(url);
      })
  }).catch(err => console.log(err));
};
