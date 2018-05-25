import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/Feather';
import {
  Statistics,
  BackgroundImage,
  MenuItem
} from './profile';
import { RED, SCREEN_WIDTH, textStyle } from '../Variables';


class Profile extends Component {
  onProfileEdit() {
    Actions.profileEdit();
  }
  onTermsPress() {
    Actions.privacy();
  }
  onHistoryPress() {
    Actions.userHistory();
  }

  onLogout() {
    firebase.auth().signOut()
      .then(() => {
        Actions.initial();
      });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.user}>
          <BackgroundImage source={this.props.avatar}>
            <View style={styles.imageContent}>
              <TouchableOpacity onPress={this.onProfileEdit} style={styles.edit}>
                <Icon name='edit-3' size={24} style={styles.editIcon} />
              </TouchableOpacity>
              <View style={styles.userInfo}>
                <Text style={styles.username}>{this.props.username}</Text>
                <Text style={styles.phone}>{this.props.phone}</Text>
              </View>
            </View>
          </BackgroundImage>
        </View>
        <Statistics
          received={this.props.receivedCount}
          donated={this.props.donatedCount}
          bloodType={this.props.blood}
        />
        <View style={styles.menu}>
          {/*<MenuItem
            iconName='edit-2'
            iconSize={18}
            onPress={this.onProfileEdit}
          >
            Редактировать профиль
          </MenuItem>*/}
          <MenuItem
            iconName='clock'
            iconSize={18}
            onPress={this.onHistoryPress}
          >История</MenuItem>
          <MenuItem
            iconName='clipboard'
            iconSize={18}
            onPress={this.onTermsPress}
          >Условия пользования</MenuItem>
          <MenuItem
            onPress={this.onLogout}
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
  imageContent: {
    position: 'relative',
    justifyContent: 'flex-end',
    flex: 1,
  },
  userInfo: {
    padding: 10,
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
  },
  edit: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  editIcon: {
    color: '#fff'
  },
});

const mapStateToProps = (state) => {
  const {
    avatar,
    bloodType,
    currentRole,
    firstName,
    lastName,
    patronymic,
    phone,
    rhFactor,
    receivedCount,
    donatedCount
  } = state.main.user;
  console.log(state.main.user);

  const username = `${firstName} ${lastName}`;
  const blood = `${bloodType}${rhFactor}`;
  return {
    avatar,
    currentRole,
    username,
    patronymic,
    phone,
    blood,
    receivedCount,
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
