import React, { useRef } from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';

const UseAnimation = () => {
const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = ({ duration = 300, toValue = 1, useNativeDriver = true, easing = Easing.linear, cb = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing
    }).start(cb);
  }

  const fadeOut = ({ duration = 300, toValue = 0, useNativeDriver = true, easing = Easing.ease,  cb = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing
    }).start(cb);
  }

  const startMovingTopPosition = ({ initialPosition = -100, duration = 300, toValue = 1, useNativeDriver = true, easing = Easing.ease,  cb = () => {}}) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
        toValue,
        duration,
        useNativeDriver,
        easing,
      }).start();
  }
    
    return {
        animatedOpacity,
        animatedTop,
        // methods
        fadeIn,
        fadeOut,
        startMovingTopPosition
    }
}

const styles = StyleSheet.create({})

export default UseAnimation;
