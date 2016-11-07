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
     return <UserGravatar navigate={this.handleNavigate} navigateBack={this.handleBackAction} login="weierophinney" />
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
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
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
    popRoute: () => dispatch(pop())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
