import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { textStyle } from '../../Variables';

const Statistics = (props) => {
  const renderBlood = () => {
    if (props.bloodType) {
      return (
        <View style={styles.block}>
          <Text style={styles.number}>{props.bloodType}</Text>
          <Text style={styles.label}>группа крови</Text>
        </View>
      );
    }
  };

  const renderRecieves = () => {
    if (props.recieved) {
      return (
        <View style={styles.block}>
          <Text style={styles.number}>{props.recieved}</Text>
          <Text style={styles.label}>Получено</Text>
        </View>
      );
    }
  };

  const renderDonations = () => {
    if (props.donated) {
      return (
        <View style={styles.block}>
          <Text style={styles.number}>{props.donated}</Text>
          <Text style={styles.label}>отдано</Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      {renderBlood()}
      {renderDonations()}
      {renderRecieves()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    ...textStyle,
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  label: {
    ...textStyle,
    fontSize: 12,
    color: '#fff',
  }
});

export { Statistics };
