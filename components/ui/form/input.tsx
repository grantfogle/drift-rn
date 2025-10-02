import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@/theme';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, type TextInputProps } from 'react-native';
// declare your props
// export type
// let's ad
type Validator = 
    | ((value: string) => string | null)
    | RegExp;

type InputProps = TextInputProps & {
    label: string;
    value: string;
    placeholder: string;
    onChangeText: (v: string) => void;
    required?: boolean;
    validator?: Validator;
    invalidText?: string;
    helpText?: string;
    validateOnChange?: boolean;
    secureToggle?: boolean;
    // password | email | 
    type?: string;
}

export function Input({
    label,
    value,
    placeholder,
    onChangeText,
    required = false,
    validator,
    invalidText,
    helpText,
    type,
    validateOnChange = false,
    secureTextEntry,
    secureToggle = false,
    onBlur,
    style,
    ...inputProps
}: InputProps) {
    const { colors, type: t, spacing } = useTheme();
    const [touched, setTouched] = useState(false);
    const [hidden, setHidden] = useState(!!secureTextEntry);
    const [error, setError] = useState<string | null>(null);

    // we will use validators and type to set validators,
    // password will default, and we will contain more of these elements on this page
    // text, email, password, phone...? other?
    // colors
    // spacing


    // check validation and run validators
    useEffect(() => {
        // where is touched and error coming from...?
        // if (validateOn)
    }, [value]);

    // border color
    const borderColor = error ? colors.danger : colors.border;
    
    // event handlers
    const handleOnChangeText = (v: string) => {
        onChangeText(v);
    }

    return (
        <View style={{ gap: spacing.xs, width: '100%'}}>
            {label && (
                <ThemedText type="caption">
                    {label} {required ? '*' : ''}
                </ThemedText>
            )}
            <View style={[styles.field]}>
                <TextInput 
                    style={{ fontSize: t.body.fontSize, lineHeight: t.body.lineHeight, color: colors.text, paddingVertical: 10 }}
                    value={value} 
                    onChangeText={handleOnChangeText}
                    placeholder={placeholder}
                />
            </View>

            { error ? (
                <ThemedText type="caption" lightColor={colors.danger} darkColor={colors.danger}>
                    {error}
                </ThemedText>       
            ) : helpText ? (
                <ThemedText type="caption" lightColor={colors.mutedFg} darkColor={colors.mutedFg}>
                    {helpText}
                </ThemedText>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 48,
        gap: 10,
        paddingHorizontal: 12
    }
})