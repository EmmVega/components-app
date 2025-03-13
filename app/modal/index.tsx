import ThemeButton from '@/presentation/shared/ThemeButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { Link, router } from 'expo-router';
import { View, Text } from 'react-native';

const ModalScreen = () => {
  return (
   <ThemedView>
    <Link
      asChild
      href="/modal/modal-window"
      className='mx-4'
    >
      <Text className='text-light-text dark:text-dark-text my-2 text-xl'> Abrir modal</Text>
    </Link>
    <ThemeButton onPress={() => router.push('/modal/modal-window')}>
      Abrir modal
    </ThemeButton>

   </ThemedView>
  );
};
export default ModalScreen;
