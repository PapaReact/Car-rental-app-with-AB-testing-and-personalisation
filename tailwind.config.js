/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        "8xl": "1440px"
      },
      colors: {
        'blue': {
          '50': '#EFF6FF',
          '100': '#DBEAFE',
          '600': '#2563EB',
          '700': '#1D4ED8'
        },
        'neutral': {
          '200': '#DEE5ED'
        },
        'text-main': '#334155',
        'text-dark': '#1A202C',
        'text-shape': '#CBD5E1',
        'light-shape': '#F1F4F8',
        'dark-shape': '#A4B7CD',
      }
    },
  },
  plugins: [],
}
