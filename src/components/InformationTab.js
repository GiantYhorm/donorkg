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

class InformationTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{Actions.generalRules()}}>
          <InfoItem title={'Общие правила'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.beforeDonation()}}>
          <InfoItem title={'До донации'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.donationProcess()}}>
          <InfoItem title={'Процесс донации'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{Actions.afterDonation()}}>
          <InfoItem title={'После донации'} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default InformationTab;