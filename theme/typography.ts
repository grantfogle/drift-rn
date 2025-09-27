// src/theme/typography.ts
// Use your registered font families from useFonts()
export const fonts = {
    // variable fonts registered as 'Inter', 'OpenSans', 'Montserrat'
    default: 'Inter',
    brand:   'Montserrat',
    ui:      'OpenSans',
  } as const;
  
  export const typeScale = {
    // sizes use dp; lineHeights are ~1.3–1.4x
    display: { fontSize: 32, lineHeight: 40, letterSpacing: 0.2 },
    h1:      { fontSize: 28, lineHeight: 34 },
    h2:      { fontSize: 24, lineHeight: 30 },
    h3:      { fontSize: 20, lineHeight: 26 },
    body:    { fontSize: 16, lineHeight: 22 },
    small:   { fontSize: 14, lineHeight: 20 },
    tiny:    { fontSize: 12, lineHeight: 16 },
  } as const;
  