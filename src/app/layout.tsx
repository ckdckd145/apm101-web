import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BetaTestModal from "@/components/BetaTestModal";
import { GoogleAnalytics } from '@next/third-parties/google';

const { meta } = siteConfig;
const ogImageUrl = `${meta.domain}${meta.ogImage}`;

export const metadata: Metadata = {
    metadataBase: new URL(meta.domain),
    title: {
        default: meta.title,
        template: `%s | ${meta.siteName}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    creator: meta.creator,
    publisher: meta.publisher,
    openGraph: {
        type: "website",
        locale: "ko_KR",
        siteName: meta.siteName,
        title: meta.title,
        description: meta.description,
        url: meta.domain,
        images: [
            {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: meta.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.description,
        images: [ogImageUrl],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
    formatDetection: {
        telephone: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                    {/* <BetaTestModal /> */}
                </div>
                <GoogleAnalytics gaId="G-2R2VEY4YRC" />
            </body>
        </html>
    );
}
