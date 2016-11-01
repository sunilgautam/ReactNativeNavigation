import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class UserCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.gravatar}
          source={{uri: this.props.gravatar}}
        />
        <View style={styles.details}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.subTitle}>{this.props.login}</Text>
          <View style={styles.follower}>
            <Image style={styles.followerIcon} source={require('./img/followers-icon.png')} />
            <Text style={styles.followerCount}>{this.props.followers}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  gravatar: {
    height: 100,
    width: 100,
    borderRadius: 4,
  },
  details: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 24,
  },
  subTitle: {
    fontSize: 18,
  },
  follower: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followerIcon: {
    height: 32,
    width: 32,
  },
  followerCount: {
    fontSize: 15,
    paddingLeft: 5,
  },
});

export default UserCard;
