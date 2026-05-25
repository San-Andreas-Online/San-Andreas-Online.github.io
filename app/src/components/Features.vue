<script setup>
import { Globe, Zap, Radio } from 'lucide-vue-next'

const vision = [
  {
    icon: Globe,
    title: 'GTA Online Experience\nfor Everyone',
    description: 'The full Online experience — heists, jobs, open world chaos — running on San Andreas, for free. No high-end PC required.',
  },
  {
    icon: Zap,
    title: 'Pure Freeroam',
    description: 'Jump in, cause havoc, log off. No applications, no rulebooks, no drama.',
  },
  {
    icon: Radio,
    title: 'A World of Its Own',
    description: 'Custom radio stations, NPCs with purpose, an original storyline and an atmosphere that makes San Andreas feel alive again.',
  },
]

function onEnter(e) {
  const card = e.currentTarget
  card.style.borderColor = 'rgba(200,0,65,0.35)'
  card.style.boxShadow = '0 0 24px rgba(200,0,65,0.1)'
  const overlay = card.querySelector('.card-overlay')
  overlay.style.opacity = '1'
  overlay.style.transform = 'translateY(0)'
  overlay.style.pointerEvents = 'auto'
}

function onLeave(e) {
  const card = e.currentTarget
  card.style.borderColor = 'rgba(255,255,255,0.06)'
  card.style.boxShadow = 'none'
  const overlay = card.querySelector('.card-overlay')
  overlay.style.opacity = '0'
  overlay.style.transform = 'translateY(8px)'
  overlay.style.pointerEvents = 'none'
}
</script>

<template>
  <section style="padding: 3rem 1.5rem; background: #0a0a0a;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 4rem;">
        <p class="section-label">What we're building</p>
        <h2 class="section-title">San Andreas. No limits.</h2>
      </div>

      <!-- Cards -->
      <div class="cards-grid">
        <div
          v-for="v in vision"
          :key="v.title"
          class="feature-card"
          @mouseenter="onEnter"
          @mouseleave="onLeave"
        >
          <!-- Default: icon -->
          <div class="card-icon-wrap">
            <div class="card-icon-box">
              <component :is="v.icon" :size="28" color="#C80041" />
            </div>
          </div>

          <!-- Hover overlay -->
          <div class="card-overlay">
            <div class="card-overlay-icon">
              <component :is="v.icon" :size="16" color="#C80041" />
            </div>
            <h3 style="white-space: pre-line", class="card-title">{{ v.title }}</h3>
            
            <p class="card-desc">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-label {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #C80041;
  margin-bottom: 0.75rem;
}

.section-title {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  justify-items: center;
  max-width: 56rem;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); }
}

.feature-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.06);
  background: #0f0f0f;
  height: 180px;
  width: 100%;
  overflow: hidden;
  transition: border-color 0.3s, box-shadow 0.3s;
  cursor: default;
}

.card-icon-box {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(200,0,65,0.12);
}

.card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 1.5rem;
  background: rgba(15,15,15,0.97);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

.card-overlay-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(200,0,65,0.15);
  margin-bottom: 0.25rem;
}

.card-title {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
}

.card-desc {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.8rem;
  color: #666;
  line-height: 1.6;
}
</style>