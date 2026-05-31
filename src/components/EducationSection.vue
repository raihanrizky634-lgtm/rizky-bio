<script setup>
import { computed } from 'vue'

const props = defineProps({
  education: {
    type: Array,
    required: true
  }
})

// Chess Piece SVGs mapping based on stage type
const getChessPiecePath = (piece) => {
  switch (piece) {
    case 'pawn':
      return 'M12 2a3 3 0 0 1 3 3 3 3 0 0 1-2.03 2.85c.67.22 1.25.64 1.69 1.18l.84-.83 1.42 1.42-1 .99c.35.53.58 1.15.58 1.83V14h-2v-1.5c0-.83-.67-1.5-1.5-1.5H11c-.83 0-1.5.67-1.5 1.5V14H7.5v-1.57c0-.68.23-1.3.58-1.83l-1-.99 1.42-1.42.84.83c.44-.54 1.02-.96 1.69-1.18A3 3 0 0 1 9 5a3 3 0 0 1 3-3m4 16H8v-2h8v2m3 4H5v-2h14v2Z';
    case 'knight':
      return 'M19,19H5V17H6.5V12L5,10L6,8L9,9.5L13,7.5L16,9.5L19,8L20,10L18.5,12V17H20V19H19Z M17,11C17,11 17.5,10.66 17.5,10C17.5,9.34 17,9 17,9C17,9 16.5,9.34 16.5,10C16.5,10.66 17,11 17,11 M16.5,15.5C16.5,15.5 16,15.83 16,16.5C16,17.17 16.5,17.5 16.5,17.5C16.5,17.5 17,17.17 17,16.5C17,15.83 16.5,15.5 16.5,15.5';
    case 'bishop':
      return 'M12 2C10.34 2 9 3.34 9 5c0 1.25.79 2.3 1.88 2.73C8.4 8.7 7 10.74 7 13c0 2.22 1.34 4.14 3.25 5H6v2h12v-2h-4.25C15.66 17.14 17 15.22 17 13c0-2.26-1.4-4.3-3.88-5.27C14.21 7.3 15 6.25 15 5c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z';
    case 'queen':
      return 'M18,22H6V20H18V22M19,8A1,1 0 1,0 19,6A1,1 0 0,0 19,8M5,8A1,1 0 1,0 5,6A1,1 0 0,0 5,8M12,4A1.5,1.5 0 1,0 12,1A1.5,1.5 0 0,0 12,4M17.5,10L14.7,18H9.3L6.5,10L3,13V15C3,16.1 3.9,17 5,17H19C20.1,17 21,16.1 21,15V13L17.5,10M12,6L9,12H15L12,6Z';
    default:
      return 'M12 2a3 3 0 0 1 3 3 3 3 0 0 1-2.03 2.85c.67.22 1.25.64 1.69 1.18V14h-2v-1.5H11V14H7.5v-1.57c0-.68.23-1.3.58-1.83A3 3 0 0 1 9 5a3 3 0 0 1 3-3m4 16H8v-2h8v2m3 4H5v-2h14v2Z';
  }
}
</script>

<template>
  <section id="education" class="education-section">
    <div class="container">
      <div class="section-title-wrapper">
        <h2 class="section-title">Education Pathway</h2>
        <p class="section-subtitle">A Chronological Journey of Academic & Strategic Growth</p>
      </div>

      <div class="education-timeline-container">
        <!-- The central spine line -->
        <div class="timeline-line"></div>

        <div 
          v-for="(item, index) in education" 
          :key="index"
          class="timeline-item"
          :class="{ 
            'left-align': index % 2 === 0, 
            'right-align': index % 2 !== 0,
            'active-stage': item.status === 'active',
            'future-stage': item.status === 'future'
          }"
        >
          <!-- Timeline Indicator Node Dot with chess pieces -->
          <div class="timeline-node">
            <div class="node-inner" :class="{ 'gold-glow': item.status === 'active' }">
              <svg viewBox="0 0 24 24" width="16" height="16" class="chess-icon">
                <path fill="currentColor" :d="getChessPiecePath(item.chessPiece)" />
              </svg>
            </div>
          </div>

          <!-- Timeline content card -->
          <div class="timeline-card-wrapper">
            <div class="timeline-card card" :class="{ 'active-card': item.status === 'active', 'future-card': item.status === 'future' }">
              <div class="card-header">
                <span class="stage-tag" :class="item.status">{{ item.stage }}</span>
                <span class="period-text">
                  <!-- Calendar icon -->
                  <svg viewBox="0 0 24 24" width="14" height="14" class="calendar-icon">
                    <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
                  </svg>
                  {{ item.period }}
                </span>
              </div>
              
              <h3 class="school-name">
                {{ item.school }}
                <span v-if="item.status === 'active'" class="active-pulse">
                  <span class="pulse-dot"></span>
                  Currently Enrolled
                </span>
                <span v-if="item.status === 'future'" class="future-badge">
                  <!-- Lock/Promotion icon -->
                  <svg viewBox="0 0 24 24" width="12" height="12" class="lock-icon">
                    <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                  </svg>
                  Pawn Promotion Goal
                </span>
              </h3>
              
              <p class="stage-description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  background-color: rgba(12, 12, 12, 0.6);
  position: relative;
  overflow: hidden;
}

