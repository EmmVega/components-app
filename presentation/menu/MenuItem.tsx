import { Href, router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ThemeText from '../shared/ThemeText';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
    name: string;
    isFirst?: boolean;
    isLast?: boolean;
}

const MenuItem = ({title, icon, name, isFirst, isLast}: Props) => {
    const [routeName] = name.split('/');
    const primaryColor = useThemeColor({}, 'primary');
    return (
      <Pressable 
        onPress={(() => router.push(routeName as Href))} 
        className='bg-white dark:bg-black/15 px-5 py-y2'
        style={{
            ...(isFirst && {
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                paddingTop: 10,
            }),
            ...(isLast && {
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                paddingTop: 10,
            })
        }}
        >
            <View className='flex-row items-center'>
                <Ionicons name={icon} size={30} color={primaryColor} className='mr-5' />
                <ThemeText className='h2'>{title}</ThemeText>
            </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({})

export default MenuItem;
