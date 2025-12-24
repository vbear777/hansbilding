import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require('../assets/fonts/Rubik-Bold.ttf'),
    "Rubik-Medium": require('../assets/fonts/Rubik-Medium.ttf'),
    "Rubik-Regular": require('../assets/fonts/Rubik-Regular.ttf'),
    "Rubik-SemiBold": require('../assets/fonts/Rubik-SemiBold.ttf'),
    "BeauRivage": require('../assets/fonts/BeauRivage.ttf'),
    "Kalnia": require('../assets/fonts/Kalnia.ttf'),
    "Kalnia-Bold": require('../assets/fonts/Kalnia-Bold.ttf'),
    "Kalnia-Regular": require('../assets/fonts/Kalnia-Regular.ttf'),
    "BBHBartle": require('../assets/fonts/BBHBartle.ttf'),
    "BBHBogle": require('../assets/fonts/BBHBogle.ttf'),
  })

  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
