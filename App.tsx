import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { HomeScreen } from './src/screens/Home.Screen';
import { colors } from './src/theme/colors';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { MusicScreen } from './src/screens/Music.Screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'), //400
    'Nunito-Bold': require('./assets/fonts/Nunito-SemiBold.ttf'), //600
  });

  const onLayoutRootView = async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style='light' />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <MusicScreen /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark
  },
});
