import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  NavigationExperimental,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

class Playground extends Component {

  _renderTitleComponent(props: Object): React.Element {
    return (
      <NavigationHeader.Title>
        Hello world
      </NavigationHeader.Title>
    );
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }
}

export default Playground;
