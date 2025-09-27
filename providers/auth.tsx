import { createContext, useContext, useMemo, useState } from 'react';

// Todo: create basic type for create context
// What does createContext do
const Ctx = createContext<any>(null);

export function AuthProvider({children}: {children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSignedIn, setSignedIn] = useState(false);

    // handle oauth, hook up to rails server...

    // TODO: WHat is use memo doing...?
    const value = useMemo(() => ({
        isLoading,
        isSignedIn,
        signIn: async () => { 
            setIsLoading(true);
            setSignedIn(true);
            // TODO: do actual stuff here
            setIsLoading(false);
        },
        signOut: async () => { setSignedIn(false); },
    }), [isLoading, isSignedIn]);

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);