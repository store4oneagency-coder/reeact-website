import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Reeact — E-réputation en ligne',
    short_name: 'Reeact',
    description: 'Surveillez et gérez votre réputation en ligne avec Reeact',
    start_url: '/',
    display: 'standalone',
    background_color: '#1B3645',
    theme_color: '#1B3645',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
