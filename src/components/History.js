import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { textStyle, RED, SCREEN_WIDTH } from '../Variables';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import ReceivedRoute from './History/ReceivedRoute';
import DonatedRoute from './History/DonatedRoute';


const initialLayout = {
  height: 0,
  width: SCREEN_WIDTH,
};

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'полученные' },
        { key: 'second', title: 'отданные' },
      ],
    };
  }



  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => (
    <TabBar
      {...props}
      style={styles.header}
      indicatorStyle={styles.indicator}
      renderLabel={this._renderLabel(props)}
    />
  );

  _renderScene = SceneMap({
    first: ReceivedRoute,
    second: DonatedRoute,
  });

  _renderLabel = props => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputRange => (inputRange === index ? RED : '#A1A1A3')
    );

    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[styles.labelStyle, { color }]}>
       {route.title}
      </Animated.Text>
    );
  };

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    backgroundColor: RED,
  },
  header: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  labelStyle: {
    color: RED,
    fontSize: 13,
    paddingVertical: 10
  }
});

export default History;
