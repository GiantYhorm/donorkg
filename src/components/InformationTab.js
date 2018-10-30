import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RED, SCREEN_WIDTH, SCREEN_HEIGHT, textStyle, boldTextStyle } from '../Variables';
import {
  InfoItem
} from './information';

const imageRef = { uri: 'https://pp.userapi.com/c846523/v846523669/19f0b/P1ScS2Fjvx4.jpg' };

class InformationTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{Actions.generalRules()}}>
          <InfoItem title={'Основные правила'} cardStyle={styles.firstCard} titleStyle={styles.titleStyle} image='https://firebasestorage.googleapis.com/v0/b/donerka-5dc8f.appspot.com/o/information%2F4.jpg?alt=media&token=2e04a265-62e9-4c34-ab26-1896b288272f' />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.beforeDonation()}}>
          <InfoItem title={'До донации'} cardStyle={styles.secondCard} titleStyle={styles.titleStyle} image='https://firebasestorage.googleapis.com/v0/b/donerka-5dc8f.appspot.com/o/information%2F1.jpg?alt=media&token=0d3c5a39-5c4c-4a99-a365-e91d0e8bff7b' />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.donationProcess()}}>
          <InfoItem title={'Процесс донации'} cardStyle={styles.thirdCard} titleStyle={styles.titleStyle} image='https://firebasestorage.googleapis.com/v0/b/donerka-5dc8f.appspot.com/o/information%2F2.jpg?alt=media&token=1661b9cc-7dcf-4924-9800-a5fadb01a6d1' />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.afterDonation()}}>
          <InfoItem title={'После донации'} cardStyle={styles.forthCard} titleStyle={styles.titleStyle} image='https://firebasestorage.googleapis.com/v0/b/donerka-5dc8f.appspot.com/o/information%2F3.jpg?alt=media&token=1bdd000d-0a08-4893-840c-feb34a466943' />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10
  },
  firstCard: {
    backgroundColor: RED
  },
  secondCard: {
    backgroundColor: RED
  },
  thirdCard: {
    backgroundColor: RED
  },
  forthCard: {
    backgroundColor: RED
  },
  titleStyle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 30
  }
});

export default InformationTab;

/* 97A5F1,56befb,42b6fb,2DAEFB*/