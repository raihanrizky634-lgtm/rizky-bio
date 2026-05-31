<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  profileName: {
    type: String,
    required: true
  }
})

const isMenuOpen = ref(false)
const activeSection = ref('home')

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Tournaments', href: '#tournaments' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Track active section on scroll
const handleScroll = () => {
  const sections = ['home', 'about', 'achievements', 'tournaments', 'gallery', 'contact']
  const scrollPosition = window.scrollY + 100 // offset for navbar height

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Brand Logo -->
      <a href="#home" class="nav-brand" @click="closeMenu">
        <svg class="brand-icon" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M19,22H5V20H19V22M17,10C17,11.23 16.32,12.3 15.32,12.87C16.14,13.6 17,14.69 17,16V18H7V16C7,14.69 7.86,13.6 8.68,12.87C7.68,12.3 7,11.23 7,10C7,8.9 7.55,7.9 8.41,7.31C8.15,6.58 8,5.8 8,5C8,2.79 9.79,1 12,1C14.21,1 16,2.79 16,5C16,5.8 15.85,6.58 15.59,7.31C16.45,7.9 17,8.9 17,10M12,3C10.9,3 10,3.9 10,5C10,5.43 10.13,5.83 10.36,6.17C10.87,6.06 11.42,6 12,6C12.58,6 13.13,6.06 13.64,6.17C13.87,5.83 14,5.43 14,5C14,3.9 13.1,3 12,3M12,8C10.16,8 8.5,8.9 8.5,10C8.5,11.1 10.16,12 12,12C13.84,12 15.5,11.1 15.5,10C15.5,8.9 13.84,8 12,8M9,16H15V15H9V16Z"/>
        </svg>
        <span class="brand-text">{{ profileName }}</span>
      </a>

      <!-- Desktop Links -->
      <div class="nav-links" :class="{ 'nav-links-mobile': isMenuOpen }">
        <a 
          v-for="link in navLinks" 
          :key="link.href" 
          :href="link.href"
          class="nav-link"
          :class="{ active: activeSection === link.href.substring(1) }"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Hamburger Menu Toggle Button -->
      <button class="nav-toggle" @click="toggleMenu" :aria-label="isMenuOpen ? 'Close Menu' : 'Open Menu'">
        <svg v-if="!isMenuOpen" viewBox="0 0 24 24" width="28" height="28">
          <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"/>
        </svg>
        <svg v-else viewBox="0 0 24 24" width="28" height="28">
          <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
        </svg>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(12, 12, 12, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: var(--transition-smooth);
}

.nav-container {
  width: 90%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--color-text);
  font-family: var(--font-headings);
  font-size: 1.4rem;
  font-weight: 600;
  transition: var(--transition-smooth);
}

.brand-icon {
  color: var(--color-primary);
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.4));
}

.nav-brand:hover {
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 8px 0;
  transition: var(--transition-smooth);
}

.nav-link:hover {
  color: var(--color-text);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  box-shadow: 0 0 8px var(--color-primary);
  transition: var(--transition-smooth);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--color-primary);
}

.nav-toggle {
  display: none;
  background: transparent;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 5px;
  transition: var(--transition-smooth);
}

.nav-toggle:hover {
  color: var(--color-primary);
}

/* Mobile Nav styles */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: calc(100vh - 80px);
    background-color: rgba(18, 18, 18, 0.98);
    border-left: 1px solid rgba(212, 175, 55, 0.1);
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    gap: 25px;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 999;
  }

  .nav-links-mobile {
    right: 0;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.9);
  }

  .nav-link {
    font-size: 1.1rem;
    width: 100%;
  }
}
</style>
