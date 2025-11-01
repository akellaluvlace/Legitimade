// src/screens/ResultScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Linking, Alert, Animated } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ResultScreenRouteProp, ResultScreenNavigationProp } from '../types/navigation';
import { colors } from '../constants/colors';
import { config } from '../constants/config';

const { width, height } = Dimensions.get('window');

export default function ResultScreen() {
  const route = useRoute<ResultScreenRouteProp>();
  const navigation = useNavigation<ResultScreenNavigationProp>();
  const [checkmarkAnimation] = useState(new Animated.Value(0));
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    // Start animations
    Animated.sequence([
      Animated.timing(checkmarkAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleTrackJourney = async () => {
    try {
      const supported = await Linking.canOpenURL(config.SOLANA_TX_URL);
      if (supported) {
        await Linking.openURL(config.SOLANA_TX_URL);
      } else {
        Alert.alert('Error', 'Cannot open blockchain explorer');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open blockchain explorer');
    }
  };

  const checkmarkScale = checkmarkAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1.2, 1],
  });

  return (
    <View style={styles.container}>
      {/* Main Content - 80% */}
      <View style={styles.mainContent}>
        <Animated.View
          style={[
            styles.checkmarkContainer,
            {
              transform: [{ scale: checkmarkScale }],
            },
          ]}
        >
          <View style={styles.checkmarkCircle}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
        </Animated.View>

        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: fadeAnimation,
            },
          ]}
        >
          <Text style={styles.genuineText}>Product is Genuine</Text>
          <Text style={styles.subText}>Verified on blockchain</Text>
        </Animated.View>
      </View>

      {/* Bottom Section - 20% */}
      <Animated.View
        style={[
          styles.bottomSection,
          {
            opacity: fadeAnimation,
          },
        ]}
      >
        <Button
          mode="text"
          onPress={handleTrackJourney}
          style={styles.trackButton}
          labelStyle={styles.trackButtonLabel}
          icon="link"
        >
          Track my Journey
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Landing')}
          style={styles.scanAnotherButton}
          labelStyle={styles.scanAnotherButtonLabel}
        >
          Scan Another Product
        </Button>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  mainContent: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  checkmarkContainer: {
    marginBottom: 40,
  },
  checkmarkCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.accent,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  checkmark: {
    fontSize: 80,
    color: colors.primary,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
  },
  genuineText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottomSection: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  trackButton: {
    marginBottom: 10,
  },
  trackButtonLabel: {
    color: colors.accent,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  scanAnotherButton: {
    borderColor: colors.textSecondary,
    borderWidth: 1,
  },
  scanAnotherButtonLabel: {
    color: colors.textSecondary,
    fontSize: 14,
  },
});
