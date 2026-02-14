"use client";

import { Button } from "@/components/ui/button";
import { Search, ClipboardCheck, ArrowRight, MessageCircle } from "lucide-react";

// ============================================
// 연락처/카톡 링크 교체 위치
// 아래 URL을 실제 카카오톡 오픈채팅 링크로 변경하세요
const KAKAO_LINK = "https://open.kakao.com/o/PLACEHOLDER";
// ============================================

export function Hero() {
  const scrollToForm = () => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary px-4 pb-10 pt-12">
      <div className="mx-auto max-w-lg">
        <h1 className="text-balance text-2xl font-extrabold leading-tight text-primary-foreground md:text-3xl">
          {"정책자금, 가능성부터 정확히 진단합니다."}
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-primary-foreground/80">
          {"복잡한 제도와 서류, 박민준이 단계별로 정리해드립니다. 무리한 약속 대신 '현실적인 전략'으로 진행합니다."}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { icon: Search, text: "1:1 진단" },
            { icon: ClipboardCheck, text: "서류 체크리스트 제공" },
            { icon: ArrowRight, text: "진행 단계 안내" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-sm font-medium text-primary-foreground"
            >
              <badge.icon className="h-4 w-4" />
              {badge.text}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="w-full bg-accent py-6 text-base font-bold text-accent-foreground hover:bg-accent/90"
          >
            무료 가능성 진단 받기
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-primary-foreground/30 bg-transparent py-6 text-base font-bold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={KAKAO_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              카톡으로 빠르게 문의
            </a>
          </Button>
        </div>

        <p className="mt-5 text-xs leading-relaxed text-primary-foreground/50">
          {"※ 승인 보장을 약속하지 않습니다. 요건·서류·사업 현황에 따라 결과가 달라질 수 있습니다."}
        </p>
      </div>
    </section>
  );
}
