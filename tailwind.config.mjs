/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-vertical': 'bounce-vertical 2s ease-in-out infinite',
      },
      keyframes: {
        'bounce-vertical': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      fontFamily: {
        iso: ["ISOCP3", "sans-serif"],
        fceb: ['FCEB'],
        castleton: ['Castleton', 'serif'],
        ransom: ['Ransom', 'sans-serif'],
        ys: ['Youngserif'],
      },
    },
  },
  plugins: [],
};
