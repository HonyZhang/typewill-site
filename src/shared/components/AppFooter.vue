<!-- shared/components/AppFooter.vue -->
<script setup lang="ts">
import { defineOptions } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemeToggle from './ThemeToggle.vue'
import LanguageToggle from './LanguageToggle.vue'
import Logo from './icons/Logo.vue'

defineOptions({
  name: 'AppFooter'
})

const { t } = useI18n()

const footerLinks = [
  {
    title: t('footer.product.title'),
    links: [
      { text: t('footer.product.features'), href: '/#features' },
      { text: t('footer.product.pricing'), href: '/pricing' },
      { text: t('footer.product.docs'), href: '/docs' },
      { text: t('footer.product.changelog'), href: '/changelog' }
    ]
  },
  {
    title: t('footer.company.title'),
    links: [
      { text: t('footer.company.about'), href: '/about' },
      { text: t('footer.company.blog'), href: '/blog' },
      { text: t('footer.company.careers'), href: '/careers' },
      { text: t('footer.company.contact'), href: '/contact' }
    ]
  },
  {
    title: t('footer.resources.title'),
    links: [
      { text: t('footer.resources.community'), href: '/community' },
      { text: t('footer.resources.github'), href: 'https://github.com/your-org/your-repo' },
      { text: t('footer.resources.discord'), href: 'https://discord.gg/your-invite' },
      { text: t('footer.resources.twitter'), href: 'https://twitter.com/your-handle' }
    ]
  },
  {
    title: t('footer.legal.title'),
    links: [
      { text: t('footer.legal.privacy'), href: '/privacy' },
      { text: t('footer.legal.terms'), href: '/terms' },
      { text: t('footer.legal.license'), href: '/license' },
      { text: t('footer.legal.security'), href: '/security' }
    ]
  }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer p-10 bg-base-200 text-base-content">
    <aside class="w-full md:w-auto">
      <router-link
        to="/"
        class="flex items-center gap-2 mb-4"
      >
        <logo class-list="w-10 h-10" />
        <span class="text-2xl font-bold">{{ t('common.logo') }}</span>
      </router-link>
      <p class="max-w-xs">
        {{ t('footer.description') }}
      </p>
      <div class="flex gap-4 mt-4">
        <theme-toggle />
        <language-toggle />
      </div>
    </aside>

    <div
      v-for="section in footerLinks"
      :key="section.title"
      class="w-full md:w-auto"
    >
      <h6 class="footer-title">{{ section.title }}</h6>
      <ul>
        <li
          v-for="link in section.links"
          :key="link.text"
          class="mb-2"
        >
          <component
            :is="link.href.startsWith('http') ? 'a' : 'router-link'"
            :to="link.href.startsWith('http') ? undefined : link.href"
            :href="link.href.startsWith('http') ? link.href : undefined"
            target="link.href.startsWith('http') ? '_blank' : undefined"
            rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="link link-hover"
          >
            {{ link.text }}
          </component>
        </li>
      </ul>
    </div>
  </footer>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <aside>
      <p>{{ t('footer.copyright', { year: currentYear }) }}</p>
    </aside>
  </footer>
</template>
