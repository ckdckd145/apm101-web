import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/siteConfig";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BetaTestModal from "@/components/BetaTestModal";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
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
        <html lang="kr" suppressHydrationWarning>
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
