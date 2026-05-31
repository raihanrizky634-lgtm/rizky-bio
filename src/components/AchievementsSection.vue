<script setup>
defineProps({
  achievements: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="achievements" class="achievements-section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Key Achievements</h2>
        <p class="section-subtitle">Championship Triumphs & Academic Honors</p>
      </div>

      <div class="achievements-grid">
        <div 
          v-for="(achievement, index) in achievements" 
          :key="index"
          class="achievement-card animate-slide-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Shiny gold top border accent -->
          <div class="card-border-line"></div>
          
          <div class="card-header">
            <span class="achievement-year">{{ achievement.year }}</span>
            <div class="achievement-icon-wrapper">
              <!-- Trophy SVG Icon -->
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M18 2H6C4.9 2 4 2.9 4 4V7C4 8.66 5.34 10 7 10H8.18C8.75 11.83 10.22 13.23 12 13.8V17H9V19H15V17H12V13.8C13.78 13.23 15.25 11.83 15.82 10H17C18.66 10 20 8.66 20 7V4C20 2.9 19.1 2 18 2M6 8V4H7V8C5.9 8 5 7.1 5 6V7C5 7.55 5.45 8 6 8M19 6C19 7.1 18.1 8 17 8H18C18.55 8 19 7.55 19 7V6M18 4V7H17V4H18Z"/>
              </svg>
            </div>
          </div>
          
          <div class="card-content">
            <h3 class="achievement-title">{{ achievement.title }}</h3>
            <p class="achievement-desc">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.achievements-section {
  background-color: var(--color-bg);
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.achievement-card {
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.4) 0%, rgba(20, 20, 20, 0.6) 100%);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius);
  padding: 35px 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 25px;
  transition: var(--transition-smooth);
}

.card-border-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  opacity: 0;
  transition: var(--transition-smooth);
}

.achievement-card:hover {
  transform: translateY(-8px);
  border-color: var(--color-primary-semi);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 20px var(--color-primary-glow);
}

.achievement-card:hover .card-border-line {
  opacity: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.achievement-year {
  font-size: 0.9rem;
  font-weight: 700;
  color: #000000;
  background-color: var(--color-primary);
  padding: 5px 14px;
  border-radius: 50px;
  font-family: var(--font-body);
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(212, 175, 55, 0.25);
  transition: var(--transition-smooth);
}

.achievement-card:hover .achievement-year {
  background-color: #f3e5ab; /* soft ivory gold on card hover */
  box-shadow: 0 4px 15px rgba(243, 229, 171, 0.4);
}

.achievement-icon-wrapper {
  color: var(--color-primary-semi);
  transition: var(--transition-smooth);
}

.achievement-card:hover .achievement-icon-wrapper {
  color: var(--color-primary);
  transform: rotate(5deg) scale(1.1);
  filter: drop-shadow(0 0 5px rgba(212, 175, 55, 0.4));
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.achievement-title {
  font-size: 1.35rem;
  line-height: 1.4;
  color: var(--color-text);
  font-family: var(--font-headings);
  font-weight: 600;
  transition: var(--transition-smooth);
}

.achievement-card:hover .achievement-title {
  color: var(--color-primary);
}

.achievement-desc {
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .achievements-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .achievement-card {
    padding: 30px 25px;
  }
}
</style>
