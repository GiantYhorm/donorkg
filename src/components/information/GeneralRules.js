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
        <InfoItem title={'Быть старше 18 лет'} titleStyle={styles.title} />
        <InfoItem title={'Весить не менее 50 кг'} titleStyle={styles.title} />
        <InfoItem title={'При себе иметь паспорт или военный билет'} titleStyle={styles.title} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
  }
});

export { GeneralRules };