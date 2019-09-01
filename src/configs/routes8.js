import React from 'react'
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createDrawerNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
// ini single page
import Introduction from '../part8/Introduction'

// beberapa screen akan dijadikan single page
import Home from '../part8/Home' 
import Home1 from '../part8/Home1'

import Akun from '../part8/Akun'
import Akun1 from '../part8/Akun1'

import Kategori from '../part8/Kategori'
import Kategori1 from '../part8/Kategori1'

const HomePage = createStackNavigator ({
    Home: Home,
    Home1: Home1,
})

HomePage.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    if(navigation.state.index>0){
            tabBarVisible = false;
    }
    return{
        tabBarVisible
    }
}

const AkunPage = createStackNavigator({
    Akun: Akun,
    Akun1: Akun1,
})

const KategoriPage = createStackNavigator({
    Kategori: Kategori,
    Kategori1: Kategori1,
})

export const BottomNav = createBottomTabNavigator({
    Home: {screen: HomePage,
    navigationOptions:{
        tabBarIcon: ({tintColor, focused}) => (
            <Icon name="home" size={focused? 28:22} color={tintColor}/>
        ),
    }
},
    Kategori: {screen: KategoriPage,
        navigationOptions:{
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="appstore-o" size={focused? 28:22} color={tintColor}/>
            )
        }
    },
    // Akun: {screen: AkunPage,
    //     navigationOptions:{
    //         tabBarIcon: ({tintColor, focused}) => (
    //             <Icon name="user" size={focused? 28:20} color={tintColor}/>
    //         )
    //     }
    // },
},
    {
        tabBarOptions:{
            activeTintColor: 'red',
            style:{
                paddingBottom: 5,
                backgroundColor: 'yellow'
            }
        }   
    }
)

export const AppNavigation = createSwitchNavigator({
    // Introduction: Introduction,
    Home: BottomNav,
})

export const DrawerNavigation = createDrawerNavigator({
    Introduction: Introduction,
    Main: BottomNav,
})