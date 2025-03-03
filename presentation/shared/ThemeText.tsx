import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'bold' | 'link';

interface Props extends TextProps {
    clssName?: string;
    type?: TextType;
}

const ThemeText = ({className, type, ...rest}: Props) => {
    return (
        <Text  
            className={[
                'text-light-primary dark:text-dark-text',
                type === 'normal' ? 'font-normal' : '', 
                type === 'h1' ? 'text-3xl' : '', 
                type === 'h2' ? 'text-xl' : '', 
                type === 'semi-bold' ? 'font-semibold' : '', 
                type ===  'link' ? 'font-normal underline' : '',
                className
            ].join(' ')}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({})

export default ThemeText;
