import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        <Text style={styles.color1}>H</Text>
        <Text style={styles.color2}>e</Text>
        <Text style={styles.color3}>l</Text>
        <Text style={styles.color4}>l</Text>
        <Text style={styles.color5}>o</Text>
      </Text>
      <Text style={styles.small}>demo@demo.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6ECEB',
  },
  big: {
    fontSize: 72,
  },
  small: {
    fontSize: 14,
  },
  color1: {
    color: '#FD8D8B',
  },
  color2: {
    color: '#756684',
  },
  color3: {
    color: '#1EA7B3',
  },
  color4: {
    color: '#4BD89C',
  },
  color5: {
    color: '#F765B8',
  },
});

export default Contact;
