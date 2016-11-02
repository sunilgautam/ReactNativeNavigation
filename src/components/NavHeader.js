'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight,
} from 'react-native';

const NavHeader = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="#BEBEBE"
        barStyle="default"
      />
      <View style={styles.subContainer}>
        <TouchableHighlight
          onPress={() => {  }}
          style={styles.leftButton}
          activeOpacity={0.8}
          underlayColor="#d9d9d9"
        >
          <Image
            source={require('./img/back.png')}
          />
        </TouchableHighlight>
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    height: 56,
    elevation: 4,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftButton: {
    margin: 16
  },
  title: {
    fontSize: 20,
    color: '#212121',
    fontWeight: '400',
    flex: 1,
  },
});

export default NavHeader;
