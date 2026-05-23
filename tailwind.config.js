/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fff0f5',
          100: '#ffe0ec',
          200: '#ffc5da',
          300: '#ff9dbe',
          400: '#ff6699',
          500: '#ff3375',
          600: '#e8195a',
          700: '#c4124a',
          800: '#a11340',
          900: '#87143a',
        },
        lavender: {
          50: '#f5f0ff',
          100: '#ece5ff',
          200: '#dbd0ff',
          300: '#c4b0ff',
          400: '#a880ff',
          500: '#8b50ff',
          600: '#7c2df5',
          700: '#6b1ed8',
          800: '#5a1ab4',
          900: '#4a178f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'notification-in': 'notificationIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 20px rgba(196, 176, 255, 0.5), 0 0 40px rgba(196, 176, 255, 0.3)' },
          '50%': { textShadow: '0 0 40px rgba(255, 102, 153, 0.8), 0 0 80px rgba(196, 176, 255, 0.6)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        notificationIn: {
          '0%': { transform: 'translateY(-20px) scale(0.9)', opacity: 0 },
          '100%': { transform: 'translateY(0) scale(1)', opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
