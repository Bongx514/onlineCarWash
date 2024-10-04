/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html', //  Any HTML files in the src directory
    './src/**/*.php', //  Any PHP files in the src directory
    './src/**/*.js', //  Any JS files in the src directory
    './src/**/*.css', // Any CSS files in the src directory
    './src/**/*.less', // Any LESS files in the src directory
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr', // Create a custom row layout with two auto-sized rows and one flexible row
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin for styling forms (e.g., inputs, buttons, etc.)
    require('@tailwindcss/typography'), // Plugin for adding typography utilities (e.g., for rich-text content like articles) 
    require('@tailwindcss/line-clamp'), // Plugin for clamping text content (e.g., limiting lines of text with ellipsis)
    require('@tailwindcss/aspect-ratio'), // Plugin for setting aspect ratios for elements (e.g., images, videos, etc.)
  ],
}

