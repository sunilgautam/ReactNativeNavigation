'use strict';
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class MenuItem extends Component {
  render() {
    var topBorderStyle = this.props.topBorder && styles.topBorder;
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <View style={[styles.wrapper, topBorderStyle]}>
            <Text style={[styles.title]}>
              {this.props.title}
            </Text>
            <Image source={require('./img/right-icon.png')} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    
  },
  wrapper: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    marginLeft: 30,
    marginRight: 30,
  },
  topBorder: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  icon: {
    marginRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
});

export default MenuItem;
