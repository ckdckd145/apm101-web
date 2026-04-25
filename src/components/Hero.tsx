"use client";

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

export default function Hero() {
    const { title, subtitle, badges } = siteConfig.hero;
    const [titleFirstLine, titleSecondLine] = title.split('\n');

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
                    <div className="opacity-40 grayscale cursor-not-allowed" aria-hidden="true">
                        <img
                            src={`${siteConfig.basePath}/images/badges/app-store-badge.svg`}
                            alt="App Store"
                            className="h-11 w-auto pointer-events-none"
                        />
                    </div>
                    <div className="opacity-40 grayscale cursor-not-allowed" aria-hidden="true">
                        <img
                            src={`${siteConfig.basePath}/images/badges/google-play-badge.svg`}
                            alt="Google Play"
                            className="h-11 w-auto pointer-events-none"
                        />
                    </div>
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
