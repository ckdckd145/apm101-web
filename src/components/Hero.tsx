"use client";

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function Hero() {
    const { title, subtitle, badges } = siteConfig.hero;
    const [titleFirstLine, titleSecondLine] = title.split('\n');
    const appStoreUrl = "https://apps.apple.com/kr/app/%EC%B0%A8%EA%B7%BC%EC%B0%A8%EA%B7%BC-%EC%9A%B0%EB%A6%AC-%EC%95%84%EC%9D%B4-%EC%84%B1%EC%9E%A5-%EB%8F%95%EB%8A%94-%EC%8A%B5%EA%B4%80-%ED%8C%8C%ED%8A%B8%EB%84%88/id6770039379";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.goodeonough.chacha";

    return (
        <section className="relative overflow-hidden pt-28 pb-0 md:pt-40 md:pb-0 bg-gradient-to-b from-[#EEF7FF] via-white to-white">
            <div className="absolute bottom-[-18%] left-1/2 h-[56%] w-[190vw] -translate-x-1/2 rounded-t-[50%] bg-[#EFF6FF]" aria-hidden="true" />
            <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">

                {/* Brand */}
                <div className="mb-12 flex items-center justify-center gap-2.5 md:mb-14 md:gap-3">
                    <Image
                        src={`${siteConfig.basePath}/images/bi_icon.png`}
                        alt=""
                        width={638}
                        height={648}
                        className="h-10 w-auto md:h-[54px]"
                        priority
                    />
                    <Image
                        src={`${siteConfig.basePath}/images/bi_text.png`}
                        alt="차근차근"
                        width={759}
                        height={252}
                        className="h-8 w-auto md:h-[42px]"
                        priority
                    />
                </div>

                {/* Title */}
                <h1 className="mb-10 text-[2rem] font-extrabold leading-[1.22] tracking-normal md:text-[3.35rem]">
                    <span className="block text-[#4C82EA]">{titleFirstLine}</span>
                    <span className="block text-[#242424]">{titleSecondLine}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-slate-600 max-w-4xl whitespace-pre-wrap mb-8">
                    {subtitle}
                </p>

                {/* Store Badges */}
                <div className="flex gap-3 mb-12 md:mb-16">
                    <a
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="App Store에서 차근차근 다운로드"
                        className="transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4C82EA] focus:ring-offset-2"
                    >
                        <img
                            src={`${siteConfig.basePath}/images/badges/app-store-badge.svg`}
                            alt="App Store"
                            className="h-11 w-auto"
                        />
                    </a>
                    <a
                        href={playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Google Play에서 차근차근 다운로드"
                        className="transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4C82EA] focus:ring-offset-2"
                    >
                        <img
                            src={`${siteConfig.basePath}/images/badges/google-play-badge.svg`}
                            alt="Google Play"
                            className="h-11 w-auto"
                        />
                    </a>
                </div>

                {/* Phone mockup — centered, badges float to the right via absolute */}
                <div className="-mb-12 flex justify-center md:-mb-16">
                    <div className="relative">
                        <div className="absolute left-[-12px] top-[18%] z-10 h-10 w-[5px] rounded-l-full bg-[#3D4148] md:left-[-15px] md:h-12" />
                        <div className="absolute left-[-12px] top-[30%] z-10 h-12 w-[5px] rounded-l-full bg-[#3D4148] md:left-[-15px] md:h-16" />
                        <div className="absolute right-[-12px] top-[33%] z-10 h-16 w-[5px] rounded-r-full bg-[#3D4148] md:right-[-15px] md:h-20" />

                        {/* Phone Frame — this element defines the center */}
                        <div className="relative aspect-[9/16] w-[220px] overflow-hidden rounded-[2rem] border-[7px] border-[#3D4148] bg-white sm:w-[260px] md:w-[300px] md:rounded-[2.6rem] md:border-[9px]">
                            <Image
                                src={`${siteConfig.basePath}/images/bi_full.png`}
                                alt="차근차근"
                                fill
                                className="object-contain p-8 md:p-10"
                                priority
                            />
                            <div className="absolute -top-[1px] left-1/2 h-[18px] w-[88px] -translate-x-1/2 rounded-b-2xl bg-[#3D4148] md:h-[22px] md:w-[112px]" />
                        </div>

                        {/* Badge pills — absolutely positioned to the right of the phone */}
                        <div className="absolute left-full top-[30%] hidden pl-8 md:flex flex-col gap-6">
                            {badges.map((badge, idx) => (
                                <span
                                    key={idx}
                                    className="block whitespace-nowrap rounded-xl bg-[#DEECFE] px-7 py-4 text-[1.55rem] leading-none text-[#4C82EA]"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
