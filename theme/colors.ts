// src/theme/colors.ts
export const palette = {
    // neutrals
    black: '#000000',
    white: '#FFFFFF',
    gray50:  '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
    // brand
    primary50:  '#EFF6FF',
    primary100: '#DBEAFE',
    primary200: '#BFDBFE',
    primary300: '#93C5FD',
    primary400: '#60A5FA',
    primary500: '#3B82F6',
    primary600: '#2563EB',
    primary700: '#1D4ED8',
    primary800: '#1E40AF',
    primary900: '#1E3A8A',
    // feedback
    success500: '#16A34A',
    warning500: '#D97706',
    danger500:  '#DC2626',
  };
  
  export const lightColors = {
    bg:       palette.white,
    fg:       palette.gray900,
    mutedFg:  palette.gray600,
    border:   palette.gray200,
    card:     palette.gray50,
    link:     palette.primary600,
    primary:  palette.primary600,
    primaryFg: palette.white,
    success:  palette.success500,
    warning:  palette.warning500,
    danger:   palette.danger500,
    text:     palette.gray900
  };
  
  export const darkColors = {
    bg:       palette.gray900,
    fg:       palette.gray50,
    mutedFg:  palette.gray300,
    border:   palette.gray700,
    card:     palette.gray800,
    link:     palette.primary300,
    primary:  palette.primary400,
    primaryFg: palette.black,
    success:  palette.success500,
    warning:  palette.warning500,
    danger:   palette.danger500,
    text:     palette.gray50
  };
  