import React, { Component } from "react";
import {
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

import Swiper from "./Swiper";

class Screen extends Component {
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Добро пожаловать</Text>
          <Text style={styles.text}>Срочно нужна кровь или хотите стать донором? Без проблем!</Text>
          <Text style={styles.text}>Наше приложение всегда найдет подходящих вам доноров или нуждающихся в крови людей</Text>

        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Поиск в один клик</Text>
          <Text style={styles.text}>Чтобы начать поиск, требуется лишь зайти в приложение*</Text>
          <Text style={styles.smallText}>*При условии, если вы зарегистрированы</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Text style={styles.header}>Начнем?</Text>
          <Text style={styles.text}>Войдите, чтобы начать пользоваться приложением</Text>
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#e5385d"
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  },
  smallText: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 13,
    marginHorizontal: 40,
    marginTop: 50,
    textAlign: "center"
  }
});

export default Screen;