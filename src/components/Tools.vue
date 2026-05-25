<template>
  <section style="padding: 7rem 1.5rem; background: #080808;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 4rem;">
        <p class="section-label">Developer Tools</p>
        <h2 class="section-title">TextDraw Editor</h2>
        <p class="section-desc">
          A browser-based visual editor for creating SA-MP TextDraws. Design
          your HUD visually and export clean PAWN code — no manual coordinate guessing.
        </p>
      </div>

      <!-- Two-column -->
      <div class="tools-grid">
        <!-- Image -->
        <div class="tools-image-wrap">
          <div style="border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08);">
            <img :src="editorScreenshot" alt="SAO TextDraw Editor screenshot" style="width: 100%; height: auto; display: block;" />
          </div>
        </div>

        <!-- Right -->
        <div class="tools-content">
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div v-for="f in toolFeatures" :key="f.text" style="display: flex; align-items: center; gap: 0.75rem;">
              <div style="width: 2rem; height: 2rem; border-radius: 4px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: rgba(200,0,65,0.1);">
                <component :is="f.icon" :size="15" color="#C80041" />
              </div>
              <span style="font-family: Tahoma, Geneva, sans-serif; font-size: 0.9rem; color: #aaa;">{{ f.text }}</span>
            </div>
          </div>

          <div style="margin-top: 1.5rem; padding: 1rem; border-radius: 8px; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06);">
            <p style="font-family: Tahoma, Geneva, sans-serif; font-size: 0.75rem; color: #555; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
              Open source — built for the SA-MP community
            </p>
            <p style="font-family: monospace; font-size: 0.75rem; color: #C80041;">
              github.com/saonline/textdraw-editor
            </p>
          </div>

          <a href="#" class="btn-open-editor">
            <ExternalLink :size="15" />
            Open Editor
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ExternalLink, MousePointer2, Layers, Palette, Code2 } from 'lucide-vue-next'
import editorScreenshot from '../assets/editor-screenshot.png'

const toolFeatures = [
  { icon: MousePointer2, text: 'Drag & drop element placement' },
  { icon: Layers, text: 'Multi-layer element management' },
  { icon: Palette, text: 'Live color & font preview' },
  { icon: Code2, text: 'Export ready-to-paste PAWN code' },
]
</script>

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

.section-desc {
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  max-width: 36rem;
  margin: 1rem auto 0;
}

.tools-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .tools-grid { grid-template-columns: 1fr 1fr; }
  .tools-image-wrap { order: 1; }
  .tools-content { order: 2; }
}

.tools-image-wrap { order: 2; }
.tools-content {
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.btn-open-editor {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  margin-top: 1.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  background: #C80041;
  color: #fff;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  box-shadow: 0 0 24px rgba(200,0,65,0.35);
  transition: filter 0.2s, transform 0.1s;
}
.btn-open-editor:hover { filter: brightness(1.1); }
.btn-open-editor:active { transform: scale(0.95); }
</style>
