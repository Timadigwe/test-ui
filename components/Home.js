
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import HomeHeader from '../components/HomeHeader'
import TopHeaderCard from '../components/TopHeaderCard'
import Listitem from '../components/Listitem';
import menuList from '../menuList';
import Menu from '../components/Menu'


const Home = ({navigation}) => {
  return (
    <View>
    <StatusBar />
      <HomeHeader />
      <View style={{width: 375, height: 40, position: 'absolute', top: 40, flexDirection: 'row', alignItems: 'center',}}>
          <View style={{width: 40, height: 40, backgroundColor: '#FFFFFF', borderRadius: 20, marginLeft: 24,}}>
              <Image 
                 source={require("../assets/menuBar.png")}
                 style={{width:20, height: 20, position: 'absolute', top: 10, left: 10}}
              />
          </View>
          <View style={{width: 40, height: 40, backgroundColor: '#FFFFFF', borderRadius: 20, marginLeft: 238 }}>
              <Image 
                source={require("../assets/Notification.png")}
                style={{width: 16.67, height: 16.67, position: 'absolute', top: 11.67, left: 10}}
              />
          </View>
      </View>
        <View style={{width:"100%", height: 98, backgroundColor: "#F9F9F9", shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 8},
        shadowRadius:6}}>
        </View>
      <TopHeaderCard />
      <ScrollView style={{ position: 'absolute', width: '100%', height: 280, top: 287,marginBottom:100, backgroundColor: '#F9F9F9'}}>
          {menuList.map(({image, text}) => (
            <Listitem key={text} image={image} text={text} />
          ))}
      </ScrollView>
            <Menu navigation={navigation} />
  </View>
  )
}

export default Home;