import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Mapbox from '@react-native-mapbox-gl/maps'

Mapbox.setAccessToken('pk.eyJ1IjoiaWpvZWxqZWxlayIsImEiOiJjanp2OGg2bXowZGdqM2ZwOTZ0NHBzZG52In0.T5wRfN2uAT3x0ZD7ScrjUg')


const getLatLong = () => {

    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()

    const onPressMap = (event) => {
        const { geometry } = event

        //array [1] dan [0] mandatory
        setLatitude(geometry.coordinates[1])
        setLongitude(geometry.coordinates[0])
    }

    const renderBubble = () => {
        return (
            <View style={Styles.bubbleContent}>
                <Text>Lat: {latitude}</Text>
                <Text>Long: {longitude}</Text>
            </View>
        )
    }
    return (
        <View style={Styles.page}>
            <View style={Styles.container}>
                <Text>title</Text>
                <Mapbox.MapView
                    style={Styles.map}
                    //parameter "e" dilempar ke function onpressmap as event parameter
                    // contoh di java function(e);
                    // private void function(String e){};
                    onPress={e => onPressMap(e)}>
                    <Mapbox.Camera
                        zoomLevel={12}
                        centerCoordinate={[106.827221, -6.175525]}
                    />
                </Mapbox.MapView>
                {renderBubble()}
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    map: {
        flex: 1
    },
    page: {
        flex: 1
    },
    bubbleContent: {
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

export default getLatLong