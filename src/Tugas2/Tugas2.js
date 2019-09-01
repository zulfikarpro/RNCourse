import React, { Component,useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import CommponentAnak from './Tugas2Anak';
import { Button } from 'react-native-elements';
export default class Induk extends Component {
  constructor() {
    super();

    this.state = {
      peoples: [
        {
          name: '',
          status: ''
        }
        // {
        //   name: 'Luke Skywalker',
        //   status: 'padawan'
        // }
      ],
      nama: '',
      hobi: ''
    };
  }

  handleName = text => {
    this.setState({ peoples: [{ name: text }] });
  };
  handleHobi = text => {
    this.setState({ peoples: [{ hobi: text }] });
  };

  submit = (nama, hobi) => {
    alert('Nama: ' + nama + ' Hobi: ' + hobi);
  };
  AddName = () => {
    this.setState({
      username: 'zul'
    });
  };

  render() {
    return (
      <View>
        <TextInput onChangeText={this.handleName} placeholder="nama" />
        <TextInput onChangeText={this.handleHobi} placeholder="hobi" />
        <Button
          title="button1"
          onPress={() => this.submit(this.state.nama, this.state.hobi)}
        />
        <CommponentAnak peoples2={this.state.peoples} />
      </View>
    );
  }
}
