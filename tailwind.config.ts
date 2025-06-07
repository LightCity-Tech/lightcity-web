import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#FAAB30",
          50: "#FFFEE8",
          100: "#FFFAC6",
          200: "#FEF6A0",
          300: "#FDF17A",
          400: "#FBEC5B",
          500: "#F8E73E",
          600: "#FFDC41",
          700: "#FCC438",
          800: "#F58522",
        },
        secondary:{
          main: "#32220A",
          25: "#FEEED6",
          50: "#F8D4A1",
          100: "#F0B868",
          200: "#E89D2C"
        },
        'main-black': "#050300",
        white: "#FAFAFA",
        black: "#000000",
      },
      fontSize: {
        //Header element styles
        "h-1": ["5.25rem", { lineHeight: "114.286%", fontWeight: 700 }],
        "h-2": ["2.5rem", { lineHeight: "128%", fontWeight: 600 }],
        "h-3": ["1.75rem", { lineHeight: "128.571%", fontWeight: 600 }],
        "h-4": ["1.5rem", { lineHeight: "150%", fontWeight: 500 }],
        "h-5": ["1.25rem", { lineHeight: "140%", fontWeight: 500 }],
        "h-6": ["1rem", { lineHeight: "175%", fontWeight: 500 }],

        // Body variant styles - [Large, Medium, Regular, Small]
        "body-mid": ["1rem", { lineHeight: "175%", fontWeight: 500 }],
        "body-reg": ["1rem", { lineHeight: "175%", fontWeight: 400 }],
        "caption-mid": ["0.875rem", { lineHeight: "200%", fontWeight: 500 }],
        "caption-reg": ["0.875rem", { lineHeight: "200%", fontWeight: 400 }],
      },
      fontWeight: {
        thin: "100",
        "extra-light": "200",
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-kaushan)'],
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },
      screens: {
        'small-mobile': {'max': '480px'},
        'mobile': {'max': '768px'},
        // => @media (max-width: 767px) { ... }
      },
      keyframes:{
        'slide': {
          '0%': {transform: 'translateY(0)', color: 'red'},
          '100%': {transform: 'translateY(-100px)', color: 'blue'}
        },
      },
      animation: {
        'sliding': 'slide 1s cubic-bezier(0.250, 0.460, 0.450, 0.940 infinite',
      },
    },
  },
  plugins: [],
};
export default config;
