import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, StyleSheet, View } from 'react-native';
import UseAnimation from '@/hooks/useAnimation';

interface Props {
    uri: string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { animatedOpacity, fadeIn } = UseAnimation();
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {isLoading && 
            <ActivityIndicator 
                style={{
                    position: 'absolute'
                }}
                color='grey'
                size={30}
            />
            }

            <Animated.Image 
                source={{uri}}
                style={[ style, {opacity: animatedOpacity}  ]}
                onLoadEnd={() => {
                    fadeIn({});
                    setIsLoading(false);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default FadeInImage;
