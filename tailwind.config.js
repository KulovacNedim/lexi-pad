/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      listStyleType: {
        disc: 'disc',
        decimal: 'decimal',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ul: { listStyleType: 'disc' },
        ol: { listStyleType: 'decimal' },
      });
    },
  ],
};
