import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  TextInput,
  ActivityIndicator
} from 'react-native';
import { RED } from '../Variables';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import { textStyle} from '../Variables';
import SearchDonor from './SecondTab/SearchDonor'
import { initialUpdateUserDatabase } from '../actions';
import { Icon } from 'react-native-elements';
import Image from 'react-native-image-progress';

import * as Progress from 'react-native-progress';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class FirstRoute extends Component{
  render(){
    return(
      <View style={[ styles.container, { backgroundColor: '#fff' } ]} />
    )
  }
}

class SecondRoute extends Component{
  render(){
    return(
      <View style={[ styles.container, { backgroundColor: '#fff' } ]} />
    )
  }
}
const logoUri = require('../assets/logo.png');

class SecondTab extends Component {

    constructor(props){
      super(props)
      this.state = {
        index: 2,
        width: '',
        height: '',
        routes: [
          { key: 'first', title: 'Просмотренные' },
          { key: 'second', title: 'В ожидании' },
          { key: 'third', title: 'Поиск' },
        ],
        currentStep: '0',

        firstName: `ыва`,
        lastName: `ыва`,
        patronymic: `ыва`,
        bloodType: `0`,
        rhFactor: `0`,
        currentRole: `0`,


        error: ''
      }
    }


    _handleIndexChange = index => this.setState({ index });

    _renderLabel = props => ({ route, index }) => {
      const inputRange = props.navigationState.routes.map((x, i) => i);
      const outputRange = inputRange.map(
        inputIndex => (inputIndex === index ? RED : '#A1A1A3')
      );
      const color = props.position.interpolate({
        inputRange,
        outputRange,
      });

      return (
        <Animated.Text style={[styles.labelStyle, { color }]}>
          {route.title}
        </Animated.Text>
      );
    };

