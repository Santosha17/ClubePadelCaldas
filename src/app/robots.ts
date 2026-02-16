import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // Substitui pelo teu domínio real quando tiveres um (ex: https://clubepadelcaldas.pt)
    const baseUrl = 'https://clubepadeldascaldas.vercel.app';

    return {
        rules: {
            userAgent: '*',     // Aplica-se a todos os robôs (Google, Bing, etc.)
            allow: '/',         // Permite indexar tudo
            disallow: '/private/', // (Opcional) Bloqueia pastas privadas, se tiveres
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}