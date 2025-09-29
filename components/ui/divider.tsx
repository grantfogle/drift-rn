
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

type DividerProps = {
    label?: string;
    thickness?: number;
    color: string;
}

export default function Divider({
    label,
    thickness,
    color
}: DividerProps) {
    // const lineColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');
    // const {colors} = useTheme();

    const lineStyle = [
        styles.line,
        {
            borderBottomColor: color,
            borderBottomWidth: thickness ? thickness : 1
        }
    ]

    // const labelStyle = [
    //     styles.label,
    //     {
    //         color: 
    //     }
    // ]
    // const lineStyle = [
    //     styles.line,
    //     {
    //         height: 1,
    //         width: '100%'
    //         borderBottomWidth: thickness,
    //         borderBottomColor: lineColor,
    //         borderStyle: 'solid'
    //     }
    // ] as const;

    if (!label) {
        return (
            <View style={styles.row}>
                <View style={styles.line} accessibilityElementsHidden importantForAccessibility="no" />
            </View>
        );
    }

    return (
        <View style={styles.row}>
            <View style={[lineStyle]} />
            <ThemedText 
                style={styles.label}
                lightColor={color}
                darkColor={color}
                type="caption">{label}</ThemedText>
            <View style={[lineStyle]} />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // import spacing from themes
        paddingVertical: 8,
    },
    line: {
        // width: '100%',
        // borderBottomWidth: 1,
        flex: 1,
    },
    label: {
        paddingHorizontal: 4,
    }
})