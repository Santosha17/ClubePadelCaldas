import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    images: {
        // Breakpoints para mobile e desktop
        deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
        // Essencial para o logo: tamanhos de ícones pequenos
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        // Formatos modernos e leves
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
};

export default withNextIntl(nextConfig);