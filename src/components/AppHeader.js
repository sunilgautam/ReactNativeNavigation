import React, { Component } from 'react';
import {
  StyleSheet,
  NavigationExperimental,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  I18nManager,
  Platform,
} from 'react-native';
const {
  Header: NavigationHeader,
} = NavigationExperimental;

class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.renderTitleComponent = this.renderTitleComponent.bind(this);
  }

  renderTitleComponent(props) {
    return (
      <NavigationHeader.Title>
        {props.scene.route.title}
      </NavigationHeader.Title>
    );
  }

  renderTitleComponent1(props) {
    return (
      <View style={{backgroundColor: 'red'}}>
        <Text>{props.scene.route.title}Extra</Text>
        <TouchableHighlight
          onPress={() => { console.warn('from header'); }}
        >
        <Image style={{height: 30, width: 30,}} source={require('./img/placeholder.png')} />
        </TouchableHighlight>
      </View>
    );
  }

  renderLeftComponent(props) {
    if (props.scene.index === 0 || !props.onNavigateBack) {
      return (
        <TouchableOpacity style={styles.buttonContainer} onPress={this.props.onMenuPress}>
          <Image style={styles.button} source={require('../components/img/menu-icon.png')} />
        </TouchableOpacity>
      );
    }
    return (
      <NavigationHeader.BackButton
        onPress={props.onNavigateBack}
      />
    );
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderLeftComponent={this.renderLeftComponent.bind(this)}
        renderTitleComponent={this.renderTitleComponent}
      />
    );
  }

}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 24,
    width: 24,
    margin: Platform.OS === 'ios' ? 10 : 16,
    resizeMode: 'contain',
    transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
  }
});

export default AppHeader;
