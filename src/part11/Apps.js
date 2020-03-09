import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createAppContainer, Header} from 'react-navigation'

import {AppNavigation} from '../../src/configs/routes11'

const AppRouter = createAppContainer(AppNavigation)

const App = () => {
    return(
        <View style={styles.containerApp}>
            <AppRouter/>
            </View>
    )
}

const styles = StyleSheet.create({
    containerApp:{
        flex:1
    }
})



export default App