import React, {Component} from 'react';
import {View,Text,ScrollView,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import { connect } from 'react-redux';
import {
  Statistics,
  BackgroundImage,
  MenuItem
} from './profile';
import {SCREEN_WIDTH,textStyle} from '../Variables';
import { Icon } from 'react-native-elements';
import {Actions } from 'react-native-router-flux';

const avatar = { uri: 'https://pp.userapi.com/c846523/v846523669/19f0b/P1ScS2Fjvx4.jpg' };

class ProfileView extends Component {
  constructor(props){
    super(props)
    this.state = {
      height:'',
      width: ''
    }
  }

  renderDonorContent(){
    return
  }
  renderRecipientContent(){
    return(
      <View>
        
      </View>
    )
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container} onLayout={(e)=>{this.setState({ height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width })}}>

        <BackgroundImage source={this.props.profile.avatar}>
        <TouchableWithoutFeedback onPress={()=>{Actions.pop()}}>
          <Icon type='feather' name='arrow-left' color='white' containerStyle={{ margin:3,marginLeft:7,width:45,height:45 }} size={29} />
        </TouchableWithoutFeedback>
        <Text style={[textStyle,{ color:'#fff',marginTop:this.state.height/6,  fontSize: 20,alignSelf:'center' }]}>
          {`${this.props.profile.firstName} ${this.props.profile.lastName}`}
          </Text>
        
        <Text style={[textStyle,{ color:'#fff',marginTop:10,  fontSize: 20,alignSelf:'center' }]}>
          
        {this.props.profile.patronymic}
        </Text>
        
        </BackgroundImage>

        <Text style={[textStyle,{ color:'black',marginTop:15,marginBottom:5,  fontSize: 17,alignSelf:'center' }]}>
        {`${this.props.profile.phone}`}
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
  
})(ProfileView)