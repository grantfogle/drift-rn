// Simple email regex (good enough for UI)
export const Validators = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: (v: string) => v.length >= 8 ? null : 'Must be at least 8 characters.'
}