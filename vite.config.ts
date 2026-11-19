import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      build: {
        rollupOptions: {
          // 메인 페이지 + 서비스 상세 페이지(정적 HTML)
          input: {
            main: path.resolve(__dirname, 'index.html'),
            ...Object.fromEntries(
              ['hardware', 'firmware', 'mobile-app', 'embedded-linux', 'pc-software'].map(slug => [
                `services-${slug}`,
                path.resolve(__dirname, `services/${slug}/index.html`),
              ])
            ),
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
