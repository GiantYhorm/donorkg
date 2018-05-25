import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  InfoItem
} from './index';
import { RED } from '../../Variables';


class BeforeDonationPage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={40} title={'72 часа'} description={'не иметь плохого самочувствия и не принимать лекарства содержащие аспирин, анальгетики и противосполительные препараты'}/>
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={40} title={'48 часов'} description={'воздержаться от употребления алкоголя'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={40} title={'24 часа'} description={'исключать жирную, острую и копчёную пищу, молочные продукты и яйца'} />
        <InfoItem cardStyle={styles.allowBorder} iconStyle={styles.allowIcon} iconName='check' iconSize={40} title={'Утром'} description={'легко позавтракать (сладкий чай, соки, компоты, минеральную воду, хлеб, сухари, сушки, каши на воде, овощи и фрукты)'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={40} title={'1 час'} description={'воздержаться от курения'} />
        <InfoItem cardStyle={styles.allowBorder} iconStyle={styles.allowIcon} iconName='check' iconSize={40} title={'5-10 минут'} description={'перед сдачей крови попить сладкий чай'} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  allowIcon: {
    color: '#4CA64C',
  },
  allowBorder: {
    borderColor: '#4CA64C',
    backgroundColor: '#fff',
  },
  disallowIcon: {
    color: '#ff3232',
  },
  disallowBorder: {
    backgroundColor: '#fff'
  }
});

export { BeforeDonationPage };