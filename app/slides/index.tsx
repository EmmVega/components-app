import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { View, Text, ImageSourcePropType, FlatList, Image, useWindowDimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';


interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const flatlistRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false)

  const onScroll = (event:  NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width );
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0)
  }

  const scrollToSlide = (index: number) => {
    if (!flatlistRef.current) return;

    flatlistRef.current.scrollToIndex({
      index: index,
      animated: true
    })

    if(index === items.length - 1) setIsScrollEnabled(true)
  } 

  return (
    <ThemedView>
      <FlatList 
        ref={flatlistRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => <SlideItem item={item}/>}
        horizontal
        pagingEnabled
        scrollEnabled={isScrollEnabled}
        onScroll={onScroll}
      />
      {
        (currentSlideIndex !== items.length -1 ) ? (
          <ThemeButton
          className='absolute bottom-10 right-5 w-[150px]'
          onPress={() => scrollToSlide(currentSlideIndex + 1)}
          >
            Siguiente
          </ThemeButton>
        ) 
        : (
          <ThemeButton
          className='absolute bottom-10 right-5 w-[150px]'
          onPress={() => router.dismiss()}
         >
           Finalizar
         </ThemeButton>
        )
      }
    </ThemedView>
  );
};
export default SlidesScreen;

interface Props {
  item: Slide;
}

const SlideItem = ({item}: Props) => {

  const {width} = useWindowDimensions();
  const {title, desc, img} = item;
  return (
    <ThemedView
      className="flex-1 rounded p-10 justify-center bd-red-500"
      style={{ width}}
    >
      <Image 
        source={item.img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <ThemeText
        type='h1'
        className='text-light-primary dark:text-dark-primary'
      >
        {title}
      </ThemeText>
      <ThemeText
        className='mt-10'
      >
        {desc}
      </ThemeText>
    </ThemedView>
  )
}