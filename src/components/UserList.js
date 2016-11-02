'use strict';
import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text,
} from 'react-native';

import UserCard from './UserCard';

class UserList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.users),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(nextProps.users)
    })
  }

  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={styles.separator}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.users.length > 0 &&
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(data) => <UserCard {...data} />}
            renderSeparator={this.renderSeparator}
          />
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default UserList;
