import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/siteConfig';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.meta.domain,
            lastModified: new Date('2025-05-23'),
            changeFrequency: 'weekly',
            priority: 1,
        },
    ];
}
