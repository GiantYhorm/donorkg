import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { RED, textStyle } from '../../Variables';

const BloodType = (props) => {
  let iconStyle = props.active ? styles.iconActive : styles.iconInactive;
  let textStyle = props.active ? styles.textActive : styles.textInactive;

  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <View>
        <Icon name='droplet' size={47} style={iconStyle} />
        <Text style={textStyle}>{props.type}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconActive: {
    color: RED,
  },
  iconInactive: {
    color: '#d0d0d0',
  },
  textActive: {
    ...textStyle,
    color: RED,
    fontSize: 22,
    alignSelf: 'center',
  },
  textInactive: {
    ...textStyle,
    color: '#d0d0d0',
    fontSize: 22,
    alignSelf: 'center'
  },
});

export default BloodType;
