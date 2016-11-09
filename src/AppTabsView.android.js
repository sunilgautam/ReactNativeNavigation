'use strict';
import React, { Component } from 'react';
import {
  BackAndroid,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { push, pop, selectTab } from './actions/navigation';
import AppDrawerLayout from './components/AppDrawerLayout';
import MenuItem from './components/MenuItem';
import AppNavigator from './AppNavigator';

class AppTabsView extends Component {
  constructor(props) {
    super(props);
    this._handlers = ([]: Array<() => boolean>);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.handleBackAction = this.handleBackAction.bind(this);
    this.addBackButtonListener = this.addBackButtonListener.bind(this);
    this.removeBackButtonListener = this.removeBackButtonListener.bind(this);
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction);
  }

  componentWillUnmount () {
    this._drawer = null;
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction);
  }

  addBackButtonListener(listener) {
    this._handlers.push(listener);
  }

  removeBackButtonListener(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  }

  handleBackAction() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const tabIndex = this.props.navigation.tabs.index;
    const tabKey = this.props.navigation.tabs.routes[tabIndex].key;
    if (this.props.navigation[tabKey].index === 0) {
      // nothing in navigation stack

      if (tabIndex === 0) {
        return false;
      }
      return this.props.changeTab('home');
    }
    this.props.popRoute();
    return true;
  }

  handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true

      case 'back':
      case 'pop':
        return this.handleBackAction();

      default:
        console.warn('Nothing in action');
        return false
    }
  }

  onTabSelect(tab) {
    if (this.props.tab !== tab) {
      this.props.changeTab(tab);
    }
    this._drawer.closeDrawer();
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
    this._drawer.openDrawer();
  }

  render() {
    return (
      <AppDrawerLayout
        ref={(drawer) => { this._drawer = drawer; }}
        drawerWidth={290}
        renderNavigationView={this.renderNavigationView.bind(this)}
        addBackButtonListener={this.addBackButtonListener}
        removeBackButtonListener={this.removeBackButtonListener}
      >
        <View style={styles.content} key={this.props.tab}>
          <AppNavigator
            openDrawer={this.openDrawer.bind(this)}
            handleNavigate={this.handleNavigate}
            handleBackAction={this.handleBackAction}
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
    navigation: state.navigation,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    changeTab: (tabKey) => dispatch(selectTab(tabKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTabsView);
