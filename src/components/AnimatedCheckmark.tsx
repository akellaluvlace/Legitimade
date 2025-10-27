// src/components/AnimatedCheckmark.tsx
import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

export default function AnimatedCheckmark() {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 5,
        friction: 3,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ scale: scaleAnim }, { rotate: rotation }],
        },
      ]}
    >
      <View style={styles.checkmark}>
        <View style={styles.checkmarkStem} />
        <View style={styles.checkmarkKick} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    width: 100,
    height: 100,
    position: 'relative',
  },
  checkmarkStem: {
    position: 'absolute',
    width: 6,
    height: 60,
    backgroundColor: colors.accent,
    left: 50,
    top: 25,
    transform: [{ rotate: '45deg' }],
  },
  checkmarkKick: {
    position: 'absolute',
    width: 6,
    height: 30,
    backgroundColor: colors.accent,
    left: 32,
    top: 43,
    transform: [{ rotate: '-45deg' }],
  },
});
