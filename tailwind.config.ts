import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './content/**/*.md',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    fontFamily: {
      mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
