import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './src/navigation/AppNavigator';
import { RestaurantProvider } from './src/store/restaurantStore';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#1A0A00',
    card: '#2C1A10',
    text: '#F5E6D3',
    border: 'rgba(212, 175, 55, 0.2)',
    primary: '#C0392B',
  },
};

export default function App() {
  return (
    <RestaurantProvider>
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <StatusBar style="light" />
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </RestaurantProvider>
  );
}
