import React from 'react'
import {createStackNavigator} from 'react-navigation'

import Home from '../part11/Home'
import InsertData from '../part11/InsertData'
import UpdateData from '../part11/UpdateData'

export const AppNavigation = createStackNavigator({
    Home: Home,
    Insert: InsertData,
    Update: UpdateData
})
