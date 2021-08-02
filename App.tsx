import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {NativeBaseProvider} from 'native-base';
import FirstComp from './MyComponents/activityset';
import SecondComp from './MyComponents/session';
import ThirdComp from './MyComponents/plan';
import Thirdwhy from './MyComponents/planwhy';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
       <Thirdwhy/>
       </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
/*
 <Navigation colorScheme={colorScheme} />
        <StatusBar />
        */