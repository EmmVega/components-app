import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { useColorScheme } from "nativewind";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSytemTheme: boolean;
    toggleTheme: () => void;
    setSystemTheme: () => void;
}

const ThemeChangerContext = createContext<ThemeChangerContextType>({} as ThemeChangerContextType);

export const useThemeChangerContext = () => {
    const themeChanger = useContext(ThemeChangerContext);

    return themeChanger;
}

export const ThemeChangerProvider = ({children}: PropsWithChildren) => {
    const { colorScheme, setColorScheme } = useColorScheme();

    const [isDarkMode, setisDarkMode] = useState(colorScheme === 'dark');
    const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

    const currentTheme = isSystemThemeEnabled 
    ? colorScheme 
    : (isDarkMode) ? 'dark' : 'light'

    useEffect(() => {
        AsyncStorage.getItem('selected-theme').then((theme) => {
            if (theme) return;
            setisDarkMode(theme === 'dark ');
            setIsSystemThemeEnabled(theme === 'system');
            setColorScheme(theme as 'light' |'dark'|'system')
        })
    }, [])

    return (
        <ThemeProvider
        value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <ThemeChangerContext.Provider
            value={{
                currentTheme: currentTheme ?? 'light',
                isSytemTheme: isSystemThemeEnabled,

                toggleTheme: async () => {
                    setisDarkMode(!isDarkMode);
                    setColorScheme(isDarkMode ? 'light' : 'dark')
                    setIsSystemThemeEnabled(false)

                    await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark')
                },
                setSystemTheme: async () => {
                    setIsSystemThemeEnabled(true);
                    setColorScheme('system');

                    await AsyncStorage.setItem('selected-theme', 'system')

                }
            }}
        >
            {children}
        </ThemeChangerContext.Provider>
      </ThemeProvider>
    )
}