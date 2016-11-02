'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor="#BEBEBE"
        barStyle="default"
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>
          Home
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
  title: {
    fontSize: 20,
    color: '#212121',
    fontWeight: '400',
  },
});

export default Header;
