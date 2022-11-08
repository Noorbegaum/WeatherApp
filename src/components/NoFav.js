import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NoFav = (props) => {
  return (
    <View style={styles.imageContainer}>
    <Image
      source={require('../assets/images/icon_nothing.png')}
      style={styles.nothing}
    />
    <Text style={styles.nofavText}>{`No ${props.type}`}</Text>
  </View>
  )
}

export default NoFav

const styles = StyleSheet.create({
    nothing:{
        height: 84,
        width: 159,
      },
      imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      nofavText:{
        height: 21,
        width: 166,
        color: '#FFFFFF',
        fontSize: 18,
        letterSpacing: 0,
        lineHeight: 21,
        textAlign: 'center',
        marginTop:25,
      }
})