/* Subtle Board Grid Background overlay for Education specifically */
.education-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px);
  background-size: 24px 24px;
  pointer-events: none;
  z-index: 1;
}

.education-timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
  z-index: 2;
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
    rgba(212, 175, 55, 0.4) 10%, 
    rgba(212, 175, 55, 0.4) 90%, 
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
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #0c0c0c;
  border: 2px solid rgba(212, 175, 55, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: var(--transition-smooth);
}

.timeline-item.left-align .timeline-node {
  right: -19px;
}

.timeline-item.right-align .timeline-node {
  left: -19px;
}

.node-inner {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: var(--transition-smooth);
}

.chess-icon {
  transition: var(--transition-smooth);
}

/* Timeline status styling */
.active-stage .timeline-node {
  border-color: var(--color-primary);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

.active-stage .node-inner {
  background-color: rgba(212, 175, 55, 0.15);
  color: var(--color-primary);
  border-color: rgba(212, 175, 55, 0.3);
}

.future-stage .timeline-node {
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.2);
}

.future-stage .node-inner {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.25);
  border-style: dashed;
}

/* Hover effects */
.timeline-item:hover .timeline-node {
  transform: scale(1.1);
  border-color: var(--color-primary);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.6);
}

.timeline-item:hover .node-inner {
  background-color: var(--color-primary);
  color: #0c0c0c;
  border-color: var(--color-primary);
}

.timeline-item:hover .chess-icon {
  transform: rotate(5deg) scale(1.1);
}

/* Cards positioning */
.timeline-card-wrapper {
  width: 100%;
  max-width: 440px;
}

.timeline-card {
  padding: 26px;
  position: relative;
  background-color: var(--color-surface);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Card states */
.active-card {
  border-color: rgba(212, 175, 55, 0.4);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(212, 175, 55, 0.08);
}

.active-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, var(--color-primary), #f3e5ab);
}

.future-card {
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.15);
  background-color: rgba(22, 22, 22, 0.3);
  opacity: 0.85;
}

.future-card:hover {
  opacity: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.stage-tag {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--color-text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.stage-tag.completed {
  color: #4caf50;
  background-color: rgba(76, 175, 80, 0.08);
  border-color: rgba(76, 175, 80, 0.15);
}

.stage-tag.active {
  color: var(--color-primary);
  background-color: rgba(212, 175, 55, 0.08);
  border-color: rgba(212, 175, 55, 0.2);
}

.stage-tag.future {
  color: #9c27b0;
  background-color: rgba(156, 39, 176, 0.08);
  border-color: rgba(156, 39, 176, 0.2);
}

.period-text {
  font-size: 0.82rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.calendar-icon {
  color: rgba(255, 255, 255, 0.3);
}

.active-stage:hover .calendar-icon {
  color: var(--color-primary-semi);
}

.school-name {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 12px;
  line-height: 1.4;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.active-pulse {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-primary);
  font-family: var(--font-body);
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
  animation: pulse 1.6s infinite;
}

.future-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #9c27b0;
  font-family: var(--font-body);
}

.lock-icon {
  color: #9c27b0;
}

.stage-description {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(212, 175, 55, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
  }
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
    left: 1px; /* align with spine line */
  }
  
  .timeline-card-wrapper {
    max-width: 100%;
  }
}
</style>
