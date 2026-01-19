import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import SmartImage from './SmartImage';

export default function Features() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 space-y-32">
                {siteConfig.features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Text Content */}
                        <div className="flex-1 space-y-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 whitespace-pre-wrap">
                                {feature.title}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
                                {feature.description}
                            </p>
                        </div>

                        {/* Image Placeholder */}
                        <div className="flex-1 w-full">
                            <SmartImage
                                src={`${feature.imagePlaceholder}.png`} // E.g. analysis_feature.png
                                alt={feature.title}
                                fallbackLabel={`${feature.title} Image`}
                                className="aspect-[4/3] rounded-2xl shadow-lg border border-slate-100"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
