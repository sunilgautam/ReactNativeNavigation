import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import UserList from '../components/UserList';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <UserList users={this.props.users} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    // backgroundColor: 'red',
  },
});

function mapStateToProps({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Home);
