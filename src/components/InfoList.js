import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ListView, ScrollView, FlatList, Text } from "react-native";
import { selectLibrary } from '../actions';
import InfoItem from './InfoItem';

class InfoList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <InfoItem library={library} />;
  }
// {/*<ScrollView style={styles.container}>*/}
// {/*<Text>Hello</Text>*/}
// {/*<FlatList*/}
// {/*data={this.props.item}*/}
// {/*renderItem={({ item }) => (*/}
// {/*<InfoItem item={item} />*/}
// {/*)}*/}
// {/*keyExtractor = {(item) => item.id}*/}
// {/*/>*/}
// {/*</ScrollView>*/}
  render() {
    return (
      <ScrollView style={styles.container}>
    <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(InfoList);