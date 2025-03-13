import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

const ModalLayout = () => {
    return (
        <Stack
         screenOptions={{
            headerShown: false
         }}
        >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modal-window"
          options={{
            presentation: 'modal',
          }}
        />
      </Stack>
    );
}

const styles = StyleSheet.create({})

export default ModalLayout;
