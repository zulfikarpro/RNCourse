import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Header } from 'react-native-elements';

const Home = (props) =>{
  return (
    <View>
      <Text> App </Text>
      <Button
          title={"Ke halaman Berikutnya!"}
          onPress={() => props.navigation.navigate('Detail', {"Name": "yohaaaa"})}
      />
    </View>
  )
}

Home.navigationOptions = {
  title: 'tes'
}

export default Home
