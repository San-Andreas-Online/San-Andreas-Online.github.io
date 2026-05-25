<template>
  <section class="hero">
    <!-- Background effects -->
    <div class="bg-effects" aria-hidden="true">
      <div class="bg-glow" />
      <div class="bg-grid" />
      <div class="bg-fade-bottom" />
    </div>

    <div class="content">
      <!-- Title -->
      <h1 class="title">
        S a n &nbsp; A n d r e a s<br />
        <span style="color: #C80041;">O n l i n e</span>
      </h1>


      <p class="desc">
        Experience the ultimate SA-MP server with custom gamemodes, an active
        community, and tools built for players who demand more.
      </p>

      <!-- Buttons -->
      <div class="buttons">
        <a href="samp://localhost:7777" style="text-decoration: none;">
          <button class="btn-primary">Connect Now</button>
        </a>
      </div>

      <!-- Server info -->
      <div class="server-info">
        <div v-for="item in serverInfo" :key="item.label" class="info-item">
          <span class="info-label">{{ item.label }}</span>
          <span class="info-value">{{ item.value }}</span>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

const year = new Date().getFullYear()

const serverInfo = [
  { label: 'IP', value: 'play.saonline.gg' },
  { label: 'PORT', value: '7777' },
  { label: 'MODE', value: 'Roleplay / Freeroam' },
  { label: 'VERSION', value: '0.3.7-R4' },
]
</script>

<style scoped>
.hero {
  position: relative;
  padding: 8rem 0 4rem;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: #0a0a0a;
}

/* --- Background --- */
.bg-effects {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.bg-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 400px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.2;
  background: #C80041;
}
.bg-grid {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px);
  background-size: 60px 60px;
}
.bg-fade-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: linear-gradient(to top, #0a0a0a, transparent);
}

/* --- Content --- */
.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  max-width: 64rem;
  width: 100%;
}

.title {
  font-family: 'Pricedown', sans-serif;
  font-size: clamp(3rem, 8vw, 7rem);
  color: #fff;
  line-height: 0.6;
  letter-spacing: -15px;
  word-spacing: 1px;
  margin-bottom: 1rem;
}

.subtitle {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  color: #888;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.desc {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  max-width: 36rem;
  margin-bottom: 2.5rem;
}

/* --- Buttons --- */
.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  background: #C80041;
  color: #fff;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 24px rgba(200,0,65,0.4);
  transition: filter 0.2s, transform 0.1s;
}
.btn-primary:hover { filter: brightness(1.1); }
.btn-primary:active { transform: scale(0.95); }

.btn-secondary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  background: rgba(255,255,255,0.05);
  color: #ccc;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  text-decoration: none;
  transition: filter 0.2s, transform 0.1s;
}
.btn-secondary:hover { filter: brightness(1.25); }
.btn-secondary:active { transform: scale(0.95); }

/* --- Server info --- */
.server-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-family: Tahoma, Geneva, sans-serif;
}

.info-label {
  font-size: 0.7rem;
  color: #C80041;
  letter-spacing: 0.1em;
}

.info-value {
  font-size: 0.8rem;
  color: #999;
}

</style>
