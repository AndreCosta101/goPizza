import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts, DMSans_400Regular} from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';

import {  View } from 'react-native';


export default function App() {

  const [ fontsLoaded ] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  if(!fontsLoaded) return <AppLoading />

  return (
    <View>

    </View>
  );
}

