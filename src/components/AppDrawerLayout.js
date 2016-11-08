'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  DrawerLayoutAndroid,
} from 'react-native';

class AppDrawerLayout extends Component {
  constructor(props, context) {
    super(props, context);

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerOpen = this.onDrawerOpen.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  render() {
    const {...props} = this.props;
    return (
      <DrawerLayoutAndroid
        drawerBackgroundColor="rgba(152, 145, 255, 1)"
        style={{ top: 0, }}
        ref={(drawer) => { this._drawer = drawer; }}
        {...props}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        onDrawerOpen={this.onDrawerOpen}
        onDrawerClose={this.onDrawerClose}>
      </DrawerLayoutAndroid>
    );
  }

  componentWillUnmount() {
    // this.context.removeBackButtonListener(this.handleBackButton);
    this._drawer = null;
  }

  handleBackButton() {
    this.closeDrawer();
    return true;
  }

  onDrawerOpen() {
    // this.context.addBackButtonListener(this.handleBackButton);
    this.props.onDrawerOpen && this.props.onDrawerOpen();
  }

  onDrawerClose() {
    // this.context.removeBackButtonListener(this.handleBackButton);
    this.props.onDrawerClose && this.props.onDrawerClose();
  }

  closeDrawer() {
    this._drawer && this._drawer.closeDrawer();
  }

  openDrawer() {
    this._drawer && this._drawer.openDrawer();
  }
}

AppDrawerLayout.contextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

export default AppDrawerLayout;
