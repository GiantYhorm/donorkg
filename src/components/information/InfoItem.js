import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {boldTextStyle, SCREEN_HEIGHT, textStyle, RED} from '../../Variables';
import { BackgroundImage } from '../profile';

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

  const renderTitle = (title) => {
    if (title) {
      return (
        <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
      )
    }
  };

  const renderImage = (image) => {
    if (image) {
      return (
        <Image
          source={{uri: props.image}}
          style={styles.imageStyle}
          resizeMode='cover'
        />
      )
    }
  };

  return (
      <View style={[styles.container, props.cardStyle]}>
        {renderIcon(props.iconName)}
        {renderNumber(props.number)}
        {renderImage(props.image)}
        <View style={styles.textArea}>
          {renderTitle(props.title)}
          <Text style={[styles.description, props.descriptionStyle]}>{props.description}</Text>
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
    elevation: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  icon: {
    color: '#000',
    paddingHorizontal: 10
  },
  number: {
    ...boldTextStyle,
    fontSize: 50,
    paddingHorizontal: 10,
    color: RED
  },
  title: {
    ...boldTextStyle,
    fontSize: 20,
  },
  description: {
    ...textStyle,
    fontSize: 16,
  },
  textArea: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5
  },
  imageStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8
  }
});

export { InfoItem };