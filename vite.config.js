import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'node:fs'
import path from 'node:path'

// Auto-copy AI generated images from artifact directory to local project assets
const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const imagesDir = path.join(projectRoot, 'public', 'images')
const oldImagesDir = path.join(projectRoot, 'src', 'assets', 'images')
const artifactDir = 'C:/Users/REDMIBOOK 15/.gemini/antigravity/brain/57a78a0a-ce90-4a16-9f42-b96742fd70e6'

try {
  // Ensure public/images directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }

  // Copy existing images from src/assets/images to public/images if they exist
  if (fs.existsSync(oldImagesDir)) {
    const files = fs.readdirSync(oldImagesDir)
    for (const file of files) {
      const srcPath = path.join(oldImagesDir, file)
      const destPath = path.join(imagesDir, file)
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath)
        console.log(`[Asset Setup] Copied ${file} to public/images`)
      }
    }
  }

  // Copy AI generated images from the artifact directory if available
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
      console.log(`[Asset Setup] Copied AI generated ${srcName} to ${destName}`)
    }
  }
} catch (err) {
  console.error('[Asset Setup] Failed to copy images:', err)
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

