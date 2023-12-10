import {nextui} from '@nextui-org/theme'


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        // disabledOpacity: "0.3", // opacity-[0.3]
        // radius: {
        //   small: "2px", // rounded-small
        //   medium: "4px", // rounded-medium
        //   large: "6px", // rounded-large
        // },
        // borderWidth: {
        //   small: "1px", // border-small
        //   medium: "1px", // border-medium
        //   large: "2px", // border-large
        // },
      },
      themes: {
        light: {},
        dark: {},
        pink: {
          extend: "light",
          colors: {
            background: {
              DEFAULT: "#fff0f2",
            },
            primary: {
              DEFAULT: "pink",
              foreground: "#fff",
            },
          },
          layout: {
            radius: {
              small: "6px", // rounded-small
              medium: "8px", // rounded-medium
              large: "10px", // rounded-large
            },
          }
        },
      },
    }),
  ],
}
