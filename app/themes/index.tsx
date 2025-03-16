import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text,  } from 'react-native';
// import { useColorScheme } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useThemeChangerContext } from '@/presentation/context/ThemeChangerContext';

const ThemesScreen = () => {
  // const theme = useColorScheme();
  const  { toggleTheme, currentTheme, setSystemTheme, isSytemTheme } = useThemeChangerContext();
  // const { colorScheme, setColorScheme } = useColorScheme();
  const [darkModeSettings, setDarkModeSettings] = useState({
    // darkMode: theme === 'dark',
    darkMode: currentTheme === 'dark',
    systemMode: isSytemTheme,
  })
  
  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? 'dark' : 'light')
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  }
  const setSystemMode = (value: boolean) => {
    if(value) {
      setSystemTheme();
    }
    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value
    })
  }
  return (
    <ThemedView margin>
      <ThemeCard className='mt-5'>
        <ThemedSwitch
          text='dark mode'
          className='mb-5' 
          value={darkModeSettings.darkMode} 
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text='system mode'
          className='mb-5' 
          value={darkModeSettings.systemMode} 
          onValueChange={setSystemMode}        
          />
      </ThemeCard>
    </ThemedView>
  );
};
export default ThemesScreen;
