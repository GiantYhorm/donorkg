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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Резус фактор</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.onPositive.bind(this)} style={styles.item}>
            <Icon name='plus' size={47} style={positiveStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onNegative.bind(this)} style={styles.item}>
            <Icon name='minus' size={47} style={negativeStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  posActive: {
    color: RED,
  },
  posInActive: {
    color: '#d0d0d0',
  },
  negActive: {
    color: RED,
  },
  negInactive: {
    color: '#d0d0d0',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    ...textStyle,
    fontSize: 18,
  }
});

export { SelectFactor };
