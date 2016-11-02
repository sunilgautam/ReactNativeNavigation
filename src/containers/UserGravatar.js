'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import NavHeader from '../components/NavHeader';
import UserDetailsCard from '../components/UserDetailsCard';

class UserGravatar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.users.find((u) => (u.login === this.props.login)),
    };
  }

  render() {
    let {width} = Dimensions.get('window');
    width = width - 20;
    let height = width;
    let borderRadius = height / 2;
    return (
      <View style={styles.container}>
        <NavHeader title={this.state.user.name} />
        <View style={styles.subContainer}>
          <Image
            style={{ height, width, borderRadius }}
            defaultSource={require('../components/img/placeholder.png')}
            source={{uri: this.state.user.gravatar}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(UserGravatar);
