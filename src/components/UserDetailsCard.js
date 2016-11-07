import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

class UserDetailsCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.props.onGravatarClick(this.props.login)}
          style={{ padding: 5, borderRadius: 4, }}
          activeOpacity={0.8}
          underlayColor="#d9d9d9"
        >
          <Image
            style={styles.gravatar}
            defaultSource={require('./img/placeholder.png')}
            source={{uri: this.props.gravatar}}
          />
        </TouchableHighlight>
        <View style={styles.details}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.subTitle}>{this.props.login}</Text>
          <View style={styles.follower}>
            <Image style={styles.followerIcon} source={require('./img/followers-icon.png')} />
            <Text style={styles.followerCount}>{this.props.followers}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.labelKey}>Location :</Text>
            <Text style={styles.labelValue}>{this.props.location}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.labelKey}>Language :</Text>
            <Text style={styles.labelValue}>{this.props.language}</Text>
          </View>
          <View style={styles.label}>
            <Text style={styles.labelKey}>Contributions :</Text>
            <Text style={styles.labelValue}>{this.props.contributions}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  gravatar: {
    height: 150,
    width: 150,
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
  label: {
    height: 35,
    flexDirection: 'row',
  },
  labelKey: {
    fontWeight: 'bold',
  },
  labelValue: {
    marginLeft: 5,
  }
});

export default UserDetailsCard;
