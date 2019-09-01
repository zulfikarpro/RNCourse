import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {

    static navigationOptions = ({navigation}) => ({
        // tabBarVisible:false
    })

  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button
            title={'ke child page'}
            onPress={() => this.props.navigation.navigate('Home1')}
            />
      </View>
    );
  }
}
