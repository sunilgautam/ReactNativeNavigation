import React, { Component } from 'react';
import {
  BackAndroid,
  NavigationExperimental
} from 'react-native';
const {
  CardStack: NavigationCardStack
} = NavigationExperimental;
import { connect } from 'react-redux';

import Home from './containers/Home';
import UserDetails from './containers/UserDetails';
import UserGravatar from './containers/UserGravatar';

class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
    this.handleBackAction = this.handleBackAction.bind(this);
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
     return <Home />
    }
    if (route.key === 'details') {
     return <UserDetails login="weierophinney" />
    }
    if (route.key === 'gravatar') {
     return <UserGravatar login="weierophinney" />
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
        return false
    }
  }

  render() {
    return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        onNavigate={this.handleNavigate.bind(this)}
        renderScene={this.renderScene}
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
