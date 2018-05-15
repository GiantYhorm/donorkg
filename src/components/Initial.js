import React, {Component} from 'react';
import { View, Image, ActivityIndicator, AsyncStorage } from 'react-native';
import LanguageForm from './LanguageForm';
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class Initial extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Actions.secondMain();
      } else {
        Actions.login();
      }
    });
  }
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#fff'}}>

      </View>
    )
  }
}

export default Initial;