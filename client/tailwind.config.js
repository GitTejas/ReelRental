module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'particle-float': 'float 5s infinite ease-in-out',
        'smooth-fade': 'fadeIn 2s ease-out',
        'bubble-fall': 'bubbleFall 10s infinite ease-in-out', // Change name to bubbleFall
        'shimmer': 'shimmer 2s infinite linear', // Add shimmer animation
        'glowing': 'glowing 3s ease-in-out infinite', // Add glowing text animation
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bubbleFall: {
          '0%': { transform: 'translateY(-100px)', opacity: 1 }, // Start from top
          '50%': { transform: 'translateY(300px)', opacity: 0.7 }, // Fall down to 300px
          '100%': { transform: 'translateY(-100px)', opacity: 1 }, // Reset to top (falling loop)
        },
        shimmer: { // Add shimmer keyframes
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideLoop: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-200%)' },
          '75%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
        glowing: { // Dramatic glowing animation
          '0%': {
            textShadow: '0 0 10px #fff, 0 0 15px #fff, 0 0 30px #ff00ff, 0 0 50px #ff00ff', // Start with faint glow
          },
          '50%': {
            textShadow: '0 0 20px #fff, 0 0 30px #ff00ff, 0 0 60px #ff00ff, 0 0 100px #ff00ff', // Intense glow
          },
          '100%': {
            textShadow: '0 0 10px #fff, 0 0 15px #fff, 0 0 30px #ff00ff, 0 0 50px #ff00ff', // Fade back to faint glow
          },
        },
      },
      backgroundImage: {
        'shimmer-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 75%)',
      },
    },
  },
  plugins: [],
};
