import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { textStyle, RED } from '../../Variables';

class SelectFactor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positiveActive: true,
      negativeActive: false,
    };
  }

  onPositive() {
    this.setState({
      positiveActive: true,
      negativeActive: false,
    });
    this.props.onSelect('+');
  }

  onNegative() {
    this.setState({
      positiveActive: false,
      negativeActive: true,
    });
    this.props.onSelect('-');
  }

  render() {
    let positiveStyle = this.state.positiveActive ? styles.posActive : styles.posInActive;
    let negativeStyle = this.state.negativeActive ? styles.negActive : styles.negInactive;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPositive.bind(this)}>
          <Icon name='plus' size={47} style={positiveStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onNegative.bind(this)}>
          <Icon name='minus' size={47} style={negativeStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  posActive: {
    flex: 1,
    color: RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  posInActive: {
    flex: 1,
    color: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  negActive: {
    flex: 1,
    color: RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  negInactive: {
    flex: 1,
    color: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { SelectFactor };