    _renderHeader = props => <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.header}
      renderLabel={this._renderLabel(props)}
    />

    _renderScene = SceneMap({
      first: FirstRoute,
      second: SecondRoute,
      third: SearchDonor
    });

    getColor(step,circleNumber){
      if(step===circleNumber)
        return RED
      return '#D0D0D0'
    }


    renderCircles(){
      return(
        <View style={{flex : 1, flexDirection:'row',justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.circle,{ backgroundColor: this.getColor(this.state.currentStep,'0') }]} />
          <View style={[styles.circle,{ backgroundColor: this.getColor(this.state.currentStep,'1') }]} />
          <View style={[styles.circle,{ backgroundColor: this.getColor(this.state.currentStep,'2') }]} /> 
          <View style={[styles.circle,{ backgroundColor: this.getColor(this.state.currentStep,'3') }]} />
          <View style={[styles.circle,{ backgroundColor: this.getColor(this.state.currentStep,'4') }]} /> 
        </View>
      )
    }

    renderSteps(){
      const { firstName,lastName,patronymic,currentRole,bloodType,rhFactor} = this.state
      if(this.state.currentStep === '0')
      return(
            <View style={{ flex:10 , justifyContent:'center' , alignItems:'center' }}>
              
              <Text style={[textStyle,{fontSize : 32,color:'#4a4a4a'}]}>Добро пожаловать!</Text>
              <Text style={[textStyle,{marginTop: 30,color:'#9C9495'}]}>Вы еще не заполнили свою анкету.</Text>
              <TouchableOpacity onPress={()=>this.setState({ currentStep: '1' })} style={styles.joinButton}>
                <Text style={[textStyle,{fontSize:18,color : '#fff'}]}>Заполнить</Text>
              </TouchableOpacity>
   
            </View>
      )
      else if(this.state.currentStep === '1')
      return(
      <View style={{ flex:14, justifyContent:'center', alignItems:'center' }}>

        <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >

        <TextInput
          spellCheck={false}
          style={textStyle}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholder="Фамилия"
          onChangeText={(lastName)=>this.setState({ lastName })}
          value={this.state.lastName}
          style={[styles.input,{ width: this.state.width/1.5 }]}
        />
        <TextInput
        style={textStyle}
          spellCheck={false}
          autoCorrect={false}
          onChangeText={(firstName)=>this.setState({ firstName })}
          value={this.state.firstName}
          underlineColorAndroid='transparent'
          placeholder="Имя"
          style={[styles.input,{ width: this.state.width/1.5 }]}
        />
        <TextInput
        style={textStyle}
          spellCheck={false}
          autoCorrect={false}
          onChangeText={(patronymic)=>this.setState({ patronymic })}
          value={this.state.patronymic}
          underlineColorAndroid='transparent'
          placeholder="Отчество"
          style={[styles.input,{ width: this.state.width/1.5 }]}
        />

      </KeyboardAwareScrollView>
      {this.state.error ? <Text style={[textStyle,{fontSize: 16,marginTop:15,justifyContent:'flex-end',color: 'red',alignItems:'center'}]}>{this.state.error}</Text> :null}
      <TouchableOpacity onPress={()=>{ 
        if(this.state.firstName!=='' && this.state.lastName!==''&&this.state.patronymic){
          this.setState({ currentStep: '2', error: '' })
        }
        else {
          this.setState({ error: 'Все поля являются обязательными' })
        }
      }} style={[styles.joinButton,{marginBottom: 40}]}>
       <Text style={[textStyle,{fontSize:18,color : '#fff'}]}>Дальше</Text>
      </TouchableOpacity>
    </View>
      )
      else if(this.state.currentStep==='2'){
        return(
          <View style={{ flex:15, alignItems:'center' }}>
            <View style={{ flex: 7,flexDirection: 'row', marginLeft: 25 }}>
          <TouchableOpacity onPress={()=>{ this.setState({ bloodType: 'O' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
            <Icon type='feather' name='droplet' color={this.getColor(this.state.bloodType,'O')} size={47} /> 
            <Text style={[textStyle,{color: this.getColor(this.state.bloodType,'O'),fontSize:22}]}>O</Text>   
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ this.setState({ bloodType: 'A' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
          <Icon type='feather' name='droplet' color={this.getColor(this.state.bloodType,'A')} size={47} /> 
            <Text style={[textStyle,{color: this.getColor(this.state.bloodType,'A'),fontSize:22}]}>A</Text>   
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ this.setState({ bloodType: 'B' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
          <Icon type='feather' name='droplet' color={this.getColor(this.state.bloodType,'B')} size={47} /> 
            <Text style={[textStyle,{color:this.getColor(this.state.bloodType,'B'),fontSize:22}]}>B</Text>   
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{ this.setState({ bloodType: 'AB' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
          <Icon type='feather' name='droplet' color={this.getColor(this.state.bloodType,'AB')} size={47} /> 
            <Text style={[textStyle,{color: this.getColor(this.state.bloodType,'AB'),fontSize:22}]}>AB</Text>   
          </TouchableOpacity>
          </View>

          <View style={{flex:1}}>
          {this.state.error ? <Text style={[textStyle,{fontSize: 16,marginTop:15,justifyContent:'flex-end',color: 'red',alignItems:'center'}]}>{this.state.error}</Text> :null}
          </View>
          <View style={{flex:7}}>
          <TouchableOpacity onPress={()=>{ 
                if(this.state.bloodType!=='0'){
                  this.setState({ currentStep: '3', error: '' })
                }
                else {
                  this.setState({ error: 'Выберите один тип крови' })
                }
           }} style={[styles.joinButton,{marginBottom: 70}]}>
           <Text style={[textStyle,{fontSize:18,color : '#fff'}]}>Дальше</Text>
          </TouchableOpacity>
          </View>
        </View>
        )
      }
      else if(this.state.currentStep==='3'){
        return(
          <View style={{ flex:15, alignItems:'center' }}>
                      <View style={{ flex: 7,flexDirection: 'row', marginLeft: 25 }}>
                      <TouchableOpacity onPress={()=>{ this.setState({ rhFactor: '+' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
                      <Icon type='feather' name='plus' color={this.getColor(this.state.rhFactor,'+')} size={47} /> 
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{ this.setState({ rhFactor: '-' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>

                      <Icon type='feather' name='minus' color={this.getColor(this.state.rhFactor,'-')} size={47} /> 
                      </TouchableOpacity>
          
          </View>

          <View style={{flex:1}}>
          {this.state.error ? <Text style={[textStyle,{fontSize: 16,marginTop:15,justifyContent:'flex-end',color: 'red',alignItems:'center'}]}>{this.state.error}</Text> :null}

          </View>

          <View style={{flex:7}}>
          <TouchableOpacity onPress={()=>{ 
                if(this.state.rhFactor!=='0'){
                  this.setState({ currentStep: '4', error: '' })
                }
                else {
                  this.setState({ error: 'Выберите один резус-фактор' })
                }
           }} style={[styles.joinButton,{marginBottom: 70}]}>
           <Text style={[textStyle,{fontSize:18,color : '#fff'}]}>Дальше</Text>
          </TouchableOpacity>
          </View>

        </View>
        )
      }
      else if(this.state.currentStep === '4')
      return(
        <View style={{ flex:15, alignItems:'center' }}>
                    <View style={{ flex: 7,flexDirection: 'row', marginLeft: 25 }}>
                    <TouchableOpacity onPress={()=>{ this.setState({ currentRole: 'donor' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
                      <Text style={[textStyle,{color:this.getColor(this.state.currentRole,'donor')}]}>Донор</Text>
                     </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{ this.setState({ currentRole: 'recipient' }) }} style={[styles.bloodType,{justifyContent:'flex-start',alignItems:'center'}]}>
                     <Text style={[textStyle,{color:this.getColor(this.state.currentRole,'recipient')}]}>Реципиент</Text>
                    </TouchableOpacity>
        </View>

        <View style={{flex:1}}>
        {this.state.error ? <Text style={[textStyle,{fontSize: 16,marginTop:15,justifyContent:'flex-end',color: 'red',alignItems:'center'}]}>{this.state.error}</Text> :null}
        </View>

        <View style={{flex:7}}>
        <TouchableOpacity onPress={()=>{ 
          
              if(this.state.currentRole!=='0'){
                
                  this.props.initialUpdateUserDatabase({firstName,lastName,patronymic,bloodType,rhFactor,currentRole})
                  this.setState({ currentStep: '5',error: '' })
                  
                }
              else {
                this.setState({ error: 'Выберите хоть одну роль' })
              }
         }} style={[styles.joinButton,{marginBottom: 70}]}>
         <Text style={[textStyle,{fontSize:18,color : '#fff'}]}>Закончить</Text>
        </TouchableOpacity>
        </View>

      </View>
      )
    }

    renderBackToPreviousStep(){
      if(this.state.currentStep!=='0')
      return(
        <View style={{ position: 'absolute',width: 30, marginTop: 17,marginLeft: 5}}>
          <TouchableOpacity onPress={()=>{ this.setState({ currentStep: `${Number(this.state.currentStep)-1}` }) }} >
            <Icon type='ionicon' name='ios-arrow-back-outline' color={RED} size={27} />    
          </TouchableOpacity>
        </View>
      )
    }

    renderClipboard(){
      if(this.state.currentStep === '0')
      return(
        <View style={{ justifyContent: 'flex-end', alignItems: 'center'  }}>
          <Icon type='ionicon' name='ios-clipboard-outline' color='#D0D0D0' size={200} />
        </View>
      )

      else if(this.state.currentStep === '1')
      return(
        <View style={{ height: 200,width:this.state.width,justifyContent: 'center',alignItems:'center'}}>
          <Text style={[textStyle,{fontSize: 24}]}>Пожалуйста, заполните</Text>
          <Text style={[textStyle,{fontSize: 24}]}>все поля для анкеты</Text>
        </View>
      )
      else if(this.state.currentStep === '2')
      return(
        <View style={{ height: 200,width:this.state.width,justifyContent: 'center',alignItems:'center'}}>
          <Text style={[textStyle,{fontSize: 24}]}>Какой у вас тип крови?</Text>
        </View>
      )
      else if(this.state.currentStep === '3')
      return(
        <View style={{ height: 200,width:this.state.width,justifyContent: 'center',alignItems:'center'}}>
          <Text style={[textStyle,{fontSize: 24}]}>Какой у вас резус-фактор?</Text>
        </View>
      )
       else if(this.state.currentStep === '4')
      return(
        <View style={{ height: 200,width:this.state.width,justifyContent: 'center',alignItems:'center'}}>
          <Text style={[textStyle,{fontSize: 24}]}>Кем вы хотите быть сейчас</Text>
          <Text style={[textStyle,{fontSize: 24}]}>в этом приложении?</Text>
        </View>
      )
    }
    renderContent(){
      if(this.props.loading){
        return(            
        <View style={{flex: 1,alignItems:'center',justifyContent:'center'}}>
<Progress.Circle size={40} color={RED} indeterminate={true} />
</View>
        )
      }
      if(this.props.user === null){
        return(
          <View style={styles.container}>
  
            <View style={{ flex:12, }}>
              <View style={{ height:70,flexDirection:'row', }}>
                {this.renderBackToPreviousStep()}
                {this.renderCircles()}
              </View>
                {this.renderClipboard()}
            </View>
            
            {this.renderSteps()}
            
          </View>
  )  
      }
      return(
      <View style={styles.container}>

        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />

      </View>
      )
    }
  render() {
    return (
      <View style={styles.container} onLayout={(e)=>{this.setState({ height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width })}}>
        {this.renderContent()} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bloodType:{
    marginRight: 32,
  },
  inContainer: {
    flex: 15,
    marginHorizontal: 20,
    marginBottom: 10
  },
  header: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  input: {
    height: 50,
    borderBottomWidth: 0.4
  },
  labelStyle: {
    color: RED,
    fontSize: 13,
    paddingVertical: 10
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: 15/2,
    marginRight: 9
  },
  joinButton: {
    width: 170,
    borderRadius: 15,
    borderWidth: 0.6,
    borderColor: '#F65352',
    backgroundColor: RED,
    height: 40,
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  clipboardStyle: {
    color: "#D0D0D0",
    height:200,
    width:200
  },
  centerArea: {
    flex: 15,
    marginVertical: 10,
  },
  requestClose: {
    position: 'absolute',
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    bottom: 20
  },
  requestCloseText: {
    color: '#fff',
    fontSize: 16
  },
  requestCard: {
    paddingVertical: 10,
    marginBottom: 15
  },
  userNameArea: {
    flexDirection: 'row',
    marginBottom: 5
  },
  avatarImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 3
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  helpText: {
    fontSize: 17
  },
  rejectAcceptArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rejectButton: {
    backgroundColor: 'red',
    marginRight: 5,
    padding: 5,
    borderRadius: 4
  },
  rejectText: {
    color: 'red',
    padding: 5
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 4
  },
  acceptText: {
    color: 'green',
    padding: 5
  },
  indicator: {
    backgroundColor: RED,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

const mapStateToProps = ({ main }) => {
  const { user,loading } = main;
  return { user,loading };
};

export default connect(mapStateToProps, {
  initialUpdateUserDatabase
})(SecondTab);