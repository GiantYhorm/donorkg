import React, { Component } from 'react'
import { FlatList, ListView,View,Text,KeyboardAvoidingView,StatusBar, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import {textStyle,WHITE} from '../../Variables';
import Icon from 'react-native-vector-icons/Feather';
import { fetchAppropriateData } from '../../actions'

class SearchDonor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
    }
  }

  componentWillMount(){
    this.props.fetchAppropriateData()
  }

  makeRemoteRequest = () =>{
    
  }

  render() {
   return (
    <View style={styles.container}  onLayout={(e)=>{this.setState({height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width})}}>
      
    </View>
   )
  }
}

const styles = {
    container:{
      flex: 1,
      backgroundColor:'#fff',
    },
};

const mapStateToProps = ({ main }) => {
  const { user } = main;
  return { user };
};

export default connect(mapStateToProps, {
  fetchAppropriateData,
})(SearchDonor);

