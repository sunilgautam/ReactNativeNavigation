'use strict';
import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
} from 'react-native';

class AppDrawerLayout extends Component {
  constructor(props) {
    super(props);

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerOpen = this.onDrawerOpen.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={(drawer) => { this._drawer = drawer; }}
        drawerBackgroundColor="rgba(255, 255, 255, 1)"
        drawerWidth={290}
        renderNavigationView={this.props.renderNavigationView}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        onDrawerOpen={this.onDrawerOpen}
        onDrawerClose={this.onDrawerClose}
        drawerLockMode={this.props.drawerLockMode}
      >
        {this.props.children}
      </DrawerLayoutAndroid>
    );
  }

  componentWillUnmount() {
    this.props.removeBackButtonListener(this.handleBackButton);
    this._drawer = null;
  }

  handleBackButton() {
    this.closeDrawer();
    return true;
  }

  onDrawerOpen() {
    this.props.addBackButtonListener(this.handleBackButton);
    this.props.onDrawerOpen && this.props.onDrawerOpen();
  }

  onDrawerClose() {
    this.props.removeBackButtonListener(this.handleBackButton);
    this.props.onDrawerClose && this.props.onDrawerClose();
  }

  closeDrawer() {
    this._drawer && this._drawer.closeDrawer();
  }

  openDrawer() {
    this._drawer && this._drawer.openDrawer();
  }
}

AppDrawerLayout.propTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

export default AppDrawerLayout;
