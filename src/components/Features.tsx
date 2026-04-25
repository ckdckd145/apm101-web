"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import SmartImage from './SmartImage';
import ReactMarkdown from 'react-markdown';

type Feature = typeof siteConfig.features[0];

const SECTION_THEMES = [
    {
        background: '#EAF8EB',
        accent: '#43B56D',
        card: '#FFFFFF',
    },
    {
        background: '#EEF5FF',
        accent: '#2F80ED',
        card: '#DDEEFF',
    },
    {
        background: '#EAF8EB',
        accent: '#43B56D',
        card: '#FFFFFF',
    },
    {
        background: '#EEF5FF',
        accent: '#2F80ED',
        card: '#DDEEFF',
    },
];

function renderTitle(title: string, highlight: string, highlightColor = '#0284c7') {
    if (!highlight) return <span className="whitespace-pre-wrap">{title}</span>;
    const parts = title.split(highlight);
    if (parts.length === 1) return <span className="whitespace-pre-wrap">{title}</span>;
    return (
        <span className="whitespace-pre-wrap">
            {parts[0]}
            <span style={{ color: highlightColor }}>{highlight}</span>
            {parts.slice(1).join(highlight)}
        </span>
    );
}

const PhoneCarousel = ({ feature, idx }: { feature: Feature; idx: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const imageSources = feature.imageExtensions.map(
        (extension, imageIdx) => `/images/examples/function${idx + 1}_${imageIdx + 1}.${extension}`,
    );

    useEffect(() => {
        if (imageSources.length <= 1 || isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % imageSources.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [imageSources.length, isPaused]);

    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) { setIsPaused(false); return; }
        const distance = touchStart - touchEnd;
        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                setCurrentIndex((prev) => (prev + 1) % imageSources.length);
            } else {
                setCurrentIndex((prev) => (prev - 1 + imageSources.length) % imageSources.length);
            }
        }
        setIsPaused(false);
    };

    return (
        <div className="flex-none flex justify-center">
            <div className="relative h-[356px] w-[180px] sm:h-[427px] sm:w-[216px] md:h-[516px] md:w-[260px] lg:h-[587px] lg:w-[296px]">
                <div className="absolute left-[-12px] top-[18%] z-10 h-10 w-[5px] rounded-l-full bg-[#3D4148] md:left-[-15px] md:h-12" />
                <div className="absolute left-[-12px] top-[30%] z-10 h-12 w-[5px] rounded-l-full bg-[#3D4148] md:left-[-15px] md:h-16" />
                <div className="absolute right-[-12px] top-[33%] z-10 h-16 w-[5px] rounded-r-full bg-[#3D4148] md:right-[-15px] md:h-20" />
                {/* Phone Frame */}
                <div
                    className="relative h-full w-full overflow-hidden rounded-[2rem] border-[7px] border-[#3D4148] bg-[#E7E7E7] touch-pan-y md:rounded-[3rem] md:border-[9px]"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Camera Notch */}
                    <div className="absolute -top-[1px] left-1/2 z-10 h-[18px] w-[88px] -translate-x-1/2 rounded-b-2xl bg-[#3D4148] md:h-[22px] md:w-[112px]" />

                    {/* Carousel Track */}
                    <div
                        className="flex w-full h-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {imageSources.map((imgSrc, imgIdx) => (
                            <div key={imgIdx} className="w-full h-full flex-shrink-0">
                                <SmartImage
                                    src={imgSrc}
                                    alt={`${feature.title} - ${imgIdx + 1}`}
                                    fallbackLabel={feature.title}
                                    className="w-full h-full bg-[#E7E7E7]"
                                    imgClassName="object-cover object-top"
                                    priority={idx === 0 && imgIdx === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dot Indicators */}
                    {imageSources.length > 1 && (
                        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
                            {imageSources.map((_, dotIdx) => (
                                <div key={dotIdx} className={`h-1.5 w-1.5 rounded-full transition-colors ${dotIdx === currentIndex ? 'bg-[#3D4148]' : 'bg-slate-300/80'}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const FeatureSection = ({ feature, idx }: { feature: Feature; idx: number }) => {
    const isReversed = idx % 2 === 1;
    const theme = SECTION_THEMES[idx] ?? SECTION_THEMES[0];
    const labelClassName = 'text-[18px] font-bold leading-none';
    const titleClassName = 'mt-3 text-[1.55rem] font-bold leading-[1.28] tracking-normal text-[#17191D] md:text-[2rem]';
    const descriptionWrapperClassName = 'mt-8 w-full max-w-[440px] rounded-[16px] px-7 py-7 text-left md:mt-9 md:px-8 md:py-8';
    const descriptionClassName = 'text-[13px] leading-[1.85] text-[#17191D] md:text-[15px]';
    const descriptionParagraphClassName = 'mb-6 last:mb-0';
    const contentAlignClassName = isReversed ? 'items-center text-center md:items-end md:text-right' : 'items-center text-center md:items-start md:text-left';
    const gridClassName = isReversed
        ? 'md:grid-cols-[minmax(300px,420px)_minmax(0,1fr)]'
        : 'md:grid-cols-[minmax(0,1fr)_minmax(300px,420px)]';

    return (
        <section style={{ backgroundColor: theme.background }} className="py-24 md:py-32">
            <div className="mx-auto w-full max-w-[1040px] px-6 md:px-8">
                <div className={`grid grid-cols-1 items-center gap-14 md:gap-8 lg:gap-10 ${gridClassName}`}>

                    {/* Text Content */}
                    <div className={`flex w-full flex-col ${contentAlignClassName} ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                        <p className={labelClassName} style={{ color: theme.accent }}>
                            {feature.label}
                        </p>
                        <h2 className={titleClassName}>
                            {renderTitle(feature.title, feature.titleHighlight, theme.accent)}
                        </h2>
                        <div className={descriptionWrapperClassName} style={{ backgroundColor: theme.card }}>
                            <div className={descriptionClassName}>
                                <ReactMarkdown
                                    components={{
                                        p: ({ children }) => <p className={descriptionParagraphClassName}>{children}</p>,
                                        strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>,
                                    }}
                                >
                                    {feature.description.replace(/\n/g, '  \n')}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>

                    {/* Phone Carousel */}
                    <div className={isReversed ? 'md:order-1' : 'md:order-2'}>
                        <PhoneCarousel feature={feature} idx={idx} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Features() {
    return (
        <div>
            {siteConfig.features.map((feature, idx) => (
                <FeatureSection key={idx} feature={feature} idx={idx} />
            ))}
        </div>
    );
}
