/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dutch orange + bottle green + white = hidden Indian tricolour
        cream:   '#FAF8F2',   // warm parchment (appetising, premium)
        ink:     '#111110',   // near-black — sharp contrast
        spice:   '#D4530A',   // deep Dutch royal orange / Indian saffron
        forest:  '#0F3D24',   // deep bottle green / India green (royal)
        gold:    '#B8891E',   // deep warm gold — prices & highlights
        muted:   '#6A6A6A',   // neutral grey
        surface: '#EDE8DC',   // warm cream — alternating section bg
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
