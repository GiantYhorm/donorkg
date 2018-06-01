import React, { Component } from 'react'
import { FlatList, ListView,View,Text,KeyboardAvoidingView,StatusBar, Animated, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux'
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {textStyle,RED} from '../../Variables';
import Icon from 'react-native-vector-icons/Feather';
import { fetchAppropriateData,fetchUserData } from '../../actions';
import {List, ListItem, SearchBar} from 'react-native-elements';

class Done extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      width: '',
      loading:false,
      list: [],
      refreshing: false,
    }
  }

  componentDidMount(){
    this.makeRemoteRequest()
}

makeRemoteRequest = () =>{
  const phone = firebase.auth().currentUser.phoneNumber
  const {rhFactor,bloodType,currentRole} = this.props.user
  var that = this
  let list = []
  this.setState({loading: true})
  firebase.database().ref(`users/${phone}/sentRequests`).on('value', snapshot => {
  snapshot.forEach(childSnapshot => {
    if(childSnapshot.val().status!=='1'){
   obj = childSnapshot.val()
         list.push(obj)
        }
   })
   firebase.database().ref(`users/${phone}/recievedRequests`).on('value', snapshot => {
    snapshot.forEach(childSnapshot => {
      if(childSnapshot.val().status!=='1'){     
      obj = childSnapshot.val()
           list.push(obj)
      }
     })
   that.setState({list,loading:false,refreshing:false})
    })
})
}

  handleRefresh=()=>{

    this.setState({ list:[],refreshing:true })
    this.makeRemoteRequest();

  }

  renderSeparator(){
    return(
      <View style={styles.separatorStyle} />
    )
  }
  renderHeader=()=>{
    return <SearchBar onChangeText={(text)=>{this.onSearchChangeText(text)}} placeholder="Поиск..." lightTheme round />
  }
  onSearchChangeText(text){

    let sorted = this.state.list.filter(function(item){
      return `${item.firstName} ${item.lastName}`.indexOf(text)>=0
    })

    this.setState({list: sorted})
  }
  renderFooter=()=>{
    if(!this.state.loading) return null
    return null
  }

  render() {
   return (
      <List containerStyle={styles.listStyle}>
        <FlatList
          data={this.state.list}
          renderItem={({item})=>(
            <ListItem
              roundAvatar
              onPress={()=>{ Actions.profileView({ profile: item}) }}
              title={`${item.firstName} ${item.lastName}`}
              containerStyle={{borderBottomWidth:0}}
              titleStyle={[textStyle,]}
              avatar={{uri: item.image}}
          />
   )}
          keyExtractor={item => item.firstName}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ItemSeparatorComponent={this.renderSeparator}
          />
      </List>
   )
  }
}

const styles = {
    container:{
      flex: 1,
      backgroundColor:'#fff',
    },
    separatorStyle:{
      height: 1,
      width: `86%`,
      backgroundColor: '#CED0CE',
      marginLeft: '14%'
    },
    listStyle:{
      flex : 1,
      backgroundColor:'#fff',
      borderTopWidth:0,
      borderBottomWidth:0
    }
};

const mapStateToProps = ({ main }) => {
  const { user,list,loading } = main;
  return { user,list,loading };
};

export default connect(mapStateToProps, {
  fetchAppropriateData,fetchUserData,
})(Done);
