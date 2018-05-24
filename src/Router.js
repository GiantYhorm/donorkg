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
import ProfileView from './components/ProfileView';
import InformationTab from './components/InformationTab';
import {
  GeneralRules,
  BeforeDonationPage,
  DonationProcess,
  AfterDonation
} from './components/information/';
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
        <Scene key="info" title='Information' component={InformationTab} />
        <Scene key="beforeDonation" title='Before Donation' component={BeforeDonationPage} />
        <Scene key="donationProcess" title='Donation Process' component={DonationProcess} />
        <Scene key="afterDonation" title='After Donation' component={AfterDonation} />
        <Scene key="generalRules" title='General Rules' component={GeneralRules} />
        <Scene key="initial" hideNavBar initial component ={Initial} />
        <Scene key="login" component={LoginForm} />
        <Scene key="main" hideNavBar component={Main} />
        <Scene key="profileView" hideNavBar component={ProfileView} />
        <Scene key="screen" hideNavBar component ={Screen} />
        
        </Scene>
    
    </Router>
    )
  }
}

export default RouterComponent
