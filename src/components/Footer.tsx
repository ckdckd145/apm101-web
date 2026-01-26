import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="space-y-4">
                        <div className="text-slate-400 text-xs" suppressHydrationWarning>
                            &copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
                        </div>
                        <div className="space-y-1 text-sm text-slate-500">
                            <h3 className="font-bold text-slate-700">
                                <Link href="https://www.goodenoughofficial.com/" target="_blank" rel="noopener noreferrer">
                                    {siteConfig.company.name}
                                </Link>
                            </h3>
                            <p>대표 {siteConfig.company.ceo}</p>
                            <p>사업자등록번호 {siteConfig.company.registrationNumber}</p>
                            <p>주소 {siteConfig.company.address}</p>
                            <p>전화번호 {siteConfig.company.phone}</p>
                            <p>메일 {siteConfig.company.email}</p>
                        </div>
                    </div>

                    <div className="flex gap-6 items-start">
                        {siteConfig.footer.links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
