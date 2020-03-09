import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Image,
    Button,
    Alert,
} from 'react-native';


const Register = () => {
    const BASE_URL = 'https://us-central1-one-time-password-97c1f.cloudfunctions.net'
    const [userName, setUserName] = useState('');
    const [data, setData] = useState('')
    const [uid, setUid] = useState('')
    const [jsons, setJsons] = useState('')
    const [nama, setnama] = useState('')
    var phone
    var namaVerifikasi
    // const Login = () => {
    //     axios.post(`${BASE_URL}/createUser`, {
    //         phone: {userName}
    //     }).then(() => {
    //         axios.post(`${BASE_URL}/requestOtp`, { phone: userName })
    //     })
    // };

    const Register = async () => {

        fetch('https://us-central1-one-time-password-97c1f.cloudfunctions.net/createUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    phone: userName,
                    nama: nama
                    //   secondParam: 'yourOtherValue',
                }
            ),
        }).then(response => {
            if (response.ok) {
                return console.log('response ok'),
                    response.json().then(json => {
                        Alert.alert('selamat ' + nama + ', pendaftaran anda telah berhasil')
                        console.log(json)
                    })
            }
            else {
                // console.log(response.json)
                return console.log(response.statusText)

            }
        }).catch(error => console.log(error))


        // pinch.fetch('https://us-central1-one-time-password-97c1f.cloudfunctions.net/createUser', {
        //     method: 'post',
        //       headers: { customHeader: 'content-type' },
        //     body: '{ "phone": ' + userName + '}',
        //     timeoutInterval: 10000 // timeout after 10 seconds
        // })
        //     .then(res => console.log(`We got your response! Response - ${res.bodystring}`))
        //     .catch(err => console.log(`Whoopsy doodle! Error - ${err}`))

        // try {
        // axios.post(`https://us-central1-one-time-password-97c1f.cloudfunctions.net/createUser`, { phone: userName })
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        // const response = axios.post('https://us-central1-one-time-password-97c1f.cloudfunctions.net/createUser', { headers: { 'Content-Type': 'application/json' } },
        //     {
        //         phone: userName
        //     });
        // console.log('👉 Returned data:', response);
        // await axios.post(`${BASE_URL}/requestOtp`, {
        //     phone: { userName }
        // })
        // } catch (fuction(err)) {
        //     console.log(err)
        // console.warn(err)
        // }
    };

    // useEffect(() => {
    //     console.log("phone", uid);
    //     // fetchFunc();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios(`${BASE_URL}/createUser`, {
    //             phone: { userName }
    //         });
    //         setData(result.data)
    //     };
    //     fetchData();
    // }, [data]);

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 72, marginVertical: 70 }}>LOGO</Text>
            <TextInput
                id="nomor hp"
                style={styles.textBox}
                value={userName}
                onChangeText={setUserName}
                underlineColorAndroid={'grey'}
                placeholder="No. Hp"></TextInput>
            {/* <TextInput
                id="input2"
                style={styles.textBox}
                secureTextEntry={false}
                value={nama}
                onChangeText={setnama}
                underlineColorAndroid={'grey'}
                placeholder="Nama Lengkap"></TextInput> */}
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Button
                    style={{ marginTop: 50 }}
                    title="Register"
                    underlineColorAndroid={'red'}
                    onPress={
                        () => Register()

                        //   Alert.alert(
                        //     'username : ' + userName + '\r\n' + ' password: ' + password,
                        //   )
                    }></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        borderColor: 'red',
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        width: 300,
        marginBottom: 20,
    },
    password: {
        width: 300,
    },
});

export default Register;
