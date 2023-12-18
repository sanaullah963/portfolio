import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        darkBackground : '#0B2447',
        lightBackground : '#EFEFEF',
        colorfullText : '#00AB5C',
        semilightText : '#5C5470',
        darkText : '#585858',
        
      }
    },
  },
  plugins: [],
}
export default config
