<script setup>
defineProps({
  tournaments: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section id="tournaments" class="tournaments-section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Tournament History</h2>
        <p class="section-subtitle">A Chronicle of Competitive Battles & Match History</p>
      </div>

      <div class="timeline-container">
        <!-- The central spine line -->
        <div class="timeline-line"></div>

        <div 
          v-for="(tournament, index) in tournaments" 
          :key="index"
          class="timeline-item"
          :class="{ 'left-align': index % 2 === 0, 'right-align': index % 2 !== 0 }"
        >
          <!-- Timeline Indicator Node Dot -->
          <div class="timeline-node">
            <div class="node-inner">
              <!-- Inline SVG Chess Pawn inside the node dot -->
              <svg viewBox="0 0 24 24" width="12" height="12" class="pawn-icon">
                <path fill="currentColor" d="M12 2a3 3 0 0 1 3 3 3 3 0 0 1-2.03 2.85c.67.22 1.25.64 1.69 1.18l.84-.83 1.42 1.42-1 .99c.35.53.58 1.15.58 1.83V14h-2v-1.5c0-.83-.67-1.5-1.5-1.5H11c-.83 0-1.5.67-1.5 1.5V14H7.5v-1.57c0-.68.23-1.3.58-1.83l-1-.99 1.42-1.42.84.83c.44-.54 1.02-.96 1.69-1.18A3 3 0 0 1 9 5a3 3 0 0 1 3-3m4 16H8v-2h8v2m3 4H5v-2h14v2Z"/>
              </svg>
            </div>
          </div>

          <!-- Timeline content card -->
          <div class="timeline-card-wrapper">
            <div class="timeline-card card">
              <div class="card-header">
                <span class="tournament-year">{{ tournament.year }}</span>
                <span class="tournament-location">
                  <!-- Pin icon -->
                  <svg viewBox="0 0 24 24" width="14" height="14" class="loc-icon">
                    <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                  </svg>
                  {{ tournament.location }}
                </span>
              </div>
              
              <h3 class="tournament-name">{{ tournament.name }}</h3>
              
              <div class="tournament-result-badge">
                <span class="result-label">Result:</span>
                <span class="result-value">{{ tournament.result }}</span>
              </div>
              
              <p class="tournament-notes" v-if="tournament.notes">
                {{ tournament.notes }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tournaments-section {
  background-color: rgba(22, 22, 22, 0.4);
}

.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
}

/* Spine line */
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(to bottom, 
    rgba(212, 175, 55, 0) 0%, 
    rgba(212, 175, 55, 0.3) 10%, 
    rgba(212, 175, 55, 0.3) 90%, 
    rgba(212, 175, 55, 0) 100%
  );
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  z-index: 2;
  display: flex;
  box-sizing: border-box;
}

/* Align columns */
.timeline-item.left-align {
  left: 0;
  justify-content: flex-end;
}

.timeline-item.right-align {
  left: 50%;
  justify-content: flex-start;
}

/* Timeline nodes */
.timeline-node {
  position: absolute;
  top: 35px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #0c0c0c;
  border: 2px solid rgba(212, 175, 55, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: var(--transition-smooth);
}

.timeline-item.left-align .timeline-node {
  right: -14px;
}

.timeline-item.right-align .timeline-node {
  left: -14px;
}

.node-inner {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: rgba(212, 175, 55, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  transition: var(--transition-smooth);
}

.pawn-icon {
  opacity: 0;
  transition: var(--transition-smooth);
}

/* Hover effects on items */
.timeline-item:hover .timeline-node {
  border-color: var(--color-primary);
  box-shadow: 0 0 15px var(--color-primary);
  transform: translateY(-50%) scale(1.15) translateY(45%); /* maintain position offset while scaling */
}

.timeline-item:hover .node-inner {
  background-color: var(--color-primary);
  color: #000000;
  width: 20px;
  height: 20px;
}

.timeline-item:hover .pawn-icon {
  opacity: 1;
}

/* Cards positioning */
.timeline-card-wrapper {
  width: 100%;
  max-width: 440px;
}

.timeline-card {
  padding: 24px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.tournament-year {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary);
  background-color: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.2);
  padding: 4px 10px;
  border-radius: 20px;
}

.tournament-location {
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 5px;
}

.loc-icon {
  color: var(--color-primary-semi);
}

.tournament-name {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 12px;
  line-height: 1.4;
  font-weight: 600;
}

.tournament-result-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.result-label {
  color: var(--color-text-secondary);
}

.result-value {
  color: #ffffff;
  font-weight: 600;
}

.tournament-notes {
  font-size: 0.88rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 12px;
  margin-top: 8px;
}

/* Tablet & Mobile responsive - Timeline collapses to one side */
@media (max-width: 768px) {
  .timeline-line {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 55px;
    padding-right: 0;
  }

  .timeline-item.left-align {
    left: 0;
    justify-content: flex-start;
  }

  .timeline-item.right-align {
    left: 0;
    justify-content: flex-start;
  }

  .timeline-item.left-align .timeline-node,
  .timeline-item.right-align .timeline-node {
    left: 6px; /* align with spine line */
  }
  
  .timeline-card-wrapper {
    max-width: 100%;
  }
}
</style>
