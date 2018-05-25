import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, StatusBar, Text } from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Initial from './components/Initial';
import firebase from 'firebase';
import { textStyle, headerTextStyle } from './Variables'

import LoginForm from './components/LoginForm';
import SecondTab from './components/SecondTab';

import ProfileEdit from './components/ProfileEdit';
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
import Privacy from './components/Privacy';
import History from './components/History';

class RouterComponent extends Component {

  componentDidMount(){
    StatusBar.setHidden(true);

  }

  render() {
    return (
    <Router titleStyle={headerTextStyle}>


        <Scene key="root" hideNavBar>

        <Scene key="secondTab" hideNavBar component ={SecondTab} />
        <Scene key="info" hideNavBar={false} title='Информация' component={InformationTab} />
        <Scene key="beforeDonation" hideNavBar={false} title='До донации' component={BeforeDonationPage} rightTitle navBarButtonColor='#e5385d' />
        <Scene key="donationProcess" hideNavBar={false} title='Процесс донации' component={DonationProcess} rightTitle navBarButtonColor='#e5385d' />
        <Scene key="afterDonation" hideNavBar={false} title='После донации' component={AfterDonation} rightTitle navBarButtonColor='#e5385d' />
        <Scene key="generalRules" hideNavBar={false} title='Основные правила' component={GeneralRules} rightTitle navBarButtonColor='#e5385d' />
        <Scene key="initial" hideNavBar initial component ={Initial} />
        <Scene key="login" component={LoginForm} />
        <Scene key="main" hideNavBar component={Main} />

        <Scene key='profileEdit' component={ProfileEdit} />
        <Scene key="profileView" hideNavBar component={ProfileView} />
        <Scene key="screen" hideNavBar component ={Screen} />
        <Scene key='privacy' hideNavBar component={Privacy} />
        <Scene key='userHistory' hideNavBar component={History} />

        </Scene>

    </Router>
    )
  }
}

export default RouterComponent
