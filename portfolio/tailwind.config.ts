const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0079FF',   
 // A vibrant blue
          dark: '#0059B2', // A darker shade of blue
          light: '#40A9FF', // A lighter shade of blue
        },
        secondary: {
          DEFAULT: '#8B5CF6', // A purple tone
          dark: '#7C3AED', // A darker shade of purple
          light: '#D6BCFA', // A lighter shade of purple
        },
        dark: {
          DEFAULT: '#111827', // A very dark gray
          lighter: '#212529', // A slightly lighter gray
          darker: '#0C1014', // A darker gray
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;