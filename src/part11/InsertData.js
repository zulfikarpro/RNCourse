import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Button,
    TextInput,
    Alert
} from 'react-native'

import {db} from '../configs/firebase' // memanggil config firebase

const InsertData = (props) =>{
    const [name,setName] = useState("")

    const Submit = () =>{
        db.ref('/data').push({
            name: name
        })
        Alert.alert(name+", data anda sudah di masukkan")
    }

    return(
        <View style={styles.container}>
            <TextInput
            placeholder={"Silahkan isi nama"}
            onChangeText={value=>setName(value)}/>
            <Button
            title={"Submit nama"}
            onPress={Submit}
            />
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:15
    }
})


export default InsertData