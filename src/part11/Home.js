import React, {useState,useEffect} from 'react';
import {View, StyleSheet,FlatList} from 'react-native';
import {Button,Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'

import {db} from '../configs/firebase'

const Home = (props) =>{
    const [data, setData] = useState ([])

    useEffect(() => {
    let dataF = []
    db.ref('data').on('value', snapshoot=>{
        console.warn(snapshoot)
        snapshoot.forEach(child=>{
            dataF.push({
                key: child.key,
                name: child.val().name
            })
        })
        
    setData(dataF)
    })  
    // console.warn(dataF)
    }, [setData])

    const deleteItems = (key)=>{
        db.ref('/data/'+key).remove()
    }
    return(
        <View style={styles.container}>
            <Button
            title={"masukkan data"}
            onPress={()=>props.navigation.navigate('Insert')}
            style={styles.button}/>
            <FlatList
            data={data}
            keyExtractor={(item)=> item.key}
            renderItem={({item})=>
            <Card
            title={item.name}>
                <Button
                icon={
                    <Icon
                    name="delete"
                    size={15}
                    color='white'/>
                }
                buttonStyle={{backgroundColor:'red'}}
                title='Delete'
                onPress={()=>deleteItems(item.key)}
                />
                <Button
                icon={
                    <Icon
                    name="edit"
                    size={15}
                    color='white'/>
                }
                buttonStyle={{backgroundColor:'cyan'}}
                title='Edit'
                onPress={()=>props.navigation.navigate('Update', {key: item.key, name: item.name})}
                />
            </Card>
            }/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    },
    button:{
        marginBottom:15
    }
}) 


Home.navigationOptions = {
    title: "Home"
}   

export default Home