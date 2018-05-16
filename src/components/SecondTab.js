import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { RED } from '../Variables';

class SecondTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topArea}>
            <View style={styles.navBarTabActive}>
              <Text style={styles.navBarTextActive}>В ОЖИДАНИИ</Text>
            </View>
            <View style={styles.navBarTabInactive}>
              <Text style={styles.navBarTextInactive}>РАССМОТРЕНО</Text>
            </View>
            <View style={styles.navBarTabInactive}>
              <Text style={styles.navBarTextInactive}>ДОНОРЫ</Text>
            </View>
          </View>

          <View style={styles.inContainer}>

            <View style={styles.centerArea}>
              <View style={styles.requestCard}>
                <View style={styles.userNameArea}>
                  <View style={styles.userName}>
                    <Image
                      style={styles.avatarImage}
                      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <Text style={styles.nameText}>Name Surname </Text>
                  </View>
                  <Text style={styles.helpText}>
                    хочет помочь вам
                  </Text>
                </View>
                <View style={styles.rejectAcceptArea}>
                  <TouchableOpacity>
                    <Text style={styles.rejectText}>Отказаться</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.acceptText}>Принять</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.requestCard}>
                <View style={styles.userNameArea}>
                  <View style={styles.userName}>
                    <Image
                      style={styles.avatarImage}
                      source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <Text style={styles.nameText}>Name Surname </Text>
                  </View>
                  <Text style={styles.helpText}>
                    хочет помочь вам
                  </Text>
                </View>
                <View style={styles.rejectAcceptArea}>
                  <TouchableOpacity>
                    <Text style={styles.rejectText}>Отказаться</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={styles.acceptText}>Принять</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.requestClose}>
              <Text style={styles.requestCloseText}>Я больше не нуждаюсь в крови</Text>
            </TouchableOpacity>
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
  inContainer: {
    flex: 15,
    marginHorizontal: 20,
    marginBottom: 10
  },
  header: {
    flex: 1
  },
  topArea: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5
  },
  navBarTabActive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderColor: RED,
  },
  navBarTabInactive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 3,
    borderColor: 'transparent'
  },
  navBarTextActive: {
    fontSize: 14,
    color: RED,
  },
  navBarTextInactive: {
    fontSize: 14,
    color: '#A1A1A3'
  },
  centerArea: {
    flex: 15,
    marginVertical: 10,
  },
  requestClose: {
    flex: 1,
    backgroundColor: RED,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  requestCloseText: {
    color: '#fff',
    fontSize: 16
  },
  requestCard: {
    paddingVertical: 10,
    marginBottom: 15
  },
  userNameArea: {
    flexDirection: 'row',
    marginBottom: 5
  },
  avatarImage: {
    width: 20,
    height: 20,
    borderRadius: 25,
    marginRight: 3
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  helpText: {
    fontSize: 17
  },
  rejectAcceptArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rejectButton: {
    backgroundColor: 'red',
    marginRight: 5,
    padding: 5,
    borderRadius: 4
  },
  rejectText: {
    color: 'red',
    padding: 5
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 4
  },
  acceptText: {
    color: 'green',
    padding: 5
  },
});

export default SecondTab;