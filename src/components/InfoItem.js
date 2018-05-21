import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Platform,UIManager,StyleSheet, ScrollView, View, Text, TouchableOpacity, LayoutAnimation, Dimensions} from "react-native";
import Image from 'react-native-image-progress';
import { selectLibrary } from '../actions';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

class InfoItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {library.description}
          </Text>
        </View>
      );
    }
  }

  render() {
    const { id, title } = this.props.library;

    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.selectLibrary(id)}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
                {title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {this.renderDescription()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginHorizontal: 10,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 0,
    elevation: 2,
    backgroundColor: '#fff'
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  titleContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 0,
    backgroundColor: '#fff'
  },
  titleText: {
    fontSize: 22,
    color: '#000',
  },
  description: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 10
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, { selectLibrary })(InfoItem);