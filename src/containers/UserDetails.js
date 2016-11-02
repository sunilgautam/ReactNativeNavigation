'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import NavHeader from '../components/NavHeader';
import UserDetailsCard from '../components/UserDetailsCard';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.users.find((u) => (u.login === this.props.login)),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavHeader title={this.state.user.name} />
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

function mapStateToProps({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(UserDetails);
