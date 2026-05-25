<script setup>
import { Github, ExternalLink } from 'lucide-vue-next'

const year = new Date().getFullYear()

const links = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/San-Andreas-Online' },
  { icon: ExternalLink, label: 'TextDraw Editor', href: '#' },
]
</script>

<template>
  <footer style="background: #080808; border-top: 1px solid rgba(255,255,255,0.05);">
    <div style="max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.5rem;">
      <!-- Logo -->
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <img src="@/assets/sao-logo.png" style="width: 2.25rem; height: 2.25rem; border-radius: 4px;" />
        <span style="font-family: Tahoma, Geneva, sans-serif; font-weight: 700; font-size: 1rem; color: #fff; letter-spacing: 0.02em;">San Andreas Online</span>
      </div>

      <!-- Nav -->
      <nav style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem;">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <component :is="link.icon" :size="14" />
          {{ link.label }}
        </a>
      </nav>

      <!-- Copyright -->
      <p style="font-family: Tahoma, Geneva, sans-serif; font-size: 0.75rem; color: #333;">
        &copy; {{ year }} San Andreas Online
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-family: Tahoma, Geneva, sans-serif;
  font-size: 0.875rem;
  color: #555;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover { color: #C80041; }
</style>
