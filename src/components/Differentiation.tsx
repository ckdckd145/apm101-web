import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

const iconFiles: Record<string, string> = {
    diff1: '/images/icons/diff1.png',
    diff2: '/images/icons/diff2.png',
    diff3: '/images/icons/diff3.png',
};

export default function Differentiation() {
    return (
        <section id="differentiation" className="py-24" style={{ backgroundColor: '#F5FAD4' }}>
            <div className="container mx-auto px-4 md:px-6">

                {/* Section Label */}
                <p className="text-sm text-green-500 text-center mb-2 text-[18px] font-semibold">
                    What&apos;s Different?
                </p>

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-14">
                    {siteConfig.differentiation.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[920px] mx-auto">
                    {siteConfig.differentiation.items.map((item, idx) => {
                        const iconSrc = iconFiles[item.icon] ?? null;

                        return (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full">
                                {/* Icon — top-right */}
                                <div className="flex justify-end mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        {iconSrc && (
                                            <Image src={iconSrc} alt={item.title} width={28} height={28} className="object-contain" />
                                        )}
                                    </div>
                                </div>

                                {/* Title — subtitle and title same styling */}
                                <div className="mb-4">
                                    {'subtitle' in item && (
                                        <h3 className="text-lg font-bold text-green-600 break-keep">
                                            {(item as { subtitle: string }).subtitle}
                                        </h3>
                                    )}
                                    <h3 className="text-lg font-bold text-green-600 break-keep">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-wrap break-keep">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
