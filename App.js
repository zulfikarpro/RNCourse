import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }

  AddName = () => {
    this.setState({
      username: 'zul'
    })
  }

  RemoveName = () => {
    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text> */}
        <Button
          title="Solid Button" />
        <Button
          icon={
            <Icon
              name={'arrow-right'}
              size={15}
              color={'white'}
            />}
          title=" kanan"
        />

        <Card>
          <Text>UserName: {this.state.username}</Text>
        </Card>
        <Button
          title="Menambah nama"
          onPress={this.AddName} />

        <Button
          title="Menghapus nama"
          onPress={this.RemoveName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: 'black',
    color: 'white'
  }
});
