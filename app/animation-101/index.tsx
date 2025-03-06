import UseAnimation from '@/hooks/useAnimation';
import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

const Animation101Screen = () => {
  const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = UseAnimation();

  return (
    <ThemedView margin className='items-center justify-center flex-1'>

    <Animated.View 
      className='bg-light-secondary dark:bg-dark-secondary rounded-xl'
      style={{
        width: 150,
        height: 150,
        opacity: animatedOpacity,
        transform: [{translateY: animatedTop}]
      }}
    />
      <ThemeButton 
      onPress={() => {
        fadeIn({});
        startMovingTopPosition({easing: Easing.bounce, duration: 700})
      }}
      className='mb-5'
      >
        Fadein
      </ThemeButton>

      <ThemeButton 
      onPress={() => {
        fadeOut({});
      }}
      className='mb-5'
      >
        FadeOut
      </ThemeButton>
    </ThemedView>
  );
};
export default Animation101Screen;
