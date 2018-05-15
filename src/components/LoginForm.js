import React, { Component } from 'react'
import { View,Text,Dimensions } from 'react-native'
import { connect } from 'react-redux'
import {  } from '../actions'
import {  } from './common'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar';
import { c,d } from '../Variables';
import { Input } from './common';

const logoUri = require('../assets/logo.png');


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumberActive: false,
      phoneNumber: '',
      loading: false,
      width: '',
      height: ''
    }
  }

  onPhoneNumberChange(phoneNumber) {
    this.setState({phoneNumber})
  }


  loginSubmit(){
    console.log('asdwad')
  }

  render() {
   return (

    <View style={styles.container}  onLayout={(e)=>{
        this.setState({height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width})
    }}
    >
      <View style={{ alignItems: 'center',flex: 4,justifyContent: 'flex-end'}}>
        <Image source={logoUri}
          indicator={ProgressBar}
          style={{ marginRight: this.state.height>this.state.width ? this.state.width/1.5 : this.state.width/3 }}
          imageStyle={{
            color:'#fff',
            width: 240, 
            height: 45, 
            resizeMode: 'stretch',
        }}  />
      </View>
      <View style={{ flex: 2 }}>
      
      </View>
      <View style={{ flex: 8,alignItems:'center',justifyContent: 'flex-start' }}>
        <Input
            onChangeText={(phoneNumber) => this.onPhoneNumberChange(phoneNumber)}
            value={this.state.phoneNumber}
            placeholder='+996 772 798 807'
            iconName='phone'
            active={this.state.phoneNumberActive}
            onFocus={() => this.setState({ phoneNumberActive: true })}
            loading={this.state.loading}
            style={{  }}
            onLoginSubmit={this.loginSubmit.bind(this)}
        />
      </View>
    </View>
    
   )
  }
}

const styles = {
    container:{
      flex: 1,
      backgroundColor:'#e5385d',
    }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {

})(LoginForm);
