// tailwind.config.mjs
/** 
 * @type {import('tailwindcss').Config} 
 * 
*/
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'], // для заголовков
      },
      fontWeight: {
        medium: '500',
        semibold: '600',
        bold: '700',
      }
    },
  },
  plugins: [],
}