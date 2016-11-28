import React, { Component } from 'react';
import {
  NavigationExperimental,
  StyleSheet,
  View,
} from 'react-native';
const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

import { push, pop, selectTab } from './actions/navigation';
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
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderScene(props) {
    const { route } = props.scene;
    if (route.key === 'home') {
     return <Home navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} />
    }
    if (route.key === 'details') {
      return <UserDetails navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} />
    }
    if (route.key === 'gravatar') {
      return <UserGravatar navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} />
    }
    if (route.key === 'about') {
      return <About navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} />
    }
    if (route.key === 'terms') {
      return <WebPage navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} uri="http://www.lipsum.com/" />
    }
    if (route.key === 'privacy') {
      return <WebPage navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} uri="http://www.lipsum.com/" />
    }
    if (route.key === 'contact') {
      return <Contact navigate={this.props.handleNavigate} navigateBack={this.props.handleBackAction} />
    }
  }

  renderHeader(sceneProps) {
    return (
      <AppHeader
        {...sceneProps}
        onNavigateBack={this.props.handleBackAction}
        onMenuPress={() => { this.props.openDrawer(); }}
      />
    );
  }

  render() {
    const {navigation} = this.props;
    const {tabs} = navigation;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = navigation[tabKey];

    return (
      <View style={styles.container}>
        <NavigationCardStack
          key={'stack_' + tabKey}
          navigationState={scenes}
          onNavigateBack={this.props.handleBackAction}
          renderHeader={this.renderHeader}
          renderScene={this.renderScene}
          enableGestures={false}
          style={styles.navigatorCardStack}
          cardStyle={styles.navigatorCardStyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigatorCardStack: {
    flex: 20,
  },
  navigatorCardStyle: {
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  container: {
    flex: 1,
  },
});

export default AppNavigator;
