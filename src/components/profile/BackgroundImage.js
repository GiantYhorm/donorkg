import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT
} from '../../Variables';

const BackgroundImage = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={{uri: props.source}}
        style={styles.image}
        resizeMode='cover'
      >
      </Image>
      <View style={styles.contentWrapper}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#00000040'
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export { BackgroundImage };
