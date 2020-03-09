import React, { Component } from 'react'
import { View } from 'native-base'

import Register from './register'
class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Register />
            </View>
        )
    }
}

export default App
