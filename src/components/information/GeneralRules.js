import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  InfoItem
} from './index';


class GeneralRules extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoItem number={'18+ лет'} numberStyle={styles.title} />
        <InfoItem number={'50+ кг'} numberStyle={styles.title} />
        <InfoItem number={'При себе иметь удостоверение личности'} numberStyle={styles.title} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
  }
});

export { GeneralRules };