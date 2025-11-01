// src/screens/LandingScreen.tsx
import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { LandingScreenNavigationProp } from '../types/navigation';
import { colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default function LandingScreen() {
  const navigation = useNavigation<LandingScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Use placeholder if logo not provided */}
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>LegitimaDe</Text>
        </View>
      </View>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Scanner')}
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
      >
        Verify
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: height * 0.1,
  },
  logoPlaceholder: {
    width: width * 0.6,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.accent,
    borderRadius: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.accent,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 25,
    elevation: 5,
  },
  buttonContent: {
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
