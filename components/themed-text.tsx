import { useThemeColor } from '@/hooks/use-theme-color';
import { useTheme } from '@/theme';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'subtitle' | 'body' | 'link' | 'caption';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  family?: 'default' | 'brand' | 'ui';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  weight = 'regular',
  family = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const { type: t, fonts, colors } = useTheme();

  const presetByType = {
    default: t.body,
    body: t.body,
    title: t.h1,
    subtitle: t.h3,
    caption: t.small,
    link: t.body
  } as const;

  const preset = presetByType[type] ?? t.body; // <- fallback
  // TODO what does using as const do?

  const weightMap = {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  } as const;

  const baseStyle = {
    color: type === 'link' ? colors.primary : color,
    fontFamily: fonts[family],
    fontSize: preset.fontSize,
    lineHeight: preset.lineHeight,
    // letterSpacing: presetByType[type].letterSpacing ?? 0,
    fontWeight: weightMap[weight],
  } as const;

  return (
    <Text style={[baseStyle, type === 'link' && styles.linkReset, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  linkReset: {
    textDecorationLine: 'underline'
  }
});
