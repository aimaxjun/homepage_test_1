import { Card, CardContent } from "@/components/ui/card";
import { Target, ListChecks, HandshakeIcon, Phone } from "lucide-react";
import { User } from "lucide-react";

const points = [
  {
    icon: Target,
    text: "상담 목적: 가능성 진단 → 준비 방향 제시",
  },
  {
    icon: ListChecks,
    text: "설명 방식: 어려운 용어 대신 체크리스트로 정리",
  },
  {
    icon: HandshakeIcon,
    text: "진행 원칙: 무리한 권유 없이 조건 기반 안내",
  },
  {
    icon: Phone,
    text: "연락 방식: 카톡/전화/폼 신청 중 선택",
  },
];

export function Profile() {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-foreground">
          상담자: 박민준
        </h2>

        <Card className="mt-8 border-border bg-card shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold text-card-foreground">박민준</p>
                <p className="text-sm text-muted-foreground">
                  정책자금 상담 전문
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-card-foreground">
              {
                "정책자금은 '가능한지'보다 '어떻게 준비하느냐'가 결과를 가릅니다. 저는 한 번에 끝내기보다, 단계별로 놓치지 않게 정리하는 방식으로 돕습니다."
              }
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {points.map((point) => (
                <div key={point.text} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10">
                    <point.icon className="h-4 w-4 text-accent" />
                  </div>
                  <p className="pt-1 text-sm font-medium leading-snug text-card-foreground">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              {"※ 최종 심사는 기관 기준에 따릅니다."}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
