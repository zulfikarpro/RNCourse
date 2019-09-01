import {createStackNavigator} from 'react-navigation'

import Home from '../part6/Home'
import Detail from '../part6/Details'

export const Apps = createStackNavigator({
    Main : {screen: Home},
    Detail : {screen: Detail}
})