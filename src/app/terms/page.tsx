import { getLegalDocument } from '@/lib/docs';
import MarkdownViewer from '@/components/MarkdownViewer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
    const content = getLegalDocument('terms');

    return (
        <div className="min-h-screen pt-24 pb-12 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    홈으로 돌아가기
                </Link>
                <div className="p-8 bg-white md:border md:border-slate-200 md:shadow-sm md:rounded-2xl">
                    <h1 className="text-3xl font-bold mb-8 text-slate-900">서비스 이용약관</h1>
                    <MarkdownViewer content={content} />
                </div>
            </div>
        </div>
    );
}
