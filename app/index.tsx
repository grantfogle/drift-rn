import { useAuth } from "@/providers/auth";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
    const { isSignedIn, isLoading } = useAuth();

    useEffect(() => {
        if (isLoading) return;
        if (isSignedIn) router.replace('/(tabs)')
        else router.replace('/(auth)/sign-in');
    }, [isSignedIn, isLoading]);

    return null;
}