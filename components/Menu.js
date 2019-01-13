/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import { withNavigation } from 'react-navigation';

class Menu extends Component {
  fireButton() {

  }

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Text>I'm the Menu component</Text>
        <Button
          onPress={() => { this.props.navigation.navigate('Links') }}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
});

export default withNavigation(Menu);
