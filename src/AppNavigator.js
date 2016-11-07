import React, { Component } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
} from 'react-native';
const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;
import { connect } from 'react-redux';

import { push, pop } from './actions/navigation';
import AppHeader from './components/AppHeader';
import Home from './containers/Home';
import UserDetails from './containers/UserDetails';
import UserGravatar from './containers/UserGravatar';
import About from './containers/About';
import WebPage from './containers/WebPage';
import Contact from './containers/Contact';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.handleBackAction = this.handleBackAction.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction)
  }

  renderScene(props) {
    const { route } = props.scene;
    if (route.key === 'home') {
     return <Home navigate={this.handleNavigate} navigateBack={this.handleBackAction} />
    }
    if (route.key === 'details') {
     return <UserDetails navigate={this.handleNavigate} navigateBack={this.handleBackAction} />
    }
    if (route.key === 'gravatar') {
     return <UserGravatar navigate={this.handleNavigate} navigateBack={this.handleBackAction} />
    }
    if (route.key === 'about') {
     return <About navigate={this.handleNavigate} navigateBack={this.handleBackAction} />
    }
    if (route.key === 'terms') {
     return <WebPage navigate={this.handleNavigate} navigateBack={this.handleBackAction} uri="https://omle.co/app/terms" />
    }
    if (route.key === 'privacy') {
     return <WebPage navigate={this.handleNavigate} navigateBack={this.handleBackAction} uri="https://omle.co/app/privacy" />
    }
    if (route.key === 'contact') {
     return <Contact navigate={this.handleNavigate} navigateBack={this.handleBackAction} />
    }
  }

  handleBackAction() {
    if (this.props.navigation.index === 0) {
      // nothing in navigation stack
      return false;
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

  renderHeader(sceneProps) {
    return (
      <AppHeader
        {...sceneProps}
        onNavigateBack={this.handleBackAction}
      />
    );
  }

  render() {
    const {navigation} = this.props;
    const {tabs} = navigation;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = navigation[tabKey];

    return (
      <NavigationCardStack
        key={'stack_' + tabKey}
        navigationState={scenes}
        onNavigate={this.handleNavigate}
        onNavigateBack={this.handleBackAction}
        renderHeader={this.renderHeader}
        renderScene={this.renderScene}
        enableGestures={false}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pushRoute: (route) => dispatch(push(route)),
    popRoute: () => dispatch(pop()),
    changeTab: (tabKey) => dispatch(selectTab(tabKey)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
