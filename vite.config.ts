import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function uploadHeroPlugin() {
  return {
    name: 'upload-hero-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/upload-hero-image', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => { body += chunk; });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              const imageBase64 = parsed.imageBase64;
              if (imageBase64) {
                const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                fs.mkdirSync('public/images', { recursive: true });
                fs.writeFileSync('public/images/hero-business-owner.jpg', buffer);
                if (fs.existsSync('dist/images')) {
                  fs.writeFileSync('dist/images/hero-business-owner.jpg', buffer);
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true, message: 'Hero image saved successfully' }));
                return;
              }
            } catch (err: any) {
              console.error('Error saving uploaded hero image:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid image data' }));
          });
        } else {
          res.writeHead(405);
          res.end();
        }
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), uploadHeroPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
