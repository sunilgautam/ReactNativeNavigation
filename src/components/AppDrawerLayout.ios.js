'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import DrawerIOS from 'react-native-drawer';

class AppDrawerLayout extends Component {
  constructor(props) {
    super(props);

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  render() {
    return (
      <DrawerIOS
        ref={(drawer) => { this._drawer = drawer; }}
        type="displace"
        content={this.props.renderNavigationView()}
        tapToClose={true}
        openDrawerOffset={0.2}
        captureGestures={true}
        panOpenMask={20}
        tweenHandler={(ratio) => ({
          main: {
            opacity: 1,
          },
          mainOverlay: {
            opacity: ratio / 2,
            backgroundColor: 'black',
          },
        })}
        styles={{
          drawer: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }
        }}
      >
        {this.props.children}
      </DrawerIOS>
    );
  }

  componentWillUnmount() {
    this._drawer = null;
  }

  closeDrawer() {
    this._drawer && this._drawer.close();
  }

  openDrawer() {
    this._drawer && this._drawer.open();
  }
}

export default AppDrawerLayout;
