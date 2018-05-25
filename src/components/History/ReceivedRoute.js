import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class ReceivedRoute extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ReceivedRoute</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  const { user, list } = state.main;
  console.log(state.main);
  return { user, list };
};

export default connect(mapStateToProps)(ReceivedRoute);
