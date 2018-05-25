import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { textStyle, RED } from '../../Variables';

const Statistics = (props) => {
  const renderBlood = () => {
    if (props.bloodType) {
      return (
        <View style={styles.block}>
          <Text style={styles.number}>{props.bloodType}</Text>
          <Text style={styles.label}>Группа крови</Text>
        </View>
      );
    }
  };

  const renderReceives = () => {
    if (props.received !== undefined) {
      return (
        <View style={styles.block}>
          <Text style={styles.number}>{props.received}</Text>
          <Text style={styles.label}>Получено</Text>
        </View>
      );
    }
  };

  const renderDonations = () => {
    if (props.donated !== undefined) {
      return (
        <View style={styles.block}>
          <Text style={styles.number}>{props.donated}</Text>
          <Text style={styles.label}>Отдано</Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      {renderBlood()}
      {renderDonations()}
      {renderReceives()}
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
    color: RED,
    fontWeight: '600',
  },
  label: {
    ...textStyle,
    fontSize: 12,
    color: '#707070',
  }
});

export { Statistics };
