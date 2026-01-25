"use client";

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/siteConfig';
import SmartImage from './SmartImage';

const FeatureItem = ({ feature, idx }: { feature: typeof siteConfig.features[0], idx: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!feature.images || feature.images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % feature.images.length);
        }, 6000); // Change slide every 6 seconds

        return () => clearInterval(interval);
    }, [feature.images]);

    return (
        <div className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 whitespace-pre-wrap">
                    {feature.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
                    {feature.description}
                </p>
            </div>

            {/* Image Carousel */}
            <div className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-2xl shadow-lg border border-slate-100 bg-slate-50">
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
                                />
                            </div>
                        ))}
                    </div>

                    {/* Optional: Navigation Dots for better UX */}
                    {feature.images && feature.images.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                            {feature.images.map((_, dotIdx) => (
                                <button
                                    key={dotIdx}
                                    className={`w-2 h-2 rounded-full transition-colors ${dotIdx === currentIndex ? 'bg-slate-800' : 'bg-slate-300/80'
                                        }`}
                                    onClick={() => setCurrentIndex(dotIdx)}
                                    aria-label={`Go to slide ${dotIdx + 1}`}
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
