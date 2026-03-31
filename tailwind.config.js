/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif',],
        mono: ['JetBrains Mono', 'monospace'],
        montserrat: ['Montserrat']
      },
      colors: {
        // Background Colors
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // gray-900
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-900
        },
        
        // Surface Colors
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)', // gray-500
        },
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // mint-green
        
        // Brand Colors
        primary: {
          DEFAULT: 'var(--color-primary)', // mint-green
          foreground: 'var(--color-primary-foreground)', // gray-900
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // blue
          foreground: 'var(--color-secondary-foreground)', // white
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // blue-600
          foreground: 'var(--color-accent-foreground)', // white
        },
        
        // Status Colors
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // yellow-600
          foreground: 'var(--color-warning-foreground)', // gray-900
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-600
          foreground: 'var(--color-destructive-foreground)', // white
        },
        
        // Conversion Colors
        conversion: {
          DEFAULT: 'var(--color-conversion)', // orange
          foreground: 'var(--color-conversion-foreground)', // white
        },
        
        // Text Colors
        'text-primary': 'var(--color-text-primary)', // gray-900
        'text-secondary': 'var(--color-text-secondary)', // gray-600
      },
      spacing: {
        'brand-xs': 'var(--spacing-xs)', // 8px
        'brand-sm': 'var(--spacing-sm)', // 16px
        'brand-md': 'var(--spacing-md)', // 24px
        'brand-lg': 'var(--spacing-lg)', // 32px
        'brand-xl': 'var(--spacing-xl)', // 48px
        'brand-2xl': 'var(--spacing-2xl)', // 64px
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'brand': 'var(--shadow-brand)',
        'brand-hover': 'var(--shadow-brand-hover)',
        'brand-sm': 'var(--shadow-sm)',
        'brand-md': 'var(--shadow-md)',
        'brand-lg': 'var(--shadow-lg)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-brand': 'pulseBrand 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseBrand: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      gridTemplateColumns: {
        'brand': '1.618fr 1fr', // Golden ratio
        'brand-reverse': '1fr 1.618fr',
      },
      maxWidth: {
        'brand': '1280px',
      },
      fontSize: {
        'brand-xs': ['0.75rem', { lineHeight: '1rem' }],
        'brand-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'brand-base': ['1rem', { lineHeight: '1.5rem' }],
        'brand-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'brand-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'brand-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'brand-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'brand-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'brand-5xl': ['3rem', { lineHeight: '1' }],
        'brand-6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'brand-normal': '400',
        'brand-medium': '500',
        'brand-semibold': '600',
        'brand-bold': '700',
      },
      backdropBlur: {
        'brand': '10px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}