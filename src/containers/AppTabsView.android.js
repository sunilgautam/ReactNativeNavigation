'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';

import Drawer from 'react-native-drawer';

import AppDrawerLayout from '../components/AppDrawerLayout';
import MenuItem from '../components/MenuItem';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const ControlPanel = () => {
  return (
      <View style={styles.drawer}>
        <MenuItem
          title="Home"
          topBorder={true}
        />
        <MenuItem
          title="About"
        />
        <MenuItem
          title="Contact us"
        />
      </View>
    );
}

class AppTabsView extends Component {
  constructor(props) {
    super(props);
  }

  closeControlPanel = () => {
    this._drawer.close()
  };

  openDrawer = () => {
    this._drawer.open()
  };

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

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="displace"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.2}
        styles={drawerStyles}
        captureGestures={true}
        panOpenMask={20}
      >
        {this.renderContent()}
      </Drawer>
    );
  }
}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 1, shadowRadius: 3},
  main: {paddingLeft: 3},
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    flex: 0.5,
  },
  content: {
    flex: 1,
  },
});

export default AppTabsView;
