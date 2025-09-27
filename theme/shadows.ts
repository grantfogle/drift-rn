// src/theme/shadows.ts
import { Platform } from 'react-native';

export const shadow = (elevation = 2) =>
  Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: Math.ceil(elevation / 2) },
      shadowOpacity: 0.15,
      shadowRadius: elevation,
    },
    android: { elevation },
    default: {},
  });
