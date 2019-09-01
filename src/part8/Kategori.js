import React, { useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';

import {db} from '../configs/firebase'

const Kategori = () =>{

  let param = db.ref('items') 
  const [data,setData] = useState() 

  useEffect(() => {
    param.on('value', snapshot=>{
      let dataS = snapshot.val()
      let items = Object.values(dataS)
      setData(items)
      console.warn(items)
      
    })
  }, [setData])

  return(
    <View>
      <FlatList
      data={data}
      keyExtractor={(item)=> item.name}
      renderItem={({item})=>
      <View>
        <Text>
          {item.name}
          </Text>
      </View>
      }
      />
      </View>
    )
}

export default Kategori