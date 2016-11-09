'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { selectTab } from './actions/navigation';
import AppDrawerLayout from './components/AppDrawerLayout';
import MenuItem from './components/MenuItem';
import AppNavigator from './AppNavigator';

class AppTabsView extends Component {
  constructor(props) {
    super(props);
  }

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.changeTab(tab);
    }
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

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (tabKey) => dispatch(selectTab(tabKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTabsView);
