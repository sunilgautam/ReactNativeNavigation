import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import AppNavigator from './AppNavigator';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor="#BEBEBE"
          barStyle="default"
        />
        <AppNavigator />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
