// src/theme/index.ts
import { useColorScheme } from 'react-native';
import { darkColors, lightColors } from './colors';
import { shadow } from './shadows';
import { radii, spacing } from './spacing';
import { fonts, typeScale } from './typography';

export function useTheme() {
  const scheme = useColorScheme();
  const colors = scheme === 'dark' ? darkColors : lightColors;

  return {
    scheme,
    colors,
    spacing,
    radii,
    fonts,
    type: typeScale,
    shadow,
  };
}
