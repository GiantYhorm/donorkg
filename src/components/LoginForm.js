import React, { Component } from 'react'
import { View,Text,Platform,KeyboardAvoidingView,StatusBar, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { Input } from './common';
import TextInputMask from 'react-native-text-input-mask';
import {textStyle,WHITE} from '../Variables';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/Feather';
import { fetchUserData } from '../actions'

const logoUri = require('../assets/logo.png');

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumberActive: false,
      phoneNumber: '+996553113555',
      loading: false,
      width: '',
      height: '',

      user: null,
      message: '',
      confirmResult: null,
      codeInput: '',
      codeInputActive: false,
      isModalVisible : false
    }
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({isModalVisible: false})
      } else {
      this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+996553113555',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    StatusBar.setHidden(true);
     if (this.unsubscribe) this.unsubscribe();
  }

  signIn = () => {
    this.setState({loading: true})
    const { phoneNumber } = this.state;
  
    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ isModalVisible:true,confirmResult,loading: false}))
      .catch(error => 
       {
         console.log(error.message)
          this.setState({ message: `Sign In With Phone Number Error: ${error.message}`,loading: false })
      });
  };

  confirmCode = () => {
    this.setState({loading: true})
    const { codeInput, confirmResult } = this.state;
    let str = codeInput.split(' ').join('')
    if (confirmResult && str.length) {
      confirmResult.confirm(str)  
        .then((user) => {
          this.setState({ isModalVisible:false,message: 'Code Confirmed!',loading: false });
        })
        .catch(error => {
          this.setState({ message: `Code Confirm Error: ${error.message}`,loading: false })});
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


  fPortrait(){
    return {height : this.state.height/13,width : this.state.width*0.9}
  }

  fLandscape(){
    return {height : this.state.height/7,width:this.state.width*0.7}
  }
  sPortrait(){
    return {width: 30 ,marginLeft : this.state.width/5 } //backgroundColor: 'green'
  }

  sLandscape(){
    return {width: 30,marginLeft: this.state.width/5 }
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
      <KeyboardAvoidingView behavior='padding' enabled style={{ flex: 18,alignItems:'center',justifyContent: 'flex-start' }}>
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
            onLoginSubmit={this.signIn.bind(this)}
            loading={this.state.loading}
        />
      </KeyboardAvoidingView>
       
      <Modal hideModalContentWhileAnimating swipeDirection='down'   onSwipe={() => this.setState({ isModalVisible: false })}  isVisible={this.state.isModalVisible} style={{flex:1,justifyContent: "flex-end", margin: 0}}>
      <View style={styles.container}  onLayout={(e)=>{
        this.setState({height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width})
    }}
    >
      <View style={{ flex: this.flexStatusContainer(),}}>
        
        <View style={{flex : 1,}}>
          <TouchableOpacity onPress={()=>this.setState({isModalVisible:false})}
    style={{ backgroundColor: WHITE,
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    marginRight: 3,
    justifyContent: 'center',
    alignItems: 'center',}}>
            <Icon name='arrow-down' style={{ color: '#fff' }} size={20} />
         </TouchableOpacity>
        </View>

        <View style={{flex : 1 , justifyContent: 'flex-end',alignItems:'center'}}>
          <Image source={logoUri}
           indicator={ProgressBar}
            style={{ marginRight: this.state.height>this.state.width ? this.state.width/1.5 : this.state.width/3 }}
            imageStyle={{
             width: 240, 
             height: 45, 
             resizeMode: 'stretch',
         }}  />
        </View>
     
      </View>
     
      <View style={{ flex: 3 }}>
      
      </View>
       <KeyboardAvoidingView behavior='padding' enabled style={{ flex: 18,alignItems:'center',justifyContent: 'flex-start' }}>
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
            iStyle={{}}
            height={this.state.height}
            width={this.state.width}
            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
            active={this.state.codeInputActive}
            onFocus={() => this.setState({ codeInputActive: true })}
            loading={this.state.loading}
            style={   this.state.height>this.state.width? this.sPortrait() : this.sLandscape()}
            onLoginSubmit={this.confirmCode.bind(this)}
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
          <Text style={[textStyle,{marginTop: 18,fontSize: 16}]}>
            Введите в поле полученный
          </Text>
          <Text style={[textStyle,{marginTop: 4,fontSize: 16}]}>
            код подтверждения
          </Text>
        </View>
        </KeyboardAvoidingView>
        </View>
        </Modal>
   
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

const mapStateToProps = ({ main }) => {
  const { user } = main;
  return { user };
};

export default connect(mapStateToProps, {
  fetchUserData,
})(LoginForm);