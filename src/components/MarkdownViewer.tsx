import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

interface MarkdownViewerProps {
    content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
    const components: Partial<Components> = {
        a: ({ href, children, ...props }) => {
            const isExternal = href?.startsWith('http') || href?.startsWith('//');
            return (
                <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer noopener' : undefined}
                    className="text-primary-600 hover:text-primary-900 underline"
                    {...props}
                >
                    {children}
                </a>
            );
        },
        // Customize other elements explicitly if needed, but prose class handles most
    };

    return (
        <article className="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-primary-600">
            {/* 
        By default react-markdown does NOT render html. 
        We are NOT using rehype-raw, so this is safe from XSS via raw HTML.
      */}
            <ReactMarkdown components={components}>
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default MarkdownViewer;
