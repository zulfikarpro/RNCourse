
//import useState
import React, { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'
import {card} from 'react-native-elements'

const componentName = () => {
  //getter, setter di java
  let [getData, setData] = useState([])


  // async, tau kan async??
  const loadData = async() =>{
    try {
      let getAPI = await fetch('https://facebook.github.io/react-native/movies.json')
      let dataAPI = await getAPI.json()

      setData(dataAPI)
      console.warn(data)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    loadData()
    //return di delete
  }, [setData])

  return (
    <View>
      <FlatList
        data={getData.movies}
        keyExtractor={(item)=>item.id}
        renderItem={
          ({item})=>
            <View >
              <Text>Judul: {item.title} </Text>
            </View>
        }
      />
    </View>
  )
}
export default componentName;
