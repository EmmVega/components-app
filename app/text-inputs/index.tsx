import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemeText from '@/presentation/shared/ThemeText';
import { useState } from 'react';
import { View, Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'height' : undefined}>
      <ScrollView>
        <TextInput placeholder='Nombre completo'
          autoCapitalize='words'
          autoCorrect={false}
          onChangeText={(text) => setForm({...form, name: text})}/>
      <ThemedView>
        <ThemeCard className='mb-5'>
        <ThemedTextInput 
          placeholder='Nombre completo'
          autoCapitalize='words'
          autoCorrect={false}
          onChangeText={(text) => setForm({...form, name: text})}
        />
        <ThemedTextInput 
          placeholder='correo electronico'
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={(text) => setForm({...form, email: text})}
        />
        <ThemedTextInput 
          placeholder='telefono'
          autoCorrect={false}
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
          onChangeText={(text) => setForm({...form, phone: text})}
        />
        </ThemeCard>
        <ThemeCard className='mt-2'>
          <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
        </ThemeCard>
        <ThemeCard className='mt-2'>
          <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
        </ThemeCard>
        <ThemeCard className='mt-2'>
          <ThemeText>{JSON.stringify(form, null, 2)}</ThemeText>
        </ThemeCard>
      </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
