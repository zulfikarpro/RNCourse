import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

export default class Tugas1 extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.ctRight}>
            <Text style={styles.baseText}> Nama: </Text>
            <Text style={styles.baseText}> Alamat: </Text>
          </View>
          <View style={styles.ctLeft}>
            <Text style={styles.baseText}> Muhammad Zulfikar</Text>
            <Text style={styles.baseText}> JL.Selamat</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: 'red',
    backgroundColor: 'yellow',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'purple',
    textAlign: 'center'
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  ctRight: {
    width: '50%'
  },
  ctLeft: {
    width: '50%'
  }
});
