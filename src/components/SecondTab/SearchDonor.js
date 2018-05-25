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

class SearchDonor extends Component {
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
    firebase.database().ref(`users/`).on('value', snapshot => {
    snapshot.forEach(childSnapshot => {
     obj = childSnapshot.val()
     obj.phoneNumber=childSnapshot.key

     if(phone!==obj.phoneNumber&&rhFactor===obj.rhFactor){

       if(currentRole==='donor'){
         if(bloodType === 'O'){
           list.push(obj)

         }
         else if(bloodType === 'A'){
           if(childSnapshot.val().bloodType==='A'||childSnapshot.val().bloodType==='AB'){
             list.push(obj)
           }
         }
         else if(bloodType === 'B'){
           if(childSnapshot.val().bloodType==='AB'||childSnapshot.val().bloodType==='B'){
             list.push(obj)
           }
         }
         else{
           if(bloodType==='AB'&&bloodType===childSnapshot.val().bloodType){
             list.push(obj)
          }
      }
     }
     else if(currentRole==='recipient'){
       if(bloodType === 'O'&&bloodType===childSnapshot.val().bloodType){
         list.push(obj)
        }
        else if(bloodType === 'A'){
           if(childSnapshot.val().bloodType==='A'||childSnapshot.val().bloodType==='O'){
               list.push(obj)
           }
        }
        else if(bloodType === 'B'){
           if(childSnapshot.val().bloodType==='O'||childSnapshot.val().bloodType==='B'){
               list.push(obj)
           }
        }
        else{
             if(bloodType==='AB'){
               list.push(obj)

             }
           }
        }
      }
     })
    that.setState({list,loading:false,refreshing:false})
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
              subtitleStyle={[textStyle,{color:'#CED0CE'}]}
              subtitle={`${item.phoneNumber}`}
              avatar={{uri: item.avatar}}
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
})(SearchDonor);
