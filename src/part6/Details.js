import React, { Component } from 'react';
import { View, Text } from 'react-native';

const Details = (props) =>{
    return (
        <View>
          <Text> Hello {props.navigation.getParam('Name')} </Text>
        </View>
      )
    }



export default Details 

