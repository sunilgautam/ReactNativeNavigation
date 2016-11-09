'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';
import { connect } from 'react-redux';

import AppDrawerLayout from './components/AppDrawerLayout';
import MenuItem from './components/MenuItem';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

import AppNavigator from './AppNavigator';

class AppTabsView extends Component {
  constructor(props) {
    super(props);
  }

  onTabSelect(tab) {
    // if (this.props.tab !== tab) {
    //   this.props.onTabSelect(tab);
    // }
    ToastAndroid.show(`${tab} selected`, ToastAndroid.SHORT);
    this.refs.drawer.closeDrawer();
  }

  renderNavigationView() {
    return (
      <View style={styles.drawer}>
        <MenuItem
          title="Home"
          selected={this.props.tab === 'home'}
          onPress={this.onTabSelect.bind(this, 'home')}
          topBorder={true}
        />
        <MenuItem
          title="About"
          selected={this.props.tab === 'about'}
          onPress={this.onTabSelect.bind(this, 'about')}
        />
        <MenuItem
          title="Contact us"
          selected={this.props.tab === 'contact'}
          onPress={this.onTabSelect.bind(this, 'contact')}
        />
      </View>
    );
  }

  openDrawer() {
    this.refs.drawer.openDrawer();
  }

  render() {
    return (
      <AppDrawerLayout
        ref="drawer"
        drawerWidth={290}
        renderNavigationView={this.renderNavigationView.bind(this)}>
        <View style={styles.content} key={this.props.tab}>
          <AppNavigator
            openDrawer={this.openDrawer.bind(this)}
          />
        </View>
      </AppDrawerLayout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    flex: 20,
  },
  content: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    tab: state.navigation.tabs.routes[state.navigation.tabs.index].key,
  }
}

export default connect(mapStateToProps)(AppTabsView);
