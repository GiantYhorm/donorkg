import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigator } from 'react-navigation';

import Swiper from './WelcomeScreen/Swiper';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../Variables';

class Screen extends Component {
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Image source={require('../assets/images/firstFrame.png')} style={styles.imageStyle} resizeMode='contain'/>
          <Text style={styles.header}>Найди донора</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Image source={require('../assets/images/secondFrame.png')} style={styles.imageStyle} resizeMode='contain'/>
          <Text style={styles.header}>Помоги другому</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Image source={require('../assets/images/thirdFrame.png')} style={styles.imageStyle} resizeMode='contain'/>
          <Text style={styles.header}>Начни прямо сейчас!</Text>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  header: {
    color: '#e5385d',
    fontFamily: 'AvenirNextCyr-Bold',
    fontSize: 30,
    flex: 2,
  },
  imageStyle: {
    flex: 3,
    width: SCREEN_WIDTH / 1.5,
    height: SCREEN_HEIGHT / 1.5,
    backgroundColor: '#fff'
  }
});

export default Screen;