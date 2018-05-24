import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, StatusBar, Text } from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Initial from './components/Initial';
import firebase from 'firebase';
import { textStyle } from './Variables'

import LoginForm from './components/LoginForm';
import SecondTab from './components/SecondTab';

import ProfileEdit from './components/ProfileEdit';
import ProfileView from './components/ProfileView';
import InfoList from './components/InfoList';
import Main from './components/Main';
import Screen from './components/introduction/Screen';

class RouterComponent extends Component {

  componentDidMount(){
    StatusBar.setHidden(true);

  }

  render() {
    return (
    <Router>


        <Scene key="root" hideNavBar>

        <Scene key="secondTab" hideNavBar component ={SecondTab} />
        <Scene key="infoList" hideNavBar={false} title='Info' component={InfoList} navigationBarStyle={{elevation: 0}} />
        <Scene key="initial" hideNavBar initial component ={Initial} />
        <Scene key="login" component={LoginForm} />
        <Scene key="main" hideNavBar component={Main} />

        <Scene key='profileEdit' component={ProfileEdit} />
        <Scene key="profileView" hideNavBar component={ProfileView} />
        <Scene key="screen" hideNavBar component ={Screen} />

        </Scene>

    </Router>
    )
  }
}

export default RouterComponent
