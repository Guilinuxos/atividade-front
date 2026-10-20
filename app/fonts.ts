// app/fonts.ts
import localFont from 'next/font/local'

export const fraunces = localFont({
  src: [
    {
      path: './fonts/Fraunces-Variable.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/Fraunces-Italic-Variable.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-fraunces',
  fallback: ['Georgia', 'serif'],
})

export const inter = localFont({
  src: [
    {
      path: './fonts/Inter-Variable.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/Inter-Italic-Variable.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
})

export const plusJakarta = localFont({
  src: [
    {
      path: './fonts/PlusJakartaSans-Variable.ttf',
      weight: '200 800',
      style: 'normal',
    },
    {
      path: './fonts/PlusJakartaSans-Italic-Variable.ttf',
      weight: '200 800',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-plus-jakarta',
  fallback: ['system-ui', 'sans-serif'],
})
