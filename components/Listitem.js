import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const forward = require('../assets/forward.png');

const Listitem = ({image, text}) => {
  return (
   <View style={{  width: 310, height: 56, marginLeft: 24, marginBottom:8, paddingTop:16, paddingBottom:16, paddingLeft: 12, paddingRight: 12, borderRadius: 8, backgroundColor: '#FFFFFF',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
     <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={image} style={{width: 24, height: 24}} />
        <Text style={[ styles.regtext,{ marginLeft: 11.08}]}>{text}</Text>
      </View> 
        <Image source={forward} style={{ width: 16, height: 16}}/>
    </View>
  )
}


export default Listitem
const styles = StyleSheet.create({
    regtext: {
        fontFamily: 'PoppinsRegular',
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 20,
        color: '#484848'
    }
})