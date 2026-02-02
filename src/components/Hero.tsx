"use client";

import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { sendGAEvent } from '@next/third-parties/google';
import SmartImage from './SmartImage';

export default function Hero() {
    const { title, subtitle, badges } = siteConfig.hero;

    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-b from-primary-50 to-white">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-6">
                {/* Left Content */}
                <div className="flex-1 md:flex-[1.5] space-y-8 text-center md:text-left">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        {badges.map((badge, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white border border-primary-100 text-primary-600 text-xs font-semibold rounded-full shadow-sm">
                                {badge}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight whitespace-pre-wrap">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 whitespace-pre-wrap">
                        {subtitle}
                    </p>
                    <div className="flex flex-col gap-3 pt-4 items-center md:items-start">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-slate-600 font-bold text-lg">
                                앱 준비 중입니다. 곧 만나요! 🚀
                            </span>
                            <a
                                href="https://forms.gle/1NFrkKBisxZxLGB39"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors shadow-sm active:scale-95 flex items-center justify-center whitespace-nowrap"
                                onClick={() => sendGAEvent('event', 'hero_beta_apply_click')}
                            >
                                베타 테스터 지원하기
                            </a>
                        </div>
                        <div className="flex gap-3">
                            {/* Store Badges */}
                            <div className="opacity-40 grayscale cursor-not-allowed" aria-hidden="true">
                                <img src={`${siteConfig.basePath}/images/badges/app-store-badge.svg`} alt="App Store" className="h-12 w-auto pointer-events-none" />
                            </div>
                            <div className="opacity-40 grayscale cursor-not-allowed" aria-hidden="true">
                                <img src={`${siteConfig.basePath}/images/badges/google-play-badge.svg`} alt="Google Play" className="h-12 w-auto pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Video/Image Placeholder */}
                <div className="flex-1 w-full max-w-md md:max-w-full">
                    <SmartImage
                        src="/images/bi_full.png"
                        alt="차근차근 BI"
                        fallbackLabel="차근차근"
                        className="aspect-[9/16] w-[280px] mx-auto md:w-[320px] rounded-[2.5rem] shadow-2xl border-8 border-slate-900 bg-white"
                        imgClassName="object-contain p-8"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
