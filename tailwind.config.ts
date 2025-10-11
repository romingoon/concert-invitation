import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,css}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'concert-landscape': "url('/images/concert-background.jpg')",
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontFamily: {
        // CSS 변수를 참조하여 폰트 패밀리 정의
        byul: ['var(--font-byul)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
