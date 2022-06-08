import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
      navigation.replace('Home')
  },900)
    return (
    // <View>
      <ImageBackground style={{flex:1 , height:"100%", width:"100%",}} source={require('../assets/splashScreen.jpg')}>

      </ImageBackground>
    // </View>
  )
}

const styles = StyleSheet.create({

})

export default SplashScreen