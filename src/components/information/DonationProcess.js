import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  InfoItem
} from './index';


class DonationProcess extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoItem number={'1'} numberStyle={styles.title} description={'заполнение анкеты и регистрация'}/>
        <InfoItem number={'2'} numberStyle={styles.title} description={'определение группы крови, резус фактора и уровня гемоглобина'} />
        <InfoItem number={'3'} numberStyle={styles.title} description={'осмотр терапевта'} />
        <InfoItem number={'4'} numberStyle={styles.title} description={'бесплатное посещение буфета (сладкий чай)'} />
        <InfoItem number={'5'} numberStyle={styles.title} description={'во время процедуры донации используются только одноразовые стерильные расходные материалы, персонал работает исключительно в средствах индивидуальной защиты'} />
        <InfoItem number={'6'} numberStyle={styles.title} description={'получение справки и (либо компенсация обеда)'} />
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
    marginLeft: 10
  }
});

export { DonationProcess };