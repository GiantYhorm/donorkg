import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, this.props.buttonStyle]}>
          <Text style={[styles.text, this.props.buttonText]}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e5385d',
    paddingHorizontal: 50,
    paddingVertical: 10
  },
  text: {
    color: '#e5385d',
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  }
});
