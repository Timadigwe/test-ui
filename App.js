
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Rhapsave from './components/Rhapsave';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false}} >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Rhapsave" component={Rhapsave} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
 
