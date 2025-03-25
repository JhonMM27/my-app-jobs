import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home')
        }, 3500)
        return () => clearTimeout(timer)
    },[navigation])

    return (
        <View style={styles.container}>
            <Text>Loading....</Text>
            <Image source={require('../../assets/react.png')} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0ED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    loader: {
        marginTop: 20,
    },
});

export default SplashScreen