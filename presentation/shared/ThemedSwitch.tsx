import React from 'react';
import { Platform, Pressable, StyleSheet, Switch, View } from 'react-native';
import ThemeText from './ThemeText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    text?: string;
    value: boolean;
    className?: string;

    onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';
const ThemedSwitch = ({text, value, className, onValueChange}: Props) => {
    const switchActiveColot = useThemeColor({}, 'primary');

    return (
        <Pressable className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}>
            {text ? <ThemeText type='h2'>{text}</ThemeText> : <View/>}
            <Switch value={value} onValueChange={onValueChange}
                thumbColor={isAndroid ? switchActiveColot : ''}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({})

export default ThemedSwitch;
