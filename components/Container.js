/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';
import Background from './Background';
import Menu from './Menu';
import Footer from './Footer';

export default class Container extends Component {
  render() {

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/tlo.jpg')} style={{width: '100%', height: '100%'}}>
          <Menu />
          {this.props.children}
          <Footer />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
