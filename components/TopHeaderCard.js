import { View, Text, Image, StyleSheet} from 'react-native'



const TopHeaderCard = () => {
    return (
        <View style={[styles.container,{position: 'absolute', width: 315, height: 118, top: 145, left: 23, backgroundColor: 'white', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingLeft:16, paddingTop: 19, paddingBottom: 19, paddingRight:49}]}>
            <Image 
              source={require("../assets/pic.png")}
               style={{width: 80, height: 80}}
            />
            <View style={{ marginLeft: 16}}>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.semibigtext}>Abiola Ogunjobi</Text>
                    <Image 
                      source={require("../assets/verifyicon.png")}
                      style={{width: 16, height: 16, marginLeft: 4}}
                     />
                </View>
                <Text style={[styles.lighttext ,{marginTop: 4}]}>Verified</Text>
            </View>
        </View>
    )
}
export default TopHeaderCard

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 8},
        shadowRadius:6
    },
    semibigtext: {
        fontFamily: 'PoppinsSemiBold',
        fontStyle:'normal',
        fontWeight: '600',
        fontSize: 18,
        lineHeight: 27,
    },
    lighttext: {
        fontFamily: 'PoppinsExtraLight',
        fontSize:14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20
    }
})