<script setup>
import { ref, onMounted } from 'vue'
import profileData from './data/profile.json'

// Import components
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import AchievementsSection from './components/AchievementsSection.vue'
import EducationSection from './components/EducationSection.vue'
import TournamentsSection from './components/TournamentsSection.vue'
import GallerySection from './components/GallerySection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const profile = ref(profileData)
const isLoading = ref(true)

onMounted(() => {
  // Artificial delay to show the beautiful chess preloader transition
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <!-- Premium Loader Overlay -->
  <Transition name="fade-loader">
    <div v-if="isLoading" class="preloader">
      <div class="loader-content">
        <!-- Chess King Icon rotating and scaling -->
        <svg class="loader-chess" viewBox="0 0 24 24" width="70" height="70">
          <path fill="currentColor" d="M19,22H5V20H19V22M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2M17,10C17,11.23 16.32,12.3 15.32,12.87C16.14,13.6 17,14.69 17,16V18H7V16C7,14.69 7.86,13.6 8.68,12.87C7.68,12.3 7,11.23 7,10C7,8.9 7.55,7.9 8.41,7.31C8.15,6.58 8,5.8 8,5C8,2.79 9.79,1 12,1C14.21,1 16,2.79 16,5C16,5.8 15.85,6.58 15.59,7.31C16.45,7.9 17,8.9 17,10M12,3C10.9,3 10,3.9 10,5C10,5.43 10.13,5.83 10.36,6.17C10.87,6.06 11.42,6 12,6C12.58,6 13.13,6.06 13.64,6.17C13.87,5.83 14,5.43 14,5C14,3.9 13.1,3 12,3M12,8C10.16,8 8.5,8.9 8.5,10C8.5,11.1 10.16,12 12,12C13.84,12 15.5,11.1 15.5,10C15.5,8.9 13.84,8 12,8M9,16H15V15H9V16Z"/>
        </svg>
        <div class="loader-progress-bar">
          <div class="loader-progress"></div>
        </div>
        <p class="loader-text">Setting Up Board...</p>
      </div>
    </div>
  </Transition>

  <!-- Main Application Wrapper -->
  <div v-if="!isLoading" class="app-wrapper animate-fade-in">
    <!-- Fixed Navigation Bar -->
    <Navbar :profileName="profile.name" />

    <!-- Website Sections -->
    <main>
      <HeroSection :profile="profile" />
      <AboutSection :profile="profile" />
      <AchievementsSection :achievements="profile.achievements" />
      <EducationSection :education="profile.education" />
      <TournamentsSection :tournaments="profile.tournaments" />
      <GallerySection :gallery="profile.gallery" />
      <ContactSection :contacts="profile.contacts" />
    </main>

    <!-- Footer -->
    <Footer :profileName="profile.name" />
  </div>
</template>

<style>
/* App Wrapper Global Layout */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

/* Preloader Styles */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.loader-chess {
  color: var(--color-primary);
  filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4));
  animation: chess-pulse 1.8s ease-in-out infinite alternate;
}

.loader-progress-bar {
  width: 150px;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
}

.loader-progress {
  width: 0%;
  height: 100%;
  background-color: var(--color-primary);
  box-shadow: 0 0 8px var(--color-primary);
  border-radius: 10px;
  animation: load-progress 1s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
}

.loader-text {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 2px;
}

@keyframes chess-pulse {
  0% {
    transform: scale(0.9) rotate(0deg);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.1) rotate(5deg);
    opacity: 1;
    color: #f3e5ab; /* soft warm glow */
  }
}

@keyframes load-progress {
  to {
    width: 100%;
  }
}

/* Loader transition */
.fade-loader-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-loader-leave-to {
  opacity: 0;
}
</style>
