import React, {Component} from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';

class Initial extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase.auth().signOut()
      } else {
        Actions.login();
      }
    })
  }
  render() {
    return (
      <View style={{flex: 1,backgroundColor:'#fff'}}>

      </View>
    )
  }
}

export default Initial;