import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements';

export default class Anak extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.peoples2}
                    keyExtractor={item => item.name}
                    renderItem={
                        ({ item }) =>
                            // <View>
                            //     <Text>{item.name}</Text>
                            //     <Text>{item.status}</Text>
                            // </View>
                            <ListItem
                                title={item.name}
                                subtitle={item.status}
                            />
                    }
                />
            </View>
        )
    }
}
