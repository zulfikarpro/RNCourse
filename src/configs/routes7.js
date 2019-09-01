import {createDrawerNavigator, createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation'

import Home from '../part7/Home'
import List from '../part7/List'

// export const DrawerNavigation = createDrawerNavigator({
//     Home : Home,
//     List : List,
// })

export const TabNavigation = createMaterialTopTabNavigator({
    Home : Home,
    List : List,    
}) 