"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import SmartImage from './SmartImage';

import ReactMarkdown from 'react-markdown';

const FeatureItem = ({ feature, idx }: { feature: typeof siteConfig.features[0], idx: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Auto-slide effect
    useEffect(() => {
        if (!feature.images || feature.images.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % feature.images.length);
        }, 6000); // Change slide every 6 seconds

        return () => clearInterval(interval);
    }, [feature.images, isPaused]);

    // Swipe Threshold
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setIsPaused(true); // Pause on touch hold
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            // If just a tap or no move, just resume
            setIsPaused(false);
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe || isRightSwipe) {
            if (isLeftSwipe) {
                // Next image
                setCurrentIndex((prev) => (prev + 1) % feature.images.length);
            } else {
                // Prev image
                setCurrentIndex((prev) => (prev - 1 + feature.images.length) % feature.images.length);
            }
        }

        // Resume timer (effect will restart because isPaused changes to false)
        setIsPaused(false);
    };

    // Mouse handlers for desktop "hold" to pause
    const onMouseDown = () => setIsPaused(true);
    const onMouseUp = () => setIsPaused(false);
    const onMouseEnter = () => setIsPaused(true);
    const onMouseLeave = () => setIsPaused(false);

    return (
        <div className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className={`flex-1 space-y-6 text-center ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 whitespace-pre-wrap">
                    {feature.title}
                </h2>
                <div className="text-lg text-slate-600 leading-relaxed">
                    <ReactMarkdown
                        components={{
                            p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                            strong: ({ children }) => <strong className="font-bold text-slate-900">{children}</strong>
                        }}
                    >
                        {feature.description.replace(/\n/g, '  \n')}
                    </ReactMarkdown>
                </div>
            </div>

            {/* Image Carousel */}
            <div className="flex-1 w-full flex justify-center">
                <div
                    className="relative w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border border-slate-100 bg-slate-50 touch-pan-y"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div
                        className="flex w-full h-full transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {feature.images?.map((imgSrc, imgIdx) => (
                            <div key={imgIdx} className="w-full h-full flex-shrink-0">
                                <SmartImage
                                    src={imgSrc}
                                    alt={`${feature.title} - ${imgIdx + 1}`}
                                    fallbackLabel={`${feature.title} Image`}
                                    className="w-full h-full bg-slate-50"
                                    imgClassName="object-contain"
                                    priority={idx === 0 && imgIdx === 0} // Prioritize first image of first feature
                                />
                            </div>
                        ))}
                    </div>

                    {/* Optional: Navigation Dots for better UX */}
                    {feature.images && feature.images.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
                            {feature.images.map((_, dotIdx) => (
                                <div
                                    key={dotIdx}
                                    className={`w-2 h-2 rounded-full transition-colors ${dotIdx === currentIndex ? 'bg-slate-800' : 'bg-slate-300/80'
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 space-y-32">
                {siteConfig.features.map((feature, idx) => (
                    <FeatureItem key={idx} feature={feature} idx={idx} />
                ))}
            </div>
        </section>
    );
}
