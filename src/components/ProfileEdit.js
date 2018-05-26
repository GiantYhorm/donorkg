import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { BackgroundImage, SelectBloodType } from './profile';
import { pickImageFromGallety } from '../modules';
import { profileEditSubmit } from '../actions';
import firebase from 'react-native-firebase';
import { SCREEN_WIDTH } from '../Variables';

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodType: 'O',
      avatar: this.props.avatar,
      rhFactor: this.props.rhFactor,
    };
  }

  avatarChange() {
    pickImageFromGallety((url) => this.setState({ avatar: url }));
  }

  changeBloodType(type) {
    this.setState({
      bloodType: type,
    });
  }

  changeFactor(factor) {
    this.setState({
      rhFactor: factor,
    });
  }

  submit() {
    console.log('submit');
  }

  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage source={this.state.avatar} style={styles.avatar}>
          <View style={styles.imageContent}>
            <TouchableOpacity onPress={this.avatarChange.bind(this)}>
              <Icon name='camera' size={24} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </BackgroundImage>
        <View style={styles.options}>
          <SelectBloodType onSelect={this.changeBloodType.bind(this)} />
          <SelectFactor onSelect={this.changeFactor.bind(this)}/>
          <TouchableOpacity onPress={this.submit.bind(this)}>
            <Text style={styles.submitText}>Обновить</Text>
          </TouchableOpacity>
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
  options: {
    flex: 3,
    width: SCREEN_WIDTH,
  },
});

const mapStateToProps = (state) => {
  const { avatar, rhFactor } = state.main.user;

  return { avatar, rhFactor };
};

export default connect(mapStateToProps, {
  profileEditSubmit,
})(ProfileEdit);
