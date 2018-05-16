import React, { Component } from 'react'
<<<<<<< HEAD
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

=======
import { Text,Image,ImageBackground,KeyboardAvoidingView,Platform,Animated,Easing,Alert, View,Dimensions,AsyncStorage, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser,errorShowed } from '../actions'
import { InputLogin, Spinner } from './common'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
<<<<<<< HEAD
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
=======
      loading: false,
      logo : null,
      email : '',
      password : '',
      background : null,
      loadingComponent : true,
      opacityValue: new Animated.Value(1),
      disabled : false
    };
>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2
  }
  onEmailChange(text) {
    this.setState({email:text})
    this.props.emailChanged(text);

  if(this.props.email===''||this.props.password===''|| text ===''){
    this.setState({disabled:true})
  }
<<<<<<< HEAD
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
=======
  else this.setState({disabled: false})
  }
  onPasswordChange(text) {
    this.setState({password:text})
    this.props.passwordChanged(text);

    if(this.props.email===''||this.props.password===''||text===''){
      this.setState({disabled:true})
    }
    else this.setState({disabled: false})

>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2
  }
  onButtonPress() {
    const { email, password,error } = this.props;
    this.props.loginUser({ email, password });
    this.setState({loading:false})
  }
  componentWillMount(){
  //async storage fetch email
  AsyncStorage.getItem("LoggedInWithEmail").then(LoggedInWithEmail => {    
  this.setState({email:LoggedInWithEmail})
  this.props.emailChanged(LoggedInWithEmail);
  })
}
  componentDidMount(){
let that = this
  if(that.props.email===''||that.props.password===''){
    that.setState({disabled:true})
  }
  else that.setState({disabled: false})
}
  getBackColor(){
  if(this.state.disabled)
  return '#E39291'
  else
  return '#fff'
}

  renderButton() {  
    if (this.props.loading || this.state.loading) {
      return <View style={{marginTop:30,height:40}}><Spinner size="large" /></View>;
    }
    return (
      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width*0.75,
          borderRadius: 30,
          borderWidth: 0.6,
          borderColor: '#FE3562',
          backgroundColor: this.getBackColor(),
          height: Dimensions.get('window').height/13,
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        disabled={this.state.disabled}
        onPress={this.onButtonPress.bind(this)}
      >
        <Text style={{fontFamily : Platform.OS ==='ios'? 'AvenirNext-DemiBold':null,fontSize: 20 , color :'#F65352'}}>Log In</Text>
      </TouchableOpacity>
    );
  }
  render() {
<<<<<<< HEAD
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
=======
if(this.props.error==='Authentication Failed'){
  Alert.alert(
    'Попробуйте еще раз!',
    'Неправильно введен email или пароль',
    [
      {text: 'Ok'},
    ]
  )
  this.props.errorShowed()
  if(this.props.email===''||this.props.password===''){
    this.setState({disabled:true})
  }
  else this.setState({disabled: false})
} 
   return (
      <Animated.View style={{flex:1,opacity: this.state.opacityValue,}}>
        <View style={styles.mainView}>
        <KeyboardAvoidingView behavior='position'>
        <Image source={require('../../assets/logo.png')} style={{marginTop: Dimensions.get('window').height*0.2,alignSelf:'center',width: Dimensions.get('window').width*0.8,height: Dimensions.get('window').height/9}}></Image>
        <View
          style={{
          }}
        >
          <View style={{marginTop:80}}>
          <InputLogin
          placeholder='Email адрес'
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />
        <InputLogin
          secureTextEntry
          placeholder='Пароль'
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
          </View>
          <View style={{alignSelf:'center'}}>{this.renderButton()}</View>
        </View>
        </KeyboardAvoidingView>
        <View style={{marginTop:60,justifyContent:'center',alignItems:'center',backgroundColor:'transparent',flex:1}}> 
<View style={{flex:1}}>
<TouchableOpacity onPress={()=>{Actions.forgotPass()}} style={{width : 105 ,height : 20,}}>
        <Text style={{color:'#fff',fontSize:13,textDecorationLine: "underline",fontFamily : Platform.OS ==='ios'? 'AvenirNext-DemiBold':null}}>Забыли пароль? </Text>
</TouchableOpacity>
      </View>      
      <View style={{flex:2,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
      <View style={{height:1,marginRight:10,width:90,borderBottomWidth:1,borderColor:'#d0d0d0'}} />
      <Text style={{color:'#d0d0d0',fontSize:13,fontFamily : Platform.OS ==='ios'? 'AvenirNext-DemiBold':null}}>или</Text>
      <View style={{height:1,marginLeft:10,width:90,borderBottomWidth:1,borderColor:'#d0d0d0'}} />
        </View>
         <View style={{flex : 1,marginBottom:40,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
            <Text style={{color:'#d0d0d0',fontSize:13,fontFamily : Platform.OS ==='ios'? 'AvenirNext-DemiBold':null}}>Еще нет аккаунта? </Text>
            
            <TouchableOpacity style={{width : 160,height:20}} onPress={()=>{
                
                  Actions.register()
            }}     
              >
            <Text style={{   color:'#fff',fontSize:15, fontFamily : Platform.OS ==='ios'? 'AvenirNext-DemiBold':null,textDecorationLine: "underline",}}>Зарегистрироваться</Text></TouchableOpacity>
      </View>
        </View>
        </View>

      </Animated.View>
    );
>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2
  }
}

const styles = {
<<<<<<< HEAD
    container:{
      flex: 1,
      backgroundColor:'#e5385d',
    },
=======
  errorTextStyle: {
    fontSize: 20,
    color: '#FE3562',
    alignSelf: 'center'
  },
  mainView: {
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    opacity:1,
    backgroundColor:'#F65352',  
  }
>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
<<<<<<< HEAD
  authorizeUser
=======
  emailChanged,
  passwordChanged,
  loginUser,
  errorShowed
>>>>>>> ab7cf74fe0e39500e48a657ede8a5143997bceb2
})(LoginForm);
