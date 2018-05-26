import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BloodType from './BloodType';

class SelectBloodType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oActive: true,
      aActive: false,
      bActive: false,
      abActive: false,
    };
    this.props.onSelect('O');
  }

  onOPress() {
    this.setState({
      oActive: true,
      aActive: false,
      bActive: false,
      abActive: false,
    });
    this.props.onSelect('O');
  }

  onAPress() {
    this.setState({
      oActive: false,
      aActive: true,
      bActive: false,
      abActive: false,
    });
    this.props.onSelect('A');
  }

  onBPress() {
    this.setState({
      oActive: false,
      aActive: false,
      bActive: true,
      abActive: false,
    });
    this.props.onSelect('B');
  }

  onABPress() {
    this.setState({
      oActive: false,
      aActive: false,
      bActive: false,
      abActive: true,
    });
    this.props.onSelect('AB');
  }

  render() {
    return (
      <View style={styles.container}>
        <BloodType
          type='O'
          active={this.state.oActive}
          onPress={this.onOPress.bind(this)}
        />
        <BloodType
          type='A'
          active={this.state.aActive}
          onPress={this.onAPress.bind(this)}
        />
        <BloodType
          type='B'
          active={this.state.bActive}
          onPress={this.onBPress.bind(this)}
        />
        <BloodType
          type='AB'
          active={this.state.abActive}
          onPress={this.onABPress.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
});

export { SelectBloodType };
