import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'node:fs'
import path from 'node:path'

// Auto-copy AI generated images from artifact directory to local project assets
const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const imagesDir = path.join(projectRoot, 'src', 'assets', 'images')
const artifactDir = 'C:/Users/REDMIBOOK 15/.gemini/antigravity/brain/5a4c5755-0afa-437a-b891-f40911c77f5f'

try {
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }
  const mappings = {
    'profile_photo_1780223822355.png': 'profile.png',
    'hero_background_1780223845551.png': 'hero_bg.png',
    'gallery_match_1780223898977.png': 'gallery1.png',
    'gallery_victory_1780223921883.png': 'gallery2.png',
    'gallery_hall_1780224002524.png': 'gallery3.png'
  }
  for (const [srcName, destName] of Object.entries(mappings)) {
    const srcPath = path.join(artifactDir, srcName)
    const destPath = path.join(imagesDir, destName)
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath)
      console.log(`[Asset Setup] Copied ${srcName} to ${destName}`)
    } else {
      console.warn(`[Asset Setup] Source image not found: ${srcPath}`)
    }
  }
} catch (err) {
  console.error('[Asset Setup] Failed to copy generated images:', err)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})

