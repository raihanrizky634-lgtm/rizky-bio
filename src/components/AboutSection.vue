<script setup>
defineProps({
  profile: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Intellectual Pursuits & Strategic Excellence</p>
      </div>

      <div class="about-grid">
        <!-- Bio and Education Text Column -->
        <div class="about-text-col">
          <h3 class="about-subtitle">Behind the Board</h3>
          <p class="about-paragraph">
            {{ profile.bio }}
          </p>
          <p class="about-paragraph">
            Currently, I am balancing my high school studies at <strong>{{ profile.school }}</strong> with intensive training routines. I believe chess is not just a game, but a science and an art that teaches patience, critical analysis, and emotional control.
          </p>
          
          <div class="education-details">
            <h4 class="details-heading">Education & Association</h4>
            <ul class="details-list">
              <li>
                <span class="bullet-gold"></span>
                <strong>School:</strong> {{ profile.school }} (Jakarta, Indonesia)
              </li>
              <li>
                <span class="bullet-gold"></span>
                <strong>Affiliation:</strong> DKI Jakarta Provincial Chess Association (PERCASI)
              </li>
              <li>
                <span class="bullet-gold"></span>
                <strong>FIDE ID:</strong> FIDE Rated Junior Athlete
              </li>
            </ul>
          </div>
        </div>

        <!-- Metrics & Stats Grid Column -->
        <div class="about-stats-col">
          <div class="stats-grid">
            <!-- Stat Card 1: Rating -->
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <!-- Chess Rook SVG Icon -->
                <svg viewBox="0 0 24 24" width="32" height="32" class="stat-icon">
                  <path fill="currentColor" d="M19 22H5V20H19V22M19 4H17V8H15V4H13V8H11V4H9V8H7V4H5V10H19V4M18 18H6V12H18V18Z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-value">{{ profile.rating }}</span>
                <span class="stat-label">FIDE Elo Rating</span>
              </div>
            </div>

            <!-- Stat Card 2: Experience -->
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <!-- Chess Knight SVG Icon -->
                <svg viewBox="0 0 24 24" width="32" height="32" class="stat-icon">
                  <path fill="currentColor" d="M19,17.5C19,15.25 18.25,12.5 17,10C17,8 16.5,5.5 15,4C13,2 10.5,3.5 10.5,3.5C10.5,3.5 10,2 8,3C6,4 7,6.5 7,6.5C7,6.5 5.5,7.5 5.5,9.5C5.5,11.5 6.5,12.5 6.5,12.5C6.5,12.5 7.5,12.5 8,13.5C8.5,14.5 8,16 8,16.5C8,17 7.5,17 7,17C6.5,17 6,16.5 5,16.5C4,16.5 3.5,17.5 3.5,18.5C3.5,19.5 5,20.5 7.5,20.5C10,20.5 13.5,20 16,19C17,18.5 19,18.5 19,17.5Z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-value">{{ profile.experienceYears }}+ Yrs</span>
                <span class="stat-label">Competitive Practice</span>
              </div>
            </div>

            <!-- Stat Card 3: Location -->
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <!-- Map Pin SVG Icon -->
                <svg viewBox="0 0 24 24" width="32" height="32" class="stat-icon">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-value">{{ profile.city }}</span>
                <span class="stat-label">{{ profile.country }}</span>
              </div>
            </div>

            <!-- Stat Card 4: Play Style -->
            <div class="stat-card">
              <div class="stat-icon-wrapper">
                <!-- Chess Queen SVG Icon -->
                <svg viewBox="0 0 24 24" width="32" height="32" class="stat-icon">
                  <path fill="currentColor" d="M18,17H6V15H18V17M12,3L15.3,8.3L21,6L19,13H5L3,6L8.7,8.3L12,3M12,19C12.55,19 13,19.45 13,20C13,20.55 12.55,21 12,21C11.45,21 11,20.55 11,20C11,19.45 11.45,19 12,19Z"/>
                </svg>
              </div>
              <div class="stat-info">
                <span class="stat-value">Tactical</span>
                <span class="stat-label">Preferred Chess Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: rgba(22, 22, 22, 0.4);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

.about-subtitle {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.about-paragraph {
  color: var(--color-text-secondary);
  font-size: 1.05rem;
  margin-bottom: 20px;
  line-height: 1.8;
}

.education-details {
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--color-primary);
  padding: 20px;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  margin-top: 30px;
}

.details-heading {
  font-size: 1.15rem;
  color: var(--color-text);
  margin-bottom: 15px;
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.details-list {
  list-style: none;
}

.details-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-secondary);
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.details-list li:last-child {
  margin-bottom: 0;
}

.bullet-gold {
  width: 6px;
  height: 6px;
  background-color: var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color-primary);
  display: inline-block;
  flex-shrink: 0;
}

/* Stats column styles */
.about-stats-col {
  width: 100%;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.stat-card {
  background-color: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: var(--border-radius);
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: var(--transition-smooth);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-primary-semi);
  background-color: rgba(30, 30, 30, 0.9);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 12px var(--color-primary-glow);
}

.stat-icon-wrapper {
  width: 56px;
  height: 56px;
  background-color: rgba(212, 175, 55, 0.08);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: var(--transition-smooth);
}

.stat-card:hover .stat-icon-wrapper {
  background-color: var(--color-primary);
  color: #000000;
  box-shadow: 0 0 12px var(--color-primary);
  transform: scale(1.05);
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: var(--font-body);
  color: var(--color-text);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Tablet & Mobile responsive */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}

@media (max-width: 576px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .stat-card {
    flex-direction: row;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .stat-icon-wrapper {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }
  
  .stat-value {
    font-size: 1.5rem;
  }
}
</style>
