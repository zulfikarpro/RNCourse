import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Mapbox from '@react-native-mapbox-gl/maps'

Mapbox.setAccessToken('pk.eyJ1IjoiaWpvZWxqZWxlayIsImEiOiJjanp2OGg2bXowZGdqM2ZwOTZ0NHBzZG52In0.T5wRfN2uAT3x0ZD7ScrjUg')

const MapApps = () =>{
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text> test </Text>
                <Mapbox.MapView style={styles.map}>
                <Mapbox.Camera
                zoomLevel={15}
                centerCoordinate={[106.781591, -6.260768]}
                />
                </Mapbox.MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        flex:1
    },
    container:{
        width: "100%",
        height: "100%"
    },
    map:{
        flex:1
    },
    bubleContainer:{
        borderRadius: 30,
        position: 'absolute',
        bottom: 16,
        left: 48,
        right: 48,
        paddingVertical: 16,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      },
})


export default MapApps