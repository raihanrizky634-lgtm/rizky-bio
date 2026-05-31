<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  gallery: {
    type: Array,
    required: true
  }
})

const activeImage = ref(null)

const openLightbox = (item) => {
  activeImage.value = item
  document.body.style.overflow = 'hidden' // lock page scroll
}

const closeLightbox = () => {
  activeImage.value = null
  document.body.style.overflow = '' // release page scroll
}

// Close lightbox on ESC key press
const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    closeLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <section id="gallery" class="gallery-section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Gallery</h2>
        <p class="section-subtitle">Moments from Competitive Championships & Training Sessions</p>
      </div>

      <div class="gallery-grid">
        <div 
          v-for="(item, index) in gallery" 
          :key="index"
          class="gallery-item animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openLightbox(item)"
        >
          <div class="gallery-card">
            <div class="img-wrapper gallery-image-wrapper">
              <img :src="item.image" :alt="item.caption" />
              
              <!-- Hover Overlay -->
              <div class="gallery-overlay">
                <div class="overlay-icon">
                  <!-- Plus/Zoom SVG Icon -->
                  <svg viewBox="0 0 24 24" width="28" height="28">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                  </svg>
                </div>
                <p class="overlay-caption">{{ item.caption }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal (Teleported or standard conditional render) -->
      <Transition name="fade">
        <div v-if="activeImage" class="lightbox-backdrop" @click.self="closeLightbox">
          <!-- Close button -->
          <button class="lightbox-close" @click="closeLightbox" aria-label="Close Preview">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
            </svg>
          </button>
          
          <!-- Lightbox Content Container -->
          <Transition name="scale">
            <div v-if="activeImage" class="lightbox-content">
              <img :src="activeImage.image" :alt="activeImage.caption" class="lightbox-image" />
              <div class="lightbox-caption">
                <p>{{ activeImage.caption }}</p>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  background-color: var(--color-bg);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.gallery-item {
  cursor: pointer;
}

.gallery-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: var(--transition-smooth);
}

.gallery-image-wrapper {
  aspect-ratio: 4/3;
  width: 100%;
}

.gallery-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(12, 12, 12, 0.4) 50%, rgba(12, 12, 12, 0.1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 25px;
  opacity: 0;
  transition: var(--transition-smooth);
  z-index: 2;
}

.gallery-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary-semi);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 15px var(--color-primary-glow);
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.overlay-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 4px 10px rgba(212, 175, 55, 0.3);
}

.gallery-card:hover .overlay-icon {
  transform: translateY(0);
}

.overlay-caption {
  font-size: 0.92rem;
  color: var(--color-text);
  line-height: 1.4;
  transform: translateY(15px);
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.gallery-card:hover .overlay-caption {
  transform: translateY(0);
}

/* Lightbox Modal Styles */
.lightbox-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(6, 6, 6, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 40px;
}

.lightbox-close {
  position: absolute;
  top: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2010;
  transition: var(--transition-smooth);
}

.lightbox-close:hover {
  background-color: var(--color-primary);
  color: #000000;
  box-shadow: 0 0 15px var(--color-primary);
}

.lightbox-content {
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: var(--border-radius);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}

.lightbox-caption {
  color: var(--color-text-secondary);
  font-size: 1rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.92);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .lightbox-backdrop {
    padding: 20px;
  }
  
  .lightbox-image {
    max-height: 60vh;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
