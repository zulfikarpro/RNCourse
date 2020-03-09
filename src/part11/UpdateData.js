import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    Button,
    TextInput,
    Alert,
    Text
} from 'react-native'


import {db} from '../configs/firebase' // memanggil config firebase

const UpdateData = (props) => {
    const [name,setName] = useState("")

    const Submit = () =>{
        db.ref('/data/'+props.navigation.getParam('key')).update({
            name: name
        })
        Alert.alert(name+", data anda sudah di masukkan")
    }

    return(
        <View style={styles.container}>
            <Text>Edit nama</Text>
            <TextInput
            placeholder={props.navigation.getParam('name')}
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

export default UpdateData