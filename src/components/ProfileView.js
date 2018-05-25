import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import {
  Statistics,
  BackgroundImage,
  MenuItem
} from './profile';
import {SCREEN_WIDTH,textStyle,RED} from '../Variables';
import { Icon,Button } from 'react-native-elements';
import {Actions } from 'react-native-router-flux';
import {conformedUsers} from '../actions/MainActions';
import Image from 'react-native-image-progress';
import firebase from 'react-native-firebase';
import * as Progress from 'react-native-progress';
import Communications from 'react-native-communications';
import ImagePicker from 'react-native-image-crop-picker';


class ProfileView extends Component {
  constructor(props){
    super(props)
    this.state = {
      height:'',
      width: '',
      loading: false,

      recipient: ''
    }
  }

  componentWillMount(){
    const {phoneNumber} = this.props.profile
    if(this.props.user.currentRole==='donor'){

    }
    else{
      this.props.conformedUsers({phoneNumber})
    }
  }

  sendMedicalCertificate(){
  const {phoneNumber} = this.props.user
  this.setState({loading: true})
  var that = this  
  ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      
      var time;

      let urlRef = `users/${phoneNumber}/sentPhotos/${this.props.profile.phoneNumber}.jpg`
      
      firebase.storage().ref(urlRef).put(image.path)
      .then(()=>{
        
        var timestampRef = firebase.database().ref("timestamp")
        
        timestampRef.set(firebase.database.ServerValue.TIMESTAMP)
          .then(function() {
            return timestampRef.once("value");
          })
          .then(function(snapshot) {
            console.log(snapshot.val())
            firebase.storage().ref(urlRef).getDownloadURL()
              .then((url)=>{
                firebase.database().ref(`users/${phoneNumber}/sentRequests/${snapshot.val()}/`).update({
                  requestDate: snapshot.val(),
                  userPhoneNumber: that.props.profile.phoneNumber,
                  status: '1',
                  dateConfirmation: '',
                  image: url
                })
                firebase.database().ref(`users/${that.props.profile.phoneNumber}/receivedRequests/${snapshot.val()}/`).update({
                  requestDate: snapshot.val(),
                  userPhoneNumber: phoneNumber,
                  status: '1',
                  dateConfirmation: '',
                  image: url
                }).then(()=>that.setState({ loading: false }))
            })
          })
          
          .catch(function(error) {
            console.log("Error:", error);
          });

        
        
      })
      

    }).catch((error)=>{ console.log(error.message) })
  }

  renderDonorContent(){
    return(
      <View style={[styles.menu,{justifyContent:'flex-end',alignItems:'center'}]}>
        <View style={{marginBottom:60,justifyContent:'center',alignItems:'center'}}>
          <Text style={[textStyle,{fontSize:14}]}>
            Сдали кровь ?
          </Text>
          <Button
            textStyle={[textStyle,{color:'#fff'}]}
            backgroundColor={RED}
            icon={{name: 'camera',type:'feather'}}
            title='Отправить справку' 
            buttonStyle={{borderRadius:100,marginTop:15}}
            onPress={ this.sendMedicalCertificate.bind(this)    }
          />
        </View>
      </View>
    )
  }
  renderRecipientContent(){
    const {phoneNumber} = this.props.profile
    if(this.state.loading || this.props.loading)
    return(
      <View style={styles.menu}>
        <Progress.Circle size={40} color={RED} indeterminate={true} />
      </View>
    )
    return(
      <View style={[styles.menu,{justifyContent:'flex-end'}]}>
        <View style={{marginBottom:30}}>
          <Button
            textStyle={[textStyle,{color:'#fff'}]}
            backgroundColor={RED}
            icon={{name: 'phone',type:'feather'}}
            title='Позвонить' 
            buttonStyle={{borderRadius:100}}
            onPress={()=> Communications.phonecall('0123456789', true)  }
          />
        </View>
      </View>
    )
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container} onLayout={(e)=>{this.setState({ height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width })}}>

        <BackgroundImage source={this.props.profile.avatar}>
        <TouchableWithoutFeedback onPress={()=>{Actions.main()}}>
          <Icon type='feather' name='arrow-left' color='white' containerStyle={{ margin:3,marginLeft:7,width:45,height:45 }} size={29} />
        </TouchableWithoutFeedback>
        <Text style={[textStyle,{ color:'#fff',marginTop:this.state.height/6,  fontSize: 20,alignSelf:'center' }]}>
          {`${this.props.profile.firstName} ${this.props.profile.lastName}`}
          </Text>
        
        <Text style={[textStyle,{ color:'#fff',marginTop:12,  fontSize: 18,alignSelf:'center' }]}>
          
        {this.props.profile.patronymic}
        </Text>
        
        </BackgroundImage>

        <Text style={[textStyle,{ color:'black',marginTop:20,marginBottom:5,  fontSize: 17,alignSelf:'center' }]}>
        {`${this.props.profile.phoneNumber}`}
        </Text> 
      <Statistics
        donated={this.props.profile.donatedCount}
        
        bloodType={`${this.props.profile.bloodType}${this.props.profile.rhFactor}`}
      />
      <View style={styles.menu}>
        {this.props.user.currentRole === 'donor' ? this.renderDonorContent() : this.renderRecipientContent()}
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  user: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    borderRadius: SCREEN_WIDTH * 0.15,
    marginBottom: 10
  },
  username: {
    ...textStyle,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  phone: {
    ...textStyle,
    color: '#fff'
  },
  menu: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  logout: {
    color: 'red'
  }
});
const mapStateToProps = ({ main }) => {
  const { user } = main;
  return { user };
};
export default connect(mapStateToProps,{
  conformedUsers
})(ProfileView)