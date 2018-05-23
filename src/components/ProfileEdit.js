import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

class ProfileEdit extends Component {
  render() {
    return (
      <View>
        <Text>profile edit</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
  const { user } = state.main;

  return { user };
};

export default connect(mapStateToProps)(ProfileEdit);
