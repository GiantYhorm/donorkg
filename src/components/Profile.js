import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {
  Statistics,
  BackgroundImage,
  MenuItem
} from './profile';
import { RED, SCREEN_WIDTH, textStyle } from '../Variables';

const avatar = { uri: 'https://pp.userapi.com/c846523/v846523669/19f0b/P1ScS2Fjvx4.jpg' };

class Profile extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.user}>
          <BackgroundImage source={avatar} />
        </View>
        <Statistics
          received={12}
          donated={234}
          bloodType='A+'
        />
        <View style={styles.menu}>
          <MenuItem iconName='edit-2' iconSize={18}>Редактировать профиль</MenuItem>
          <MenuItem iconName='clock' iconSize={18}>История</MenuItem>
          <MenuItem iconName='clipboard' iconSize={18}>Условия пользования</MenuItem>
          <MenuItem
            labelStyle={styles.logout}
            iconStyle={styles.logout}
            iconSize={18}
            iconName='log-out'
          >
            Выйти из приложения
          </MenuItem>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  user: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    borderRadius: SCREEN_WIDTH * 0.15,
    marginBottom: 10
  },
  username: {
    ...textStyle,
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  phone: {
    ...textStyle,
    color: '#fff'
  },
  menu: {
    flex: 1,
    padding: 20,
  },
  logout: {
    color: 'red'
  }
});

export default Profile;


/*
  avatar: https://pp.userapi.com/c846523/v846523669/19f0b/P1ScS2Fjvx4.jpg
  bloodType: bloodType
  name/Surname/
  stats: recieved donated
  donation history
  edit Profile
  logout
  terms of use === user
*/
