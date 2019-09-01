import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Button,
  TextInput,
  Alert
} from 'react-native';

import {db} from "../configs/firebase"

const Home = () =>{
  
  const [nama,setname] = useState("")
  const [profesi,setprofesi] = useState("")
  
  const InputDB = (item,profesi) =>{
    db.ref('/items').push({
      name: item,
      profesi: profesi
    })
  }

  const ButtonHandler = ()=>{
    if(nama===""){Alert.alert("Masukkan nama anda")}
    else{
    InputDB(nama,profesi)
    Alert.alert("Data atas nama "+nama+" sudah di masukkan")
  }
  }

  return(
    <View>
        <TextInput
        onChangeText = {value=>setname(value)}
        placeholder = {"Masukkan nama"}
        />
        <TextInput
        onChangeText = {value=>setprofesi(value)}
        placeholder = {"Masukkan pekerjaan"}
        />
        <Button
        title={"Masukkan Data"}
        onPress={ButtonHandler}
        />
      </View>
  )
}

export default Home