import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {boldTextStyle, SCREEN_HEIGHT, textStyle} from '../../Variables';

const InfoItem = (props) => {
  const renderIcon = (icon) => {
    if (icon) {
      return (
        <Icon
          name={icon}
          style={[styles.icon, props.iconStyle]}
          size={props.iconSize}
        />
      );
    }
  };

  const renderNumber = (number) => {
    if (number) {
      return (
        <Text style={[styles.number, props.numberStyle]}>
          {props.number}
        </Text>
      );
    }
  };

  return (
      <View style={[styles.container, props.cardStyle]}>
        {renderIcon(props.iconName)}
        {renderNumber(props.number)}
        <View style={styles.textArea}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: SCREEN_HEIGHT / 6,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#000'
  },
  icon: {
    color: '#000',
  },
  number: {
    ...boldTextStyle,
    fontSize: 50
  },
  title: {
    ...boldTextStyle,
    fontSize: 24,
  },
  description: {
    ...textStyle,
    fontSize: 16,
  },
  textArea: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export { InfoItem };