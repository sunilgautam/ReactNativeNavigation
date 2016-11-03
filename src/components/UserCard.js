import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

class UserCard extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onUserClick(this.props.login)}
        style={{ padding: 5, borderRadius: 4, }}
        activeOpacity={0.8}
        underlayColor="#d9d9d9"
      >
      <View style={styles.container}>
          <Image
            style={styles.gravatar}
            defaultSource={require('./img/placeholder.png')}
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
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  gravatar: {
    height: 72,
    width: 72,
  },
  details: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
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
