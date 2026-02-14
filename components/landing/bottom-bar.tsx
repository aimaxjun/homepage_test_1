"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";

// ============================================
// 연락처/카톡 링크 교체 위치
// 아래 값을 실제 전화번호와 카카오톡 링크로 변경하세요
const PHONE_NUMBER = "tel:010-0000-0000";
const KAKAO_LINK = "https://open.kakao.com/o/PLACEHOLDER";
// ============================================

export function BottomBar() {
  const scrollToForm = () => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm"
      aria-label="하단 빠른 메뉴"
    >
      <div className="mx-auto flex max-w-lg items-stretch">
        <a
          href={PHONE_NUMBER}
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-foreground transition-colors hover:bg-accent/10"
          aria-label="전화 상담"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-medium">전화</span>
        </a>
        <a
          href={KAKAO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-3 text-foreground transition-colors hover:bg-accent/10"
          aria-label="카카오톡 상담"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-medium">카톡</span>
        </a>
        <button
          onClick={scrollToForm}
          className="flex flex-1 flex-col items-center justify-center gap-1 bg-primary py-3 text-primary-foreground transition-colors hover:bg-primary/90"
          aria-label="상담 신청하기"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs font-bold">신청하기</span>
        </button>
      </div>
    </nav>
  );
}
