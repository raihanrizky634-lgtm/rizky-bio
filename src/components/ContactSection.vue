<script setup>
import { ref } from 'vue'

const props = defineProps({
  contacts: {
    type: Object,
    required: true
  }
})

const showTooltip = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(props.contacts.email)
    showTooltip.value = true
    
    // Hide tooltip after 2 seconds
    setTimeout(() => {
      showTooltip.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email: ', err)
  }
}
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">For Inquiries, Sponsorships, or Academic Opportunities</p>
      </div>

      <div class="contact-grid">
        <!-- Card 1: Email (With copy feature) -->
        <div class="contact-card card">
          <div class="contact-icon-wrapper">
            <!-- Mail SVG Icon -->
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path fill="currentColor" d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M17,17H7V15H17V17M17,13H7V11H17V13M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
            </svg>
          </div>
          <h3 class="contact-card-title">Email Address</h3>
          <p class="contact-card-value">{{ contacts.email }}</p>
          
          <div class="copy-button-container">
            <button class="btn btn-primary btn-copy" @click="copyEmail">
              <!-- Copy SVG Icon -->
              <svg viewBox="0 0 24 24" width="18" height="18" class="btn-icon">
                <path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"/>
              </svg>
              Copy Email
            </button>
            
            <!-- Tooltip popup -->
            <Transition name="fade-tooltip">
              <span v-if="showTooltip" class="copy-tooltip">Copied to Clipboard!</span>
            </Transition>
          </div>
        </div>

        <!-- Card 2: Instagram -->
        <a :href="`https://instagram.com/${contacts.instagram.replace('@', '')}`" target="_blank" rel="noopener noreferrer" class="contact-link-card">
          <div class="contact-card card">
            <div class="contact-icon-wrapper">
              <!-- Instagram SVG Icon -->
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 1,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 1,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 1,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
            </div>
            <h3 class="contact-card-title">Instagram</h3>
            <p class="contact-card-value">{{ contacts.instagram }}</p>
            <span class="btn btn-secondary btn-visit">
              Follow Profile
              <!-- Link arrow -->
              <svg viewBox="0 0 24 24" width="16" height="16" class="btn-icon-right">
                <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
              </svg>
            </span>
          </div>
        </a>

        <!-- Card 3: GitHub -->
        <a :href="`https://github.com/${contacts.github}`" target="_blank" rel="noopener noreferrer" class="contact-link-card">
          <div class="contact-card card">
            <div class="contact-icon-wrapper">
              <!-- GitHub SVG Icon -->
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
            </div>
            <h3 class="contact-card-title">GitHub</h3>
            <p class="contact-card-value">@{{ contacts.github }}</p>
            <span class="btn btn-secondary btn-visit">
              View Repositories
              <!-- Link arrow -->
              <svg viewBox="0 0 24 24" width="16" height="16" class="btn-icon-right">
                <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--color-bg);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.contact-link-card {
  text-decoration: none;
  color: inherit;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 30px;
  height: 100%;
  justify-content: space-between;
  gap: 15px;
}

.contact-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-semi);
  transition: var(--transition-smooth);
  margin-bottom: 5px;
}

.contact-card:hover .contact-icon-wrapper {
  background-color: var(--color-primary);
  color: #000000;
  transform: scale(1.08);
  box-shadow: 0 0 15px var(--color-primary);
}

.contact-card-title {
  font-size: 1.3rem;
  font-family: var(--font-headings);
  font-weight: 600;
}

.contact-card-value {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  margin-bottom: 10px;
  word-break: break-all;
}

.copy-button-container {
  position: relative;
  width: 100%;
}

.btn-copy, .btn-visit {
  width: 100%;
  font-size: 0.9rem;
  padding: 10px 20px;
  border-radius: 6px;
}

.btn-icon {
  margin-right: 8px;
}

.btn-icon-right {
  margin-left: 8px;
}

/* Tooltip Popup Styles */
.copy-tooltip {
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-primary);
  color: #000000;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 4px;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

/* Tooltip transitions */
.fade-tooltip-enter-active,
.fade-tooltip-leave-active {
  transition: all 0.3s ease;
}

.fade-tooltip-enter-from {
  opacity: 0;
  transform: translate(-50%, -10px);
}

.fade-tooltip-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}

/* Hover effects for link cards */
.contact-link-card:hover .contact-card {
  transform: translateY(-5px);
  border-color: var(--color-primary-semi);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 15px var(--color-primary-glow);
}

.contact-link-card:hover .btn-visit {
  background-color: var(--color-primary);
  color: #000000;
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.25);
}

/* Tablet & Mobile responsive */
@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 450px;
    margin: 0 auto;
  }
}
</style>
