import React, { Component } from 'react';
import { View, Text } from 'react-native';

const login = () => {


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


export default login
