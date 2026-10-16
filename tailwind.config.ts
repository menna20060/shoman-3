import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2B50E8',
        'primary-hover': '#0F2A6B',
        'secondary-navy': '#0F2A6B',
        'tertiary-cyan': '#1BB3D1',
        'navy': {
          950: '#071A27',
          900: '#0A2234',
          800: '#0F2A6B',
          700: '#16365C',
        },
        'cyan': {
          500: '#0284A8',
          600: '#0096B7',
          focus: '#0891B2',
        },
        'aqua': {
          mist: '#EDF7F9',
          wash: '#E0F2F6',
        },
        'slate': {
          500: '#4A7082',
          700: '#335C6E',
        },
        'carbon': {
          900: '#0B1528',
          700: '#121B2F',
        },
        'text-muted': '#444655',
        'surface': {
          white: '#FFFFFF',
          cloud: '#F3F4F6',
          dim: '#E9EDF5',
          blueprint: '#F8FAFC',
        },
        'border': {
          hairline: '#E2E8F0',
          variant: '#CBD5E1',
          strong: '#0A2234',
          cyan: '#0284A8',
        },
        'status': {
          success: '#059669',
          warning: '#D97706',
          error: '#DC2626',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Montserrat', 'Cairo', 'sans-serif'],
        body: ['var(--font-body)', 'IBM Plex Sans', 'IBM Plex Sans Arabic', 'sans-serif'],
        mono: ['var(--font-mono)', 'Inter', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        admin: '4px',
        card: '8px',
      },
      boxShadow: {
        'level-1': '0 1px 3px rgba(11, 21, 40, 0.05), 0 1px 2px rgba(11, 21, 40, 0.03)',
        'level-2': '0 4px 12px rgba(15, 42, 107, 0.08), 0 2px 4px rgba(15, 42, 107, 0.04)',
        'level-3': '0 20px 35px -8px rgba(11, 21, 40, 0.16), 0 8px 12px -4px rgba(11, 21, 40, 0.08)',
        'offset': '0 4px 0 rgba(10, 34, 52, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
