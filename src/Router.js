import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {StatusBar} from 'react-native';
import {Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Initial from './components/Initial';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';
import SecondTab from './components/SecondTab';
import NewProfile from './components/NewProfile';
import InfoList from './components/InfoList';

class RouterComponent extends Component {


  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render() {
    return (
    <Router>
      <Scene key="root" hideNavBar>
      <Scene key="initial" hideNavBar component ={Initial} />
<<<<<<< HEAD
      <Scene key="secondTab" hideNavBar component ={SecondTab} />
      <Scene key="newProfile" hideNavBar={false} title='Профиль' component ={NewProfile} navigationBarStyle={{elevation: 0}} />
      <Scene key="infoList" hideNavBar={false} title='Info' initial component={InfoList} navigationBarStyle={{elevation: 0}} />
      <Scene key='editProfile' component={EditProfile} />

=======
      <Scene key="secondTab" hideNavBar initial component ={SecondTab} />      
>>>>>>> b358c170bfeae4610ae83add5227265a213546c5
      <Scene key="login" component={LoginForm} />
      </Scene>
    </Router>
    )
  }
}

export default RouterComponent