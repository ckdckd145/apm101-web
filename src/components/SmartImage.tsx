"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface SmartImageProps {
    src?: string; // The filename in public/assets/imported or specific path
    alt: string;
    fallbackLabel: string;
    className?: string;
    priority?: boolean;
}

const SmartImage: React.FC<SmartImageProps> = ({ src, alt, fallbackLabel, className, priority }) => {
    const [error, setError] = useState(false);

    // If no src is provided, or if we encountered an error loading the image
    if (!src || error) {
        return (
            <div className={`bg-slate-200 flex items-center justify-center text-slate-400 font-medium ${className}`}>
                <span>{fallbackLabel}</span>
            </div>
        );
    }

    // Construct path: assuming synced assets live in /assets/imported/
    // If src is already a full path (e.g. starting with /), use it as is.
    const imagePath = src.startsWith('/') ? src : `/assets/imported/${src}`;

    return (
        <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
            <Image
                src={imagePath}
                alt={alt}
                fill
                className="object-cover"
                onError={() => setError(true)}
                priority={priority}
                unoptimized // Simplify for local assets without complex loader config
            />
        </div>
    );
};

export default SmartImage;
