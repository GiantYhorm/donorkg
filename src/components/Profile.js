import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Statistics,
  MenuItem
} from './profile';
import { RED, SCREEN_WIDTH, textStyle } from '../Variables';

const avatar = { uri: 'https://pp.userapi.com/c846523/v846523669/19f0b/P1ScS2Fjvx4.jpg' };

class Profile extends Component {
  onProfileEdit() {
    Actions.profileEdit();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.user}>
          <View style={styles.userInfo}>
            <Image source={avatar} style={styles.image} resizeMode='cover' />
            <Text style={styles.username}>{ this.props.username }</Text>
          </View>
            <Statistics
              recieved={this.props.recievedCount}
              donated={this.props.donatedCount}
              bloodType={this.props.blood}
            />
        </View>
        <View style={styles.menu}>
          <MenuItem
            iconName='edit-2'
            iconSize={18}
            onPress={this.onProfileEdit}
          >
            Редактировать профиль
          </MenuItem>
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
    backgroundColor: RED,
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

const mapStateToProps = (state) => {
  const {
    bloodType,
    currentRole,
    firstName,
    lastName,
    patronymic,
    phone,
    rhFactor,
    recievedCount,
    donatedCount
  } = state.main.user;
  console.log(state.main.user);

  const username = `${firstName} ${lastName}`;
  const blood = `${bloodType}${rhFactor}`;
  return {
    currentRole,
    username,
    patronymic,
    phone,
    blood,
    recievedCount,
    donatedCount
  };
};

export default connect(mapStateToProps)(Profile);


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
