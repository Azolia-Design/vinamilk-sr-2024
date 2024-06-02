import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
    build: {
        // Example: Generate `page.html` instead of `page/index.html` during build.
        format: 'file'
    },
    i18n: {
        defaultLocale: "vn",
        locales: ["vn", "en"],
        routing: {
            prefixDefaultLocale: false
        }
    },
    integrations: [relativeLinks()],
})

