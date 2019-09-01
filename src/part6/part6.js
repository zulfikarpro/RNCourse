import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createAppContainer, Header} from 'react-navigation'

import {Apps} from '../../src/configs/routes'

const NavPage = createAppContainer(Apps)
export default class AppNav extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <NavPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
