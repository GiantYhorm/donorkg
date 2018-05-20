import React, {Component} from 'react';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions'

async function fetchData(userDataFetching){
  await userDataFetching()
}

 class Initial extends Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        fetchData(fetchUserData).then(()=>Actions.main());
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

const mapStateToProps = ({ main }) => {
  const { user } = main;
  return { user };
};

export default connect(mapStateToProps, {
  fetchUserData,
})(Initial);