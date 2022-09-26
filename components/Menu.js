import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Menu = ({navigation}) => {
  return (
    <View style={{ width: '100%', height: 80, top: 260, paddingTop:16, paddingBottom:16, paddingLeft:12, paddingRight:4, backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Rhapsave')}>
                <Image source={require('../assets/home-2.png')} style={{width: 24, height: 24}} />
            </TouchableOpacity>    
            <Image source={require('../assets/empty-wallet-change.png')} style={{width: 24, height: 24}} />
            <Image source={require('../assets/empty-wallet-time.png')} style={{width: 24, height: 24}}/>
            <View style={{flexDirection: 'row', alignItems:'center',width: 99, height: 48, padding: 12,borderRadius:12,  backgroundColor:'rgba(246, 79, 0, 0.1)'}}>
                <Image source={require('../assets/profile.png')}  style={{width: 24, height: 24}} />
                <Text style={[ styles.text,{marginLeft: 8}]}>Profile</Text>
            </View>
    </View>
  )
}

export default Menu
const styles = StyleSheet.create({
    text: {
        fontFamily: 'Nonito',
        fontStyle:'normal',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 19,
        color: '#F64F00'
    }
})