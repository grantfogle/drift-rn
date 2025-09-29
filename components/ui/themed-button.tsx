import { useTheme } from '@/theme';
import {
  Pressable,
  StyleSheet,
  View,
  type PressableProps,
  type ViewStyle
} from 'react-native';
import { ThemedText } from '../themed-text';

export type ThemedButtonProps = PressableProps & {
    title?: string;
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'form';
    color?: 'default' | 'primary' | 'secondary';
    size? : 'default' | 'large' | 'small';
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    // also don't need this
    iconPosition?: 'left' | 'right';
    // prolly don't need these
    weight?: 'regular' | 'medium' | 'semibold' | 'bold';
    family?: 'default' | 'brand' | 'ui';
    contentStyle?: ViewStyle;
}

export function ThemedButton({
    style,
    title,
    disabled,
    // why isn't this being passed by chat...?
    lightColor,
    darkColor,
    type = 'default',
    color = 'default',
    size = 'default',
    leadingIcon,
    trailingIcon,
    iconPosition = 'left',
    weight = 'regular',
    family = 'ui',
    contentStyle,
    accessibilityLabel,
    ...pressableProps
}: ThemedButtonProps) {
    const { colors, spacing, radii, type: t} = useTheme();

    const sizeMap = {
        small:   { height: 40, padH: 14, gap: 8,   text: t.small },
        default: { height: 48, padH: 16, gap: 10,  text: t.body  },
        large:   { height: 56, padH: 18, gap: 12,  text: t.h3    },
      } as const;
    const S = sizeMap[size];

    const variantMap = {
        default: {
          bg: colors.success,
          border: colors.border,
          text: colors.text,
          pressedBg: '#00000010', // light press overlay
        },
        primary: {
          bg: colors.primary,
          border: 'transparent',
          text: colors.bg,
          pressedBg: '#ffffff20',
        },
        secondary: {
          bg: colors.bg,
          border: colors.border,
          text: colors.text,
          pressedBg: '#ffffff10',
        },
      } as const;
    const V = variantMap[color];

    const base = {
        height: S.height,
        paddingHorizontal: S.padH,
        borderRadius: radii.md ?? 12,
        borderWidth: 1,
        borderColor: V.border,
        backgroundColor: V.bg,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      } as const;
      
    const fullWidth = type === 'form';
    const leftIcon = iconPosition  === 'left' ? leadingIcon : leadingIcon;
    const rightIcon = iconPosition === 'right' ? (trailingIcon ?? null) : trailingIcon;

    return (
        <Pressable 
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel || title}
            disabled={disabled}
            // TODO: what is hitslop...?
            hitSlop={8}
            style={({pressed}) => [
                base,
                fullWidth && { alignSelf: 'stretch' },
                disabled && { opacity: 0.5 },
                style as any,
                pressed && { opacity: 0.96 },
            ]}
            {...pressableProps}
            >
                <View style={[styles.row, {gap: S.gap}, contentStyle]}>
                    {leftIcon ? <View>{leftIcon}</View> : null}
                    {(title) && (
                        <ThemedText
                            type={size == 'large' ? 'subtitle' : 'body'}
                            family={family}
                            weight={weight}
                            lightColor={V.text}
                            darkColor={V.text}
                            style={{ fontSize: S.text.fontSize, lineHeight: S.text.lineHeight }}
                        >
                            {title}
                        </ThemedText>
                    )}
                    {rightIcon ? <View>{rightIcon}</View> : null }
                </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 44, // touch target
    },
  });