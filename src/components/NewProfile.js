import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from "react-native";

class SecondTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topArea}>
          <View style={styles.avatarArea}>
            <Image
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              style={styles.avatarImage}
            />
          </View>
          <View style={styles.nameArea}>
            <Text style={styles.nameText}>Name Surname</Text>
          </View>
        </View>
        <View style={styles.bottomArea}>
          <View style={styles.container}>
            <View style={styles.achievements}>
              <View style={styles.leftAch}><Text>left</Text></View>
              <View style={styles.rightAch}><Text>right</Text></View>
            </View>
            <View style={styles.smthElse}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomArea: {
    flex: 2,
  },
  avatarArea: {
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  avatarImage: {
    width: Dimensions.get('window').width*0.3,
    height: Dimensions.get('window').height/6,
    resizeMode:'stretch',
    borderRadius: 25,
    alignSelf: 'center'
  },
  nameArea: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 20
  },
  achievements: {
    flex: 1,
    flexDirection: 'row',
  },
  leftAch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smthElse: {
    flex: 2,
  }
});

export default SecondTab;