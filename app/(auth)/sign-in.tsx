import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/providers/auth';
import { router } from 'expo-router';
import { Button } from 'react-native';

export default function SignInScreen() {
    const { signIn } = useAuth();

    async function handleSignIn() {
        await signIn();
        router.replace('/(tabs)');
    }

    // async function handleSignUpSelect() {
    //     router.push('/(auth)/signup');
    // }

    return (
        <ThemedView style={{ flex: 1, justifyContent: 'center', gap: 12, padding: 24 }}>
            <ThemedText>Welcome to the sign in screen</ThemedText>
            <Button title="Sign In" onPress={handleSignIn} />
            {/* <Button title="Sign Up" onPress={handleSignUpSelect} /> */}
        </ThemedView>
    );
}