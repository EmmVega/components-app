import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';

interface Props extends PressableProps{
    className?: string;
    children: string;
}

const ThemeButton = ({className, onPress, children, ...rest}: Props) => {
    return (
        <Pressable
        onPress={onPress}
        className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
        {...rest}
        >
            <Text className='text-white text-2xl'>{children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default ThemeButton;
