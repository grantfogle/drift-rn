import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Divider from '@/components/ui/divider';
import { ThemedButton } from '@/components/ui/themed-button';
import { useAuth } from '@/providers/auth';
import { useTheme } from '@/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';


export default function SignInScreen() {
    const { signIn } = useAuth();
    const { colors } = useTheme();

    async function handleSignIn() {
        await signIn();
        router.replace('/(tabs)');
    }

    // async function handleSignUpSelect() {
    //     router.push('/(auth)/signup');
    // }

    return (
        //styles look good how do 
        <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, padding: 24 }}>
            {/* TODO test to see what is going on with the dark and light mode */}
            <ThemedText 
                family="ui"
                type='title'
                weight='bold'
                lightColor={colors.primary} 
                darkColor={colors.primary}>
                    Log in
            </ThemedText>

            <ThemedButton
                type="form"
                color="primary"
                title="Sign in"
                weight='semibold'
                onPress={handleSignIn}
            />

            <Divider color={colors.fg} label="Or" />

            <ThemedButton
                type="form"
                color="secondary"
                title="Continue with Google"
                weight='semibold'
                leadingIcon={<Ionicons name="logo-google" size={24} />}
                onPress={handleSignIn}
            />

            <ThemedButton
                type="form"
                color="secondary"
                title="Continue with Google"
                weight='semibold'
                leadingIcon={<Ionicons name="logo-apple" size={24} color="black" />}
                onPress={handleSignIn}
            />

            <ThemedButton
                type="form"
                color="secondary"
                title="Continue with Facebook"
                weight='semibold'
                leadingIcon={<Ionicons name="logo-facebook" size={24} />}
                onPress={handleSignIn}
            />
            {/* <Button title="Sign Up" onPress={handleSignUpSelect} /> */}
        </ThemedView>
    );
}