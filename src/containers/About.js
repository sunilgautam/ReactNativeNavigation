import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class About extends Component {

  constructor(props) {
    super(props);
    this.routeTerms = {
      type: 'push',
      route: {
        key: 'terms',
        title: 'Terms of Service',
      }
    };
    this.routePrivacy = {
      type: 'push',
      route: {
        key: 'privacy',
        title: 'Privacy Policy',
      }
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigate(this.routeTerms)}>
          <Text style={styles.listItemText}>Terms of Service</Text>
          <Image style={styles.listItemImage} source={require('../components/img/right-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem} onPress={() => this.props.navigate(this.routePrivacy)}>
          <Text style={styles.listItemText}>Privacy Policy</Text>
          <Image style={styles.listItemImage} source={require('../components/img/right-icon.png')} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#333333',
  },
  listItemText: {
    fontSize: 18,
  },
  listItemImage: {
    tintColor: '#333333',
    right: 0,
    position: 'absolute',
  },
});

export default About;
