import React, { Component } from 'react'
import { View,Text,Platform,KeyboardAvoidingView,StatusBar,TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { Input } from './common';
import TextInputMask from 'react-native-text-input-mask';
import {textStyle,WHITE,RED} from '../Variables';
import Modal from "react-native-modal";
import {  } from '../actions'
import Icon from 'react-native-vector-icons/Feather';
import SecondTab from './SecondTab';
import Profile from './Profile';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indexTab: '1',
    }

  }

  getIconColor(indexTab){
    if(indexTab===this.state.indexTab)
      return RED
    else return 'gray'
  }

  renderContent(){
    switch(this.state.indexTab){
      case '0':
      return (<SecondTab />)
      case '2':
      return (<Profile />)
      default:
      return (<SecondTab />)
    }

  }

  render() {
   return (

    <View style={styles.container}>
      <View style={{ flex: 11}}>
        {this.renderContent()}
      </View>
      <View style={{ flex: 1,borderTopWidth: 0.2,flexDirection: 'row' }}>
        <View style={[styles.tab,{}]}>
          <TouchableWithoutFeedback onPress={()=> this.setState({ indexTab: '0' })} style={styles.tabButton}>
            <Icon name='phone' style={{ color: this.getIconColor('0')}} size={21} />
          </TouchableWithoutFeedback>
        </View>

        <View style={[styles.tab]}>
          <TouchableWithoutFeedback onPress={()=> this.setState({ indexTab: '1' })} style={styles.tabButton}>
            <Icon name='phone' style={{ color: this.getIconColor('1')}} size={21} />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.tab}>
          <TouchableWithoutFeedback onPress={()=> this.setState({ indexTab: '2' })} style={styles.tabButton}>
            <Icon name='user' style={{ color: this.getIconColor('2')}} size={21} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>

   )
  }
}

const styles = {
    container:{
      flex: 1,
      backgroundColor:'#fff',
    },
    tabButton:{
      height: 45,
      width:45,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'green'

    },
    tab:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
};

const mapStateToProps = ({ main }) => {
  const { user } = main;
  return { user };
};

export default connect(mapStateToProps, {

})(Main);
