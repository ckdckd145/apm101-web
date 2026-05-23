import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Differentiation from '@/components/Differentiation';
import { siteConfig } from '@/config/siteConfig';

const { meta } = siteConfig;
const orgId = `${meta.domain}/#organization`;

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
};

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': orgId,
            name: meta.publisher,
            alternateName: meta.author,
            url: meta.domain,
            logo: {
                '@type': 'ImageObject',
                url: `${meta.domain}${meta.ogImage}`,
                width: 1200,
                height: 630,
            },
            contactPoint: {
                '@type': 'ContactPoint',
                email: siteConfig.company.email,
                contactType: 'customer support',
                availableLanguage: 'Korean',
            },
        },
        {
            '@type': 'WebSite',
            name: meta.siteName,
            url: meta.domain,
            description: meta.description,
            inLanguage: 'ko-KR',
            publisher: { '@id': orgId },
        },
        {
            '@type': 'MobileApplication',
            name: meta.siteName,
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'iOS, Android',
            description: meta.description,
            url: meta.domain,
            downloadUrl: [
                'https://apps.apple.com/kr/app/%EC%B0%A8%EA%B7%BC%EC%B0%A8%EA%B7%BC-%EC%9A%B0%EB%A6%AC-%EC%95%84%EC%9D%B4-%EC%84%B1%EC%9E%A5-%EB%8F%95%EB%8A%94-%EC%8A%B5%EA%B4%80-%ED%8C%8C%ED%8A%B8%EB%84%88/id6770039379',
                'https://play.google.com/store/apps/details?id=com.goodeonough.chacha',
            ],
            publisher: { '@id': orgId },
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 0) }}
            />
            <Hero />
            <Features />
            <Differentiation />
        </>
    );
}
