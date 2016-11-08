import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  WebView,
  ActivityIndicator,
} from 'react-native';

class WebPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        { this.state.loading && <ActivityIndicator style={{ padding: 10, }} /> }
        <WebView
          source={{uri: this.props.uri}}
          style={{}}
          onLoadEnd={() => this.setState({ loading: false })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebPage;
