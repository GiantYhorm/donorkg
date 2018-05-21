import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { textStyle } from '../../Variables';

const MenuItem = (props) => {
  const renderIcon = (icon) => {
    console.log(icon)
    if (icon) {
      console.log('sdfs')
      return (
        <Icon
          name={icon}
          style={[styles.icon, props.iconStyle]}
          size={props.iconSize}
        />
      );
    }
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        {renderIcon(props.iconName)}
        <Text style={[styles.label, props.labelStyle]}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#2d2d2d',
    marginRight: 10
  },
  label: {
    ...textStyle,
    fontSize: 18,
  },
});

export { MenuItem };
