'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import UserDetailsCard from '../components/UserDetailsCard';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.users.find((u) => (u.login === this.props.navigationParams.login)),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <UserDetailsCard {...this.state.user} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    users: state.users,
    navigationParams: state.navigationParams,
  }
}

export default connect(mapStateToProps)(UserDetails);
