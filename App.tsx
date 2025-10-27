// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { colors } from './src/constants/colors';

export default function App() {
  const theme = {
    colors: {
      primary: colors.accent,
      background: colors.primary,
      surface: colors.secondary,
      text: colors.text,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="light" />
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}