import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-gifted-charts";
import { LinearGradient } from 'expo-linear-gradient';

const linearGradient = (
  <LinearGradient colors={['rgba(255, 73, 6, 1)', 'rgba(255, 139, 96, 1)', 'rgba(255, 166, 133, 1)']} />
)

const RhapsaveCard = () => {
  const pieData = [
    {value: 40, color: '#F64F00'},
    {value: 40, color: '#F64F00'},
    {value: 30, color: '#F5AF19'},
    {value: 20, color: '#FFB531'},
    {value: 15, color: 'rgba(255, 181, 49, 0.52)'},
   
  ]
  return (
    <View style={[styles.shadowProp,{width: 315, height: 148, position: 'absolute', top: 116, left: 24, backgroundColor:'#FFFFFF', borderRadius: 8 }]}>
       <View style={{flexDirection: 'row', alignItems: 'center'}}>   
            <View style={{ width: 178, height: 69, marginTop: 22, marginLeft: 16}}>
                    <Text style={styles.semiboldtext}>Rhapsave Savings</Text>
                    <Text style={styles.boldtext}>N1,000,000</Text>
                    <Text style={styles.text}>Save automatically towards a several goals.</Text>
            </View>
            <View style={{ width: 80, height: 80}}>
               <PieChart 
                 data={pieData}
                 radius={40}
                 donut
                 strokeWidth={2}
                 strokeColor={'white'}
               />
            </View>
        </View>   
        <View style={{ width: 280, height: 12, marginLeft: 16, marginTop: 13, flexDirection: 'row', alignItems: 'center',}}>
              <View style={{ width: 8, height: 8, backgroundColor: '#FFB531', borderRadius: 5}}/>
              <Text style={[styles.text, { marginLeft:4}]}>Car Savings</Text>
              <View style={{ width: 8, height: 8, backgroundColor: '#FF9D78', borderRadius: 5, marginLeft:4}}/>
              <Text style={[styles.text, { marginLeft:4}]}>Mortage Savings</Text>
              <View style={{ width: 8, height: 8, backgroundColor: '#F64F00', borderRadius: 5, marginLeft:4}}/>
              <Text style={[styles.text, { marginLeft:4}]}>School Fees</Text>
              <View style={{ width: 8, height: 8, backgroundColor: '#FFB531', borderRadius: 5, marginLeft:4}}/>
              <Text style={[styles.text, { marginLeft:4}]}>Christmas Savings</Text>
        </View>
        <View style={{ width: 208, height: 12, marginLeft: 55, marginTop: 8, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{ width: 8, height: 8, backgroundColor: '#FFB531', borderRadius: 5}}/>
              <Text style={[styles.text, { marginLeft:4}]}>Car Savings</Text>
              <View style={{ width: 8, height: 8, backgroundColor: '#FF9D78', borderRadius: 5, marginLeft:4}}/>
              <Text style={[styles.text, { marginLeft:4}]}>Mortage Savings</Text>
              <View style={{ width: 8, height: 8, backgroundColor: '#F64F00', borderRadius: 5, marginLeft:4}}/>
              <Text style={[styles.text, { marginLeft:4}]}>School Fees</Text>
        </View>
    </View>
  )
}

export default RhapsaveCard

  const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: 'rgba(0, 24, 71, 0.12)',
        shadowOffset: {width: -8, height: 24},
        shadowOpacity: 0,
        shadowRadius: 0,
      },
      boldtext: {
        fontFamily: 'PoppinsBold',
        fontStyle:'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 36,
        color: '#1C1939'
    },
        semiboldtext: {
            fontFamily: 'PoppinsSemiBold',
            fontStyle:'normal',
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 18,
            color: '#484848'
        },
        text: {
            fontFamily: 'PoppinsRegular',
            fontStyle:'normal',
            fontWeight: '400',
            fontSize: 8,
            lineHeight: 12,
            color: '#484848'
        }
        
      
})