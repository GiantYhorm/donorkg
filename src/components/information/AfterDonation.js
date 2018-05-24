import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView
} from 'react-native';
import {
  InfoItem
} from './index';


class AfterDonation extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <InfoItem cardStyle={styles.allowBorder} iconStyle={styles.allowIcon} iconName='check' iconSize={66} title={'5-10 минут'} description={'расслабиться и посидеть. Если почувствовали головокружение, обратиться к медицинскому персоналу'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'1 час'} description={'воздержаться от курения'}/>
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'2 часа'} description={'воздержаться от вождения мотоцикла (на автомобиль ограничений нет)'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'3-4 часа'} description={'не снимать и не мочить повязку'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'12 часов'} description={'не следует поднимать тяжести рукой, из которой производили забор крови'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'24 часа'} description={'избегать физических нагрузок, посещения бани, не употреблять алкоголь'} />
        <InfoItem cardStyle={styles.allowBorder} iconStyle={styles.allowIcon} iconName='check' iconSize={66} title={'48 часов'} description={'обильно и регулярно питаться и употреблять больше жидкости'} />
        <InfoItem cardStyle={styles.disallowBorder} iconStyle={styles.disallowIcon} iconName='x' iconSize={66} title={'10 суток'} description={'не делать никаких прививок'} />
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

export { AfterDonation };