import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import UserList from '../components/UserList';
import Header from '../components/Header';

class Home extends Component {

  constructor(props) {
    super(props);
    this.onUserClick = this.onUserClick.bind(this);
    this.routeDetails = {
      type: 'push',
      route: {
        key: 'details',
      }
    };
  }

  onUserClick(login) {
    let targetRoute = Object.assign({}, this.routeDetails);
    targetRoute.route.login = login;
    this.props.navigate(targetRoute);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <UserList users={this.props.users} onUserClick={this.onUserClick} />
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

export default connect(mapStateToProps)(Home);
