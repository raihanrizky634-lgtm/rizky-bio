<script setup>
defineProps({
  profile: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <header id="home" class="hero-section" :style="{ backgroundImage: `url(${profile.heroBgImage})` }">
    <!-- Overlay for darkening the background image and ensuring contrast -->
    <div class="hero-overlay"></div>
    
    <div class="container hero-container animate-slide-up">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Active Competitor
        </div>
        <h1 class="hero-name">{{ profile.name }}</h1>
        <h2 class="hero-title">
          <span class="gold-text">Chess Athlete</span> & High School Student
        </h2>
        <p class="hero-bio">{{ profile.bio }}</p>
        
        <div class="hero-actions">
          <a href="#achievements" class="btn btn-primary">
            View Achievements
            <svg class="btn-arrow" viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
            </svg>
          </a>
          <a href="#contact" class="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      
      <div class="hero-image-wrapper">
        <div class="profile-image-container">
          <!-- Double border glow frame -->
          <div class="image-border-glow"></div>
          <div class="image-border-inner">
            <img :src="profile.profileImage" :alt="profile.name" class="profile-image" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding-top: 80px; /* offset for fixed navbar */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 30%, rgba(12, 12, 12, 0.4) 0%, rgba(12, 12, 12, 0.95) 80%),
              linear-gradient(to bottom, rgba(12, 12, 12, 0.8) 0%, rgba(12, 12, 12, 1) 100%);
  z-index: 1;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 50px;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 680px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.85rem;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 8px var(--color-primary);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.6; }
  50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 12px var(--color-primary); }
  100% { transform: scale(0.9); opacity: 0.6; }
}

.hero-name {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.hero-title {
  font-size: 1.8rem;
  font-family: var(--font-body);
  font-weight: 400;
  color: var(--color-text-secondary);
  margin-bottom: 25px;
}

.gold-text {
  color: var(--color-primary);
  font-weight: 600;
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.15);
}

.hero-bio {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.btn-arrow {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* Image section */
.hero-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image-container {
  position: relative;
  width: 320px;
  height: 320px;
}

.image-border-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--color-primary) 0%, transparent 70%);
  opacity: 0.3;
  z-index: 1;
  animation: float-glow 6s ease-in-out infinite alternate;
}

.image-border-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid var(--color-primary);
  padding: 8px;
  background-color: var(--color-bg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(212, 175, 55, 0.2);
  z-index: 2;
  overflow: hidden;
  transition: var(--transition-smooth);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: brightness(0.95) contrast(1.05);
  transition: var(--transition-smooth);
}

.profile-image-container:hover .image-border-inner {
  transform: scale(1.02);
  border-color: #f3e5ab; /* soft ivory gold */
  box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3), inset 0 0 25px rgba(212, 175, 55, 0.4);
}

.profile-image-container:hover .profile-image {
  filter: brightness(1.02);
}

@keyframes float-glow {
  0% { transform: scale(0.95) rotate(0deg); opacity: 0.2; }
  100% { transform: scale(1.05) rotate(360deg); opacity: 0.45; }
}

/* Tablet & Mobile responsive */
@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
    padding: 60px 0;
  }

  .hero-content {
    max-width: 100%;
    order: 2;
  }

  .hero-badge {
    margin-bottom: 15px;
  }

  .hero-name {
    font-size: 3rem;
  }

  .hero-bio {
    margin-bottom: 30px;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image-wrapper {
    order: 1;
  }

  .profile-image-container {
    width: 250px;
    height: 250px;
  }
}

@media (max-width: 480px) {
  .hero-name {
    font-size: 2.3rem;
  }
  .hero-title {
    font-size: 1.4rem;
  }
  .hero-actions {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
  .hero-actions .btn {
    width: 100%;
  }
  .profile-image-container {
    width: 200px;
    height: 200px;
  }
}
</style>
