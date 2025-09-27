import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ThemedButton } from '@/components/ui/themed-button';
import { useAuth } from '@/providers/auth';
import { useTheme } from '@/theme';
import { router } from 'expo-router';

export default function SignInScreen() {
    const { signIn } = useAuth();
    const {colors} = useTheme();

    async function handleSignIn() {
        await signIn();
        router.replace('/(tabs)');
    }

    // async function handleSignUpSelect() {
    //     router.push('/(auth)/signup');
    // }

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, padding: 24 }}>
            {/* TODO test to see what is going on with the dark and light mode */}
            <ThemedText 
                family="ui"
                type='title'
                weight='bold'
                lightColor={colors.primary} 
                darkColor={colors.primary}>
                    Welcome to Drift
            </ThemedText>
            <ThemedButton
                type="form"
                color="primary"
                title="Sign in"
                onPress={handleSignIn}
                />
            {/* <Button title="Sign Up" onPress={handleSignUpSelect} /> */}
        </ThemedView>
    );
}