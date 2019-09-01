import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CommponentAnak from './Anak';
export default class Induk extends Component {
  constructor() {
    super();

    this.state = {
      peoples: [
        {
          name: 'Obi Wan',
          status: 'Jedi'
        },
        {
          name: 'Luke Skywalker',
          status: 'padawan'
        }
      ]
    };
  }

  render() {
    return (
      <View>
        <CommponentAnak peoples2={this.state.peoples} />
      </View>
    );
  }
}
