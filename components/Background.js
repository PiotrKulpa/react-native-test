/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default class Background extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/images/tlo.jpg')} style={{width: '100%', height: '100%'}}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
