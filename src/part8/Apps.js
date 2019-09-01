import '../configs/fixTime'
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createAppContainer, Header} from 'react-navigation'


// import {DrawerNavigation} from '../../src/configs/routes7'
// import {BottomTabNavigation} from '../../src/configs/routes7'
import {AppNavigation} from '../../src/configs/routes8'

const NavPage = createAppContainer(AppNavigation)
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