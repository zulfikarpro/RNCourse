import React, { useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Mapbox from '@react-native-mapbox-gl/maps'
import { url } from 'inspector';

Mapbox.setAccessToken('pk.eyJ1IjoiaWpvZWxqZWxlayIsImEiOiJjanp2OGg2bXowZGdqM2ZwOTZ0NHBzZG52In0.T5wRfN2uAT3x0ZD7ScrjUg')


const getLatLong = () => {


    const [longitude, setLongitude] = useState()
    const [latitude, setLatitude] = useState()

    const onPressMap = (event) => {
        const { geometry } = event

        setLatitude(geometry.coordinates[1])
        setLongitude(geometry.coordinates[0])
    }

    const renderMarker = () => {
        const item = []

        for (let i = 0; i < Listcoordinates.length; i++) {
            let id = `pointAnnotation${i}`
            let title = `longitude : ${Listcoordinates[i], [0]}, Latitude : ${Listcoordinates[i], [1]}`
            item.push(
                <Mapbox.PointAnnotation
                    key={id}
                    id={id}
                    title={title}
                    coordinate={Listcoordinates[i]}

                >
                    {/* <Image source={require('../assets/img/point.png')}
                        style={Styles.marker}
                    /> */}
                </Mapbox.PointAnnotation>
            )

        }
        return item
    }

    const Listcoordinates = [
        [-73.98330688476561, 40.76975180901395],
        [-73.96682739257812, 40.761560925502806],
        [-74.00751113891602, 40.746346606483826],
        [-73.95343780517578, 40.7849607714286],
        [-73.99017333984375, 40.71135347314246],
        [-73.98880004882812, 40.758960433915284],
        [-73.96064758300781, 40.718379593199494],
        [-73.95172119140624, 40.82731951134558],
        [-73.9829635620117, 40.769101775774935],
        [-73.9822769165039, 40.76273111352534],
        [-73.98571014404297, 40.748947591479705]
    ]


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
                        centerCoordinate={Listcoordinates[0]}
                    />
                    {renderMarker()}
                </Mapbox.MapView>
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
    marker: {
        flex: 1,
        resizeMode: 'contain',
        width: 25,
        height: 25

    }
})

export default getLatLong