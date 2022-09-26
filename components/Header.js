import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import React from 'react';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';


const Header = () => {
    return (
        <View style={{ backgroundColor: '#FFB531'}}>
           <Svg width="92" height="80" viewBox="0 0 92 88" fill="none">
             <Path
                 d="M82.1325 25.2403C112.314 65 60.5001 108 23.736 75.9208C-1.05531 54.2887 -44.3084 -29.3231 -27.8573 -57.8173C-11.4061 -86.3115 12.0072 -71.3176 44.0001 -79C98.4573 -92.0766 10.2294 -69.4824 82.1325 25.2403Z"
                 fill="url(#paint0_linear_4_29)"
                />
            <Defs>
             <LinearGradient
               id="paint0_linear_4_29"
               x1="116.807"
               y1="-80.7856"
               x2="35.1284"
               y2="60.6867"
               gradientUnits="userSpaceOnUse">
                <Stop offset="1" stopColor="#363ECF" />
                <Stop offset="0" stopColor="#29A4EC" />
              </LinearGradient>
             </Defs>
          </Svg>

            
        </View>    
    )
}
export default Header