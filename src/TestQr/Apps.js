import React, { Component, setState } from 'react'
import { Text, View, TextInput, Button, Image, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { } from 'react-native'

// import { hoki } from '../assets/Hoki';




const abc = (props) => {

    handleFocus = event => {
        props.setSta
    }

    handleEmail = text => {
        this.setState({ email: text });
    };
    handlePassword = text => {
        this.setState({ password: text });
    };
    login = (email, pass) => {
        Alert.alert('email: ' + email + ' password: ' + pass);
    };


    return (
        <View
            style={{ flex: 1, backgroundColor: '#194351' }}
        >

            <View
                style={styles.row}
            >
            </View>
            {/* 
            <Image
                style={{ alignSelf: 'center' }}
                // style={{ width: 100, height: 100 }}
                // source={hoki} 
                source={require('../assets/Hoki/hoki.png')}
            />
 */}
            <View
                style={styles.row}
            >
            </View>


            <View style={{ flexDirection: 'column', flex: 0, marginHorizontal: 60 }}>
                <TextInput style={{ color: 'white' }}
                    placeholder="username"
                    placeholderTextColor='grey'
                    underlineColorAndroid={'grey'}
                    onChangeText={() => this.handleEmail}
                // style={styles.aligncenter}
                >
                </TextInput>
                <TextInput style={{ color: 'white' }}
                    placeholder="password"
                    placeholderTextColor='grey'
                    secureTextEntry={true}
                    underlineColorAndroid={'grey'}
                    onChangeText={() => this.handlePassword}
                // style={styles.aligncenter}
                >
                </TextInput>
            </View>
            <View
                style={styles.row}
            >
            </View>
            <View style={{ height: '6%', flexDirection: 'row', flex: 0, alignContent: 'center' }}>
                <View
                    style={{ flex: 1 }}>
                </View>
                <View style={{ flex: 2, flexDirection: 'column' }}>

                    <TouchableOpacity
                        style={{
                            borderRadius: 12, height: '100%', width: '100%', backgroundColor: '#424C50', alignContent: 'center',
                            alignItems: "center", justifyContent: "center"
                        }}
                        // onPress={() => { this.login(this.state.email, this.state.password) }}
                        onPress={() => Alert.alert("woyooo")}
                    >
                        <Text style={{ alignContent: 'center', color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{ flex: 1 }}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    button1: {
        width: 40,
        color: 'red'
    },

    row: {
        height: '10%'
    },
    aligncenter: {
        alignContent: 'center',
        alignItems: 'center'
    }

})


export default abc