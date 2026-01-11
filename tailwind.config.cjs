/**********************
 * Tailwind Configuration
 * Implements Kerubian design tokens.
 **********************/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6E2C30',
        secondary: '#010101',
        background: '#F9F5F1',
      },
      borderRadius: {
        base: '0.5rem',
      },
      fontFamily: {
        heading: ['"Trajan Pro"', 'serif'],
        body: ['"EB Garamond"', 'serif'],
      },
      maxWidth: {
        container: '72rem',
      },
    },
  },
  plugins: [],
};
