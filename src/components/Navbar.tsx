"use client";

import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import { sendGAEvent } from '@next/third-parties/google';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex items-center">
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link href="/" className="font-bold text-xl text-slate-800 flex items-center gap-2">
                    <img src={`${siteConfig.basePath}/images/bi_icon.png`} alt="" className="w-10 h-10 object-contain" />
                    <img src={`${siteConfig.basePath}/images/bi_text.png`} alt={siteConfig.meta.title} className="h-6 w-auto" />
                </Link>
                <nav className="hidden md:flex gap-6">
                    {/* Navigation Items could go here */}
                    <a
                        href="#features"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                        onClick={() => sendGAEvent('event', 'navbar_features_click')}
                    >
                        기능
                    </a>
                    <a
                        href="#differentiation"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                        onClick={() => sendGAEvent('event', 'navbar_difference_click')}
                    >
                        차별점
                    </a>
                    <a
                        href="https://pf.kakao.com/_TWcxfn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                        onClick={() => sendGAEvent('event', 'navbar_inquire_click', { value: 'kakao' })}
                    >
                        문의하기
                    </a>
                </nav>
            </div>
        </header>
    );
}
