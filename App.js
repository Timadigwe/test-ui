import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font'
import HomeHeader from './components/HomeHeader'
import { NativeBaseProvider } from 'native-base';
Z

export default function App() {
  const [loaded] = useFonts({
      PoppinsBold: require("./assets/Poppins/Poppins-Bold.ttf"),
      PoppinsSemiBold: require("./assets/Poppins/Poppins-SemiBold.ttf"),
      PoppinsMedium: require("./assets/Poppins/Poppins-Medium.ttf"),
      PoppinsRegular: require("./assets/Poppins/Poppins-Regular.ttf"),
      PoppinsLight: require("./assets/Poppins/Poppins-Light.ttf"),
      PoppinsExtraLight: require("./assets/Poppins/Poppins-ExtraLight.ttf"),
      Nonito: require("./assets/Nunito/static/Nunito-Regular.ttf")
  });
  if(!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" backgroundColor="" />
{/**         <View style={{ backgroundColor: "#F9C70C", width: "100%", height: 200, flexDirection: 'row', justifyContent:"space-between", alignItems: 'center'}}>
            <View style={{width: 40, height: 40, backgroundColor: "#FFFFFF", borderRadius: 20, paddingTop:12, marginLeft: 20, alignItems:"center"}}>
               <Image source={require("./assets/Shape.png")} style={{ marginTop: 3}}/>
               <Image source={require("./assets/Shape.png")} style={{ marginTop: 3}}/>
               <Image source={require("./assets/Shape.png")} style={{ marginTop: 3}}/>
            </View>
            <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor:"#FFFFFF", alignItems: 'center' ,paddingTop: 12, marginRight: 20 }}>
               <Image  source={require("./assets/Notification.png")} resizeMode="contain" />
            </View>
  </View> **/}
          <HomeHeader />
        <View style={{ width: 328, height: 118, padding:10, backgroundColor: "#FFFFFF", top: 145,position: 'absolute', marginLeft: 16, borderRadius: 12, flexDirection: 'row', alignItem:'center'}}>
            <Image source={require("./assets/img2.png")} resizemode="contain"
             style={{width: 80, height: 80, borderRadius: 40}}
            />
            <View style={{marginLeft: 8}}>
                <View style={{flexDirection:"row", alignItems: 'center', marginTop: 10,}}>
                  <Text style={styles.bigtext}>Abiola Ogunjobi</Text>
                  <Image 
                   source={require("./assets/verifyicon.png")}
                    style={{ marginLeft: 3}}
                  />
                </View>
                <Text style={[styles.lighttext, {marginTop: 5}]}>Verified</Text>
            </View>
        </View>
            <ScrollView style={{marginTop: 90}}>
                <Card imgUrl={require('./assets/safe.png')} text={'Security'} />
                <Card imgUrl={require('./assets/card.png')} text={'Cards'} />
                <Card imgUrl={require('./assets/not.png')} text={'Notifications'} />
                <Card imgUrl={require('./assets/card.png')} text={'Live Support'} />
                <Card imgUrl={require('./assets/card.png')} text={'About Us'} />
                <Card imgUrl={require('./assets/card.png')} text={'Contact Us'} />
                <Card imgUrl={require('./assets/card.png')} text={'Terms $ Privacy Policy'} />
            </ScrollView>
            <NavBar />
      </SafeAreaView>
    </NativeBaseProvider>  
  );
}

const NavBar = () => {
  return (
      <View style={{ width: 375, height: 80,backgroundColor: '#FFFFFF', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Image source={require('./assets/home-2.png')} style={{ width: 22, height: 22}} />
            <Image source={require('./assets/empty-wallet-change.png')} style={{width: 22, height: 22}}  />
            <Image source={require('./assets/empty-wallet-time.png')} style={{width: 22, height: 22}}  />
            <View style={{ width: 99, height: 48, borderRadius: 12, backgroundColor: 'rgba(246, 79, 0, 0.1)', padding: 8, flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('./assets/profile.png')} style={{ width: 22, height: 22}}  />
              <Text style={[styles.regtextNonito,{ marginLeft: 8}]}>Profile</Text>
            </View>
      </View>
  )
}

const Card = ({imgUrl, text}) => {
  return (
  <View style={{ width: 328, height: 56, borderRadius: 8, backgroundColor: '#FFFFFF',  marginLeft: 15, marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image 
        source={imgUrl} style={{ marginLeft: 10}}
       />
    
      <Text style={[styles.regtext, { fontWeight:'500', fontSize: 14, marginLeft: 10}]}>{text}</Text>
     </View>
      <Image source={require('./assets/Path.png')}   style={{marginRight: 10}}/>
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // #F5F5F5
  },
  bigtext: {
    fontFamily: 'PoppinsSemiBold',
    fontStyle: 'normal', 
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: ' #120A00'

  },
  regtext: {
    fontFamily: 'PoppinsRegular',
    fontStyle: 'normal', 
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: ' #120A00'

  },
  lighttext : {
    fontFamily: 'PoppinsExtraLight',
    fontStyle: 'normal', 
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: ' #B2B3B3'
  },
  regtextNonito: {
    fontFamily: 'Nonito',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19, 
    color: '#F64F00'
  }
});
