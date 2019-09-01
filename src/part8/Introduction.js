import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Introduction extends Component {

  render() {
    return (
      <View>
        <Text> Introduction </Text>
        <Button
        title={'Ke Halaman Utama'}
        onPress={
            ()=> this.props.navigation.navigate('Home')
        }
        />
      </View>
    );
  }
}
