import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Initial from './components/Initial';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import SecondTab from './components/SecondTab';

class RouterComponent extends Component {


  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render() {
    return (
    <Router>
      <Scene key="root" hideNavBar>
      <Scene key="initial" hideNavBar component ={Initial} />
      <Scene key="secondTab" hideNavBar initial component ={SecondTab} />      
      <Scene key="login" component={LoginForm} />
      </Scene>
    </Router>
    )
  }
}

export default RouterComponent