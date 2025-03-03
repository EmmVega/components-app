import { animationMenuRoutes } from '@/constants/Routes';
import ThemedView from '@/presentation/shared/ThemedView';
import { Href, Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsApp = () => {
    return (
        <ThemedView>
            {animationMenuRoutes.map((route) => (
                <Link href={route.name.split('/')[0] as Href} key={route.name}>
                    {route.title}
                </Link>
            ))}
        </ThemedView>
    );
}

const styles = StyleSheet.create({})

export default ComponentsApp;
