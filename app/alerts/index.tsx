import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {text: 'one more?', onPress: () => console.log('OK Pressed')},
      {text: 'one more?', onPress: () => console.log('OK Pressed')},
      {text: 'one more?', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <SafeAreaProvider>
      <ThemedView style={styles.container}>
        <ThemeButton onPress={createTwoButtonAlert} >'2-Button Alert'</ThemeButton>
        <ThemeButton onPress={createThreeButtonAlert} >3-Button Alert</ThemeButton>
      </ThemedView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AlertsScreen;