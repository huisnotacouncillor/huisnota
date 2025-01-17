import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// built-in themes
// const themes = ['andromeeda', 'aurora-x', 'ayu-dark', 'catppuccin-frappe', 'catppuccin-latte', 'catppuccin-macchiato', 'catppuccin-mocha', 'dark-plus', 'dracula', 'dracula-soft', 'github-dark', 'github-dark-dimmed', 'github-light', 'light-plus', 'material-theme', 'material-theme-darker', 'material-theme-lighter', 'material-theme-ocean', 'material-theme-palenight', 'min-dark', 'min-light', 'monokai', 'night-owl', 'nord', 'one-dark-pro', 'poimandres', 'red', 'rose-pine', 'rose-pine-dawn', 'rose-pine-moon', 'slack-dark', 'slack-ochin', 'solarized-dark', 'solarized-light', 'synthwave-84', 'tokyo-night', 'vesper', 'vitesse-black', 'vitesse-dark', 'vitesse-light']

export default defineConfig({
  site: 'https://astro-theme-vitesse.netlify.app/',
  server: {
    port: 1977,
  },
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    vue(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'ayu-dark',
        dark: 'dracula',
      },
      wrap: true,
    },
  },
})
