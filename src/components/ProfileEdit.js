import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { BackgroundImage } from './profile';
import { pickImageFromGallety } from '../modules';
import { avatarChanged } from '../actions';
import firebase from 'react-native-firebase';

class ProfileEdit extends Component {
  avatarChange() {
    pickImageFromGallety(this.props.avatarChanged);
  }

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage source={this.props.avatar} style={styles.avatar}>
          <View style={styles.imageContent}>
            <TouchableOpacity onPress={this.avatarChange.bind(this)}>
              <Icon name='camera' size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </BackgroundImage>
        <View style={styles.bloodContainer}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  avatar: {
    flex: 2,
  },
  imageContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    alignSelf: 'flex-end',
    padding: 10,
    color: '#fff'
  },
  bloodContainer: {
    flex: 3,
  }
});

const mapStateToProps = (state) => {
  const { avatar } = state.main.user;

  return { avatar };
};

export default connect(mapStateToProps, {
  avatarChanged,
})(ProfileEdit);
