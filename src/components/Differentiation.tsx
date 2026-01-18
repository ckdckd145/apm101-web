import React from 'react';
import { siteConfig } from '@/config/siteConfig';
import { CheckCircle2 } from 'lucide-react';

export default function Differentiation() {
    return (
        <section id="differentiation" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
                    {siteConfig.differentiation.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {siteConfig.differentiation.items.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-slate-900">
                                {item}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-20">
                    <img src="/images/bi_full.png" alt="차근차근" className="w-48 md:w-64" />
                </div>
            </div>
        </section>
    );
}
