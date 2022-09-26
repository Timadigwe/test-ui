import { View, Text, Image, StyleSheet, Alert, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useState} from 'react'
import Header from './Header'
import RhapsaveCard from './RhapsaveCard'

const Rhapsave = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{width: '100%', height: 812}}>
      <Header />
            <View style={{width: '100%', height: 36, top: 40, position: 'absolute', paddingRight: 24, paddingBottom: 4, flexDirection: 'row', alignItems: 'center',}}>
                    <Image
                      style={{ width:24, height: 24, marginTop: 4, marginLeft: 24}}
                      source={require('../assets/back.png')}
                    />
                    <Text style={[styles.text,{ marginLeft: 90, alignItems: 'center'}]}>Create Rhapsave</Text>
            </View>
                <RhapsaveCard />
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{ width: 48, height: 48,padding: 14, top: 580, position:'absolute', marginLeft: 270, borderRadius: 25, backgroundColor: '#F64F00', alignItems: 'center'}}>
                    <Image
                      source={require('../assets/Pen.png')}
                      style={{ width: 20, height: 20}}
                    />
                </TouchableOpacity>
                <Modal
                   animationType="slide"
                   transparent={true}
                   visible={modalVisible}
                   onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                    <ModalView />
                </Modal>
    </View>
  )
}

export default Rhapsave

const ModalView = () => {
  return (
    <View style={{width: '100%', height: 432, position: 'absolute', top: 380, borderTopLeftRadius:30, borderTopRightRadius: 30, backgroundColor: '#FFFFFF' }}>
          <Image 
            source={require('../assets/detail.png')}
            style={{width: 55, height: 5, marginTop: 8, marginLeft: 160}}
          />
          <ScrollView style={{ width: 310, height: 335, marginTop: 24, marginLeft: 24, marginRight: 24, marginBottom: 60}}>
              <View style={{width:270, height:141}}>
                  <Text style={styles.regtext}>Awesome</Text>
                  <Text style={styles.semibold}>What percentage of your income would you like to save?</Text>
              </View> 
              <View style={{width: '100%', height: 30, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.container}>
                        <Text style={styles.medtext}>60%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>70%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>80%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>90%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>100%</Text>
                    </View>
              </View>
              <View style={{width: '100%', height: 30, flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                     <View style={styles.container}>
                        <Text style={styles.medtext}>10%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>20%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8, backgroundColor: '#FE8C00'}]}>
                        <Text style={styles.medtext}>30%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>40%</Text>
                    </View>
                    <View style={[styles.container,{ marginLeft: 8}]}>
                        <Text style={styles.medtext}>50%</Text>
                    </View>
              </View>
          </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
   
    container: {
      width: 58,
       height: 30, 
      borderRadius: 8,
       paddingTop:8,
       paddingBottom:8,
       paddingLeft: 16,
       paddingRight: 16,
       backgroundColor: 'rgba(178, 179, 179, 0.2)'
    },
  
    text: {
        fontFamily: 'PoppinsSemiBold',
        fontStyle:'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        color: '#120A00'
    },
    regtext:{
      fontFamily: 'PoppinsExtraLight',
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 33,
        color: 'rgba(38, 32, 44, 1)'
    },
    semibold: {
      fontFamily: 'PoppinsSemiBold',
        fontStyle:'normal',
        fontWeight: '500',
        fontSize: 22,
        lineHeight: 33,
        color: 'rgba(38, 32, 44, 1)'
    }, 
    medtext:{
      fontFamily: 'PoppinsRegular',
        fontStyle:'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.4,
        color: 'rgba(38, 32, 44, 1)'
    }

})