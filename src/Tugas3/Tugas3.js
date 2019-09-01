import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import {Image, Card, Avatar, Header, Footer} from 'react-native-elements'
// import { Row, Footer } from 'native-base';

const componentName = () => {
    //getter, setter di java
    let [getData, setData] = useState([])
  
  
    // async, tau kan async??
    const loadData = async() =>{
      try {
        let getAPI = await fetch('https://my-json-server.typicode.com/zulfikarpro/db/film')
        // let getAPI = await fetch('https://facebook.github.io/react-native/movies.json')
        let dataAPI = await getAPI.json()
  
        setData(dataAPI)
        console.warn(dataAPI)
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
        <Header 
          centerComponent={{ text: 'Film', style: { flex:1, color: 'white', fontSize: 24} }}/>
        <FlatList style={{marginBottom: 120}}
          data={getData}
          keyExtractor={(item)=>item.id}
          renderItem={
            ({item})=>
              <View style={{flex: 1, flexDirection: 'column', marginBottom:12}}>
                <Card style={{marginVertical: 4, borderRadius:12}}>
                  <View style={{flex:1,flexDirection:'row', borderRadius:12}}>
                    <Image style={styles.imageStyle}
                    source={{uri:item.poster}}></Image>
                    <View style={{flex:1, flexDirection:'column', marginStart: 16}}>
                      <Text style={styles.titleStyle}>{item.judul} </Text>
                      <Text>Tahun : {item.tahun}</Text>
                      <Text>Jumlah Penonton : {item.penonton}</Text>
                    </View>
                  </View>
                </Card>
              </View>
          }
        />
      </View>
    )
  }


  const styles = StyleSheet.create({
    imageStyle :{
      height : 140,
      width : 120
    },
    titleStyle :{
      paddingStart: 8,
      marginBottom:4,
      fontSize: 20,
      color: 'black',
      backgroundColor: '#FFF768',
      borderRadius: 8
    }

  });

  export default componentName;
