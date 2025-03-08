import React from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
    className?: string;
}

const ThemedTextInput = ({className, ...rest}: Props) => {
    return (
        <TextInput 
            className='py-4 px-2 text-black dark:text-white'
            placeholderTextColor='grey'
            {...rest}
        />
    );
}

const styles = StyleSheet.create({})

export default ThemedTextInput;
