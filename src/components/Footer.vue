<script setup>
import { computed } from 'vue'

defineProps({
  profileName: {
    type: String,
    required: true
  }
})

const currentYear = computed(() => {
  return new Date().getFullYear()
})

const scrollToTop = (e) => {
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <p class="copyright">
          &copy; {{ currentYear }} {{ profileName }}. All Rights Reserved.
        </p>
      </div>
      
      <div class="footer-right">
        <!-- Scroll to Top Chevron Button -->
        <a href="#home" class="scroll-top-btn" @click="scrollToTop" aria-label="Scroll to Top">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"/>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #080808;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
  padding: 30px 0;
  position: relative;
  z-index: 10;
}

.footer-container {
  width: 90%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
}

.scroll-top-btn {
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--color-text-secondary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: var(--transition-smooth);
}

.scroll-top-btn:hover {
  background-color: var(--color-primary);
  color: #000000;
  border-color: var(--color-primary);
  box-shadow: 0 0 12px var(--color-primary-glow);
  transform: translateY(-3px);
}

@media (max-width: 576px) {
  .footer-container {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
