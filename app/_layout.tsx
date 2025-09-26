import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { useFonts } from 'expo-font';

export const unstable_settings = {
  anchor: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter: require('@/assets/fonts/Inter-VariableFont.ttf'),
    OpenSans: require('@/assets/fonts/OpenSans-VariableFont.ttf'),
    Montserrat: require('@/assets/fonts/Montserrat-VariableFont.ttf'),
  });
  const colorScheme = useColorScheme();

  //Preload fonts and assets etc.
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setTimeout(() => {
  //         console.log("This runs after 2 seconds!");
  //       }, 2000); 
  //     } finally {
  //       setReady(true);
  //     }
  //   })();
  // }, []);

  const onLayout = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{flex: 1}} onLayout={onLayout}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
