import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  InfoItem
} from './index';


class BeforeDonationPage extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'72 часа'} description={'не иметь плохого самочувствия и не принимать лекарства содержащие аспирин, анальгетики и противосполительные препараты'}/>
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'48 часов'} description={'воздержаться от употребления алкоголя'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'24 часа'} description={'исключать жирную, острую и копчёную пищу, молочные продукты и яйца'} />
        <InfoItem cardStyle={styles.allowBorder} iconStyle={styles.allowIcon} iconName='check' iconSize={66} title={'Утром'} description={'легко позавтракать (сладкий чай, соки, компоты, минеральную воду, хлеб, сухари, сушки, каши на воде, овощи и фрукты)'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'1 час'} description={'воздержаться от курения'} />
        <InfoItem cardStyle={styles.allowBorder} iconStyle={styles.allowIcon} iconName='check' iconSize={66} title={'5-10 минут'} description={'перед сдачей крови попить сладкий чай'} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  allowIcon: {
    color: '#4CA64C'
  },
  allowBorder: {
    borderColor: '#4CA64C'
  },
  disallowIcon: {
    color: '#ff3232'
  },
  disallowBorder: {
    borderColor: '#ff3232'
  }
});

export { BeforeDonationPage };