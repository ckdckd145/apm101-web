"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function BetaTestModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [doNotShowToday, setDoNotShowToday] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Don't show modal on privacy or terms pages
        if (pathname?.startsWith('/privacy') || pathname?.startsWith('/terms')) {
            return;
        }

        // Check if modal should be hidden
        const hiddenUntil = localStorage.getItem('betaTestHiddenUntil');
        if (hiddenUntil) {
            const now = new Date().getTime();
            if (now < parseInt(hiddenUntil)) {
                return;
            }
        }

        // Show modal on mount (client-side only)
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        if (doNotShowToday) {
            // Set expiration to midnight tonight (tomorrow 00:00)
            const expiry = new Date();
            expiry.setHours(24, 0, 0, 0);
            localStorage.setItem('betaTestHiddenUntil', expiry.getTime().toString());
        }
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-800">베타테스트 안내사항</h2>
                    <button
                        onClick={handleClose}
                        className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-200"
                        aria-label="닫기"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
                    {/* Section 1: Schedule */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            일정: 1월 28일(수)부터 약 2주간 진행
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600 text-sm ml-2 marker:text-slate-400 marker:font-medium">
                            <li className="pl-1"><span className="font-medium text-slate-800">어플리케이션 &quot;차근차근&quot;</span> 일주일 사용</li>
                            <li className="pl-1"><span className="font-medium text-slate-800">굿이너프 1차 방문</span>: 아동 지능검사 + 사용성 인터뷰 1차</li>
                            <li className="pl-1"><span className="font-medium text-slate-800">굿이너프 2차 방문</span>: 아동 지능검사 해석상담 + 사용성 인터뷰 2차</li>
                        </ol>
                    </div>

                    {/* Section 2: Reward */}
                    <div className="space-y-3 pt-2 border-t border-slate-100">
                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            리워드: 아동용 웩슬러 지능검사 + 해석상담 무료 제공
                        </h3>
                        <ol className="list-decimal list-inside space-y-2 text-slate-600 text-sm ml-2 marker:text-slate-400 marker:font-medium">
                            <li className="pl-1">어플리케이션 "차근차근" 주 5일 이상 사용 필수</li>
                            <li className="pl-1">
                                굿이너프 방문 전까지 사용성 설문 완료 필수 (별도 전달)
                                {/* <div className="mt-2 p-3 bg-blue-50 rounded-lg text-blue-800 text-sm font-medium border border-blue-100 break-all">
                                    👉 설문링크: <span className="text-blue-600 underline cursor-pointer"></span>
                                    {/* Note: The user prompt had an empty link "(설문링크: )". I am leaving it empty but ready to be filled. */}
                                {/* </div> */}
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                            checked={doNotShowToday}
                            onChange={(e) => setDoNotShowToday(e.target.checked)}
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-800 select-none">오늘 하루 보지 않기</span>
                    </label>

                    <div className="flex gap-3 w-full sm:w-auto justify-end">
                        <button
                            onClick={handleClose}
                            className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium rounded-lg transition-colors shadow-sm active:scale-95"
                        >
                            닫기
                        </button>
                        <a
                            href="https://pf.kakao.com/_TWcxfn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm active:scale-95 flex items-center justify-center whitespace-nowrap"
                        >
                            문의하기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
