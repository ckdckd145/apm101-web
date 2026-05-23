import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/siteConfig';

export const dynamic = 'force-static';

const disallowBotUserAgentList = [
    'A6-Indexer',
    'AlphaSeoBot',
    'AlphaSeoBot-SA',
    'AspiegelBot',
    'barkrowler',
    'Blackboard Safeassign',
    'BLEXBot',
    'Bytespider',
    'crawler4j',
    'DataForSeoBot',
    'DotBot',
    'Gigabot',
    'LieBaoFast',
    'MauiBot',
    'MauiBot (crawler.feedback+wc@gmail.com)',
    'MegaIndex.ru/2.0',
    'MqqBrowser',
    'Nimbostratus-Bot/v1.3.2',
    'Qwant-news',
    'Qwantify',
    'Seekport Crawler',
    'SemrushBot',
    'SemrushBot-SA',
    'SeznamBot',
    'SputnikBot/2.3',
    'The Knowledge AI',
    'Timpibot/0.8',
    'TinyTestBot',
    'UCBrowser',
    'yacybot',
    'YandexBot',
    'YandexBot/3.0',
    'YisouSpider',
];

export default function robots(): MetadataRoute.Robots {
    const { domain } = siteConfig.meta;

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            ...disallowBotUserAgentList.map((userAgent) => ({
                userAgent,
                disallow: '/',
            })),
        ],
        sitemap: `${domain}/sitemap.xml`,
    };
}
