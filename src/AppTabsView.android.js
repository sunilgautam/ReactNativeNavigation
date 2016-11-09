'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';

import AppDrawerLayout from './components/AppDrawerLayout';
import MenuItem from './components/MenuItem';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';

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
          selected={this.props.route.key === 'home'}
          onPress={this.onTabSelect.bind(this, 'home')}
          topBorder={true}
        />
        <MenuItem
          title="About"
          selected={this.props.route.key === 'about'}
          onPress={this.onTabSelect.bind(this, 'about')}
        />
        <MenuItem
          title="Contact us"
          selected={this.props.route.key === 'contact'}
          onPress={this.onTabSelect.bind(this, 'contact')}
        />
      </View>
    );
  }

  renderContent() {console.log('===================', this.props.route.key);
    switch (this.props.route.key) {
      case 'home':
        return (
          <Home {...this.props} />
        );

      case 'about':
        return (
          <About {...this.props} />
        );

      case 'contact':
        return (
          <Contact {...this.props} />
        );

    }
    throw new Error(`Unknown tab ${this.props.tab}`);
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
          {this.renderContent()}
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

export default AppTabsView;
