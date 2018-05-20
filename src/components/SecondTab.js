import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import { RED } from '../Variables';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import {textStyle} from '../Variables';
import { Icon} from 'react-native-elements';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () =><View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'cyan' } ]} />;

const logoUri = require('../assets/logo.png');

class SecondTab extends Component {

    constructor(props){
      super(props)
      this.state = {
        index: 0,
        width: '',
        height: '',
        routes: [
          { key: 'first', title: 'В ожидании' },
          { key: 'second', title: 'Просмотренные' },
          { key: 'third', title: 'Доноры' },
        ],
        currentStep: '0',
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
      third: ThirdRoute
    });

    getCircleColor(step,circleNumber){
      if(step===circleNumber)
        return RED
      return '#D0D0D0'
    }


    renderCircles(){
      return(
        <View style={{flex : 1, flexDirection:'row',justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.circle,{ backgroundColor: this.getCircleColor(this.state.currentStep,'0') }]} />
          <View style={[styles.circle,{ backgroundColor: this.getCircleColor(this.state.currentStep,'1') }]} />
          <View style={[styles.circle,{ backgroundColor: this.getCircleColor(this.state.currentStep,'2') }]} /> 
        </View>
      )
    }

    renderSteps(){
      if(this.state.currentStep==='0')
      return(
            <View style={{ flex:10 , justifyContent:'center' , alignItems:'center' }}>
              
              <Text style={[textStyle,{fontSize : 32,color:'#4a4a4a'}]}>Добро пожаловать!</Text>
              <Text style={[textStyle,{marginTop: 30,color:'#9C9495'}]}>Вы еще не заполнили свою анкету.</Text>
              <TouchableOpacity onPress={()=>this.setState({ currentStep: '1' })} style={styles.joinButton}>
                <Text style={[textStyle,{fontSize:20,color : '#fff'}]}>Заполнить</Text>
              </TouchableOpacity>
   
            </View>
      )
      else if(this.state.currentStep==='1')
      return(
        <View style={{ flex:10 , justifyContent:'center' , alignItems:'center' }}>
        
        <Text style={[textStyle,{fontSize : 32,color:'#4a4a4a'}]}>Добро пожаловать!</Text>
        <Text style={[textStyle,{marginTop: 30,color:'#9C9495'}]}>Вы еще не заполнили свою анкету.</Text>
        <TouchableOpacity onPress={()=>this.setState({ currentStep: '1' })} style={styles.joinButton}>
          <Text style={[textStyle,{fontSize:20,color : '#fff'}]}>Заполнить</Text>
        </TouchableOpacity>

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

    renderContent(){
      if(typeof this.props.bloodType === 'undefined'){
        return(
          <View style={styles.container}>
  
            <View style={{ flex:12, }}>
              <View style={{ height:70,flexDirection:'row', }}>
                {this.renderBackToPreviousStep()}
                {this.renderCircles()}
              </View>
              <View style={{ justifyContent: 'flex-end', alignItems: 'center'  }}>
                <Icon type='ionicon' name='ios-clipboard-outline' color='#D0D0D0' size={200} />
              </View>
            </View>
            
            {this.renderSteps()}
            
          </View>
  )  
      }
      return(
      <View style={styles.container} onLayout={(e)=>{this.setState({height: e.nativeEvent.layout.height,width:e.nativeEvent.layout.width})}}>

        <TabViewAnimated
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />

        <TouchableOpacity style={styles.requestClose}>
          <Text style={styles.requestCloseText}>Я больше не нуждаюсь в крови</Text>
        </TouchableOpacity>
      </View>
      )
    }
  render() {
    return (
      this.renderContent()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  labelStyle: {
    color: RED,
    fontSize: 13,
    paddingVertical: 10
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15/2,
    marginRight: 10
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
  const { user } = main;
  return { user };
};

export default connect(mapStateToProps, {
})(SecondTab);