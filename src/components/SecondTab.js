import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated
} from 'react-native';
import { RED } from '../Variables';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';
import {textStyle} from '../Variables';
import Icon from 'react-native-vector-icons/Feather';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () =><View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: 'cyan' } ]} />;


class SecondTab extends Component {

    state = {
      index: 0,
      routes: [
        { key: 'first', title: 'В ожидании' },
        { key: 'second', title: 'Просмотренные' },
        { key: 'third', title: 'Доноры' },
      ],
    };

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

    renderContent(){
      console.log(this.props.bloodType)
      if(typeof this.props.bloodType === 'undefined'){
        return(
          <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <View style ={{marginBottom : 50,justifyContent:'center',alignItems:'center'}}>
          <Icon name='phone' color='#D0D0D0' size={200} />
              <Text style={[textStyle,{fontSize : 32,color:'#4a4a4a',}]}>Welcome!</Text>
              <Text style={[textStyle,{marginTop: 30,color:'#9C9495',}]}>You haven't filled out our questionnaire yet.</Text>
              <TouchableOpacity
style={{
width: 170,
alignSelf:'center',
borderRadius: 15,
borderWidth: 0.6,
borderColor: '#F65352',
backgroundColor: '#F65352',
height: 40,
marginTop: 85,
alignItems: 'center',
justifyContent: 'center'
}}>
  <Text style={[textStyle,{fontSize:20,color : '#fff',}]}>Join Us!</Text>
</TouchableOpacity>
              </View>
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
