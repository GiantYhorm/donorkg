import React, { Component } from 'react'
import { View,Text,Platform,KeyboardAvoidingView, Animated } from 'react-native'
import { connect } from 'react-redux'
import { authorizeUser } from '../actions'
import {  } from './common'
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar';
import { Input } from './common';
import TextInputMask from 'react-native-text-input-mask';
import {textStyle} from '../Variables'

const logoUri = require('../assets/logo.png');


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumberActive: false,
      phoneNumber: '+996',
      loading: false,
      width: '',
      height: '',

      user: null,
      message: '',
      confirmResult: null,
      codeInput: '',
      codeInputActive: false
    }
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+996',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Code has been sent!' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Code Confirmed!' });
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }

  onPhoneNumberChange(phoneNumber) {
    this.setState({phoneNumber})
  }
  onCodeInputChange(codeInput){
    this.setState({codeInput})
  }

  loginSubmit(){
    this.signIn()
  }
  codeSubmit(){
    this.confirmCode()
  }

  fPortrait(){
    return {height : this.state.height/13,width : this.state.width*0.9}
  }

  fLandscape(){
    return {height : this.state.height/7,width:this.state.width*0.7}
  }
  sPortrait(){
    return {width: 30 ,marginLeft : this.state.width/5.5 } //backgroundColor: 'green'
  }

  sLandscape(){
    return {width: 30,marginLeft: this.state.width/5.5 }
  }

  flexStatusContainer(){
    if(!this.state.user && !this.state.confirmResult)
    return 11
    else
    return 8
  }

  render() {
    const { user, confirmResult } = this.state;
   return (

    <View style={styles.container}  onLayout={(e)=>{
        this.setState({height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width})
    }}
    >
      <View style={{ alignItems: 'center',flex: this.flexStatusContainer(),justifyContent: 'flex-end'}}>
        <Image source={logoUri}
          indicator={ProgressBar}
          style={{ marginRight: this.state.height>this.state.width ? this.state.width/1.5 : this.state.width/3 }}
          imageStyle={{
            width: 240, 
            height: 45, 
            resizeMode: 'stretch',
        }}  />
      </View>
      <View style={{ flex: 3 }}>
      
      </View>
      {!user && !confirmResult ? <KeyboardAvoidingView behavior='padding' enabled style={{ flex: 18,alignItems:'center',justifyContent: 'flex-start' }}>
        <Input
            mask={"+996 [000] [00] [00] [00]"}
            onChangeText={(phoneNumber) => this.onPhoneNumberChange(phoneNumber)}
            value={this.state.phoneNumber}
            unFocus={()=>{if(this.state.phoneNumber==='')this.setState({phoneNumberActive: false})}}
            placeholder='+996 XXX XXX XXX'
            iconName='phone'
            height={this.state.height}
            width={this.state.width}
            cStyle={ 
              
              this.state.height>this.state.width? this.fPortrait() : this.fLandscape()
            }
            active={this.state.phoneNumberActive}
            onFocus={() => this.setState({ phoneNumberActive: true })}
            loading={this.state.loading}
            style={{ textAlign: 'center', }}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
            onLoginSubmit={this.loginSubmit.bind(this)}
            loading={false}
        />
      </KeyboardAvoidingView>:null}
      {!user && confirmResult ? <KeyboardAvoidingView behavior='padding' enabled style={{ flex: 18,alignItems:'center',justifyContent: 'flex-start' }}>
        <Input
        mask={" [0]  [0]  [0]  [0]  [0]  [0]"}
            onChangeText={(codeInput) => this.onCodeInputChange(codeInput)}
            value={this.state.codeInput}
            unFocus={()=>{if(this.state.codeInput==='')this.setState({codeInputActive: false})}}
            placeholder='__  __  __  __  __  __'
            iconName='hash'
            cStyle={ 
              
              this.state.height>this.state.width? this.fPortrait() : this.fLandscape()
            }
            iStyle={{justifyContent:'flex-end'}}
            height={this.state.height}
            width={this.state.width}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
            active={this.state.codeInputActive}
            onFocus={() => this.setState({ codeInputActive: true })}
            loading={this.state.loading}
            style={   this.state.height>this.state.width? this.sPortrait() : this.sLandscape()}
            onLoginSubmit={this.codeSubmit.bind(this)}
            loading={false}
        /> 
    
        <View style={{
          marginTop: 25,
          borderColor:'#fff',
          height: this.state.height>this.state.width ? this.state.height/4 : this.state.height/3,
          width:this.state.height>this.state.width ? this.state.width*0.9 : this.state.width/2,   
          backgroundColor:'#fff',
          borderWidth: 0.4,
          borderRadius: 7,
          alignItems:'center'
        }}>
          <Text style={[textStyle,{ margin: 12,marginTop:25,fontSize:18,fontFamily: 'AvenirNextCyr-Demi' }]}>
            Вам было отправлено СМС
          </Text>
          <Text style={[textStyle,{marginTop: 14,fontSize: 16}]}>
            Введите в поле полученный
          </Text>
          <Text style={[textStyle,{marginTop: 4,fontSize: 16}]}>
            код подтверждения
          </Text>
        </View>
        </KeyboardAvoidingView>: null}

        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
          
          </View>
        )}
    </View>
    
   )
  }
}

const styles = {
    container:{
      flex: 1,
      backgroundColor:'#e5385d',
    },
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  authorizeUser
})(LoginForm);
