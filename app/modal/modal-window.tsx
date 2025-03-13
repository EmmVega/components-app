import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ModalScreen = () => {
    return (
        <ThemedView className='justify-center items-center flex-1' bgColor='#A52182'>
            <ThemeText>hOLA SOY UNDMODAL</ThemeText>


            <StatusBar 
                style={Platform.OS === 'ios' ? 'light' : 'auto'}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({})

export default ModalScreen;
