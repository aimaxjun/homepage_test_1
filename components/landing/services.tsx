import { Card, CardContent } from "@/components/ui/card";
import {
  ListChecks,
  FileCheck,
  Route,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: ListChecks,
    title: "정책자금 유형/요건 정리",
    desc: "업종·매출·업력 기준 등 핵심만 추려 안내합니다.",
    who: "어떤 자금이 있는지 감이 안 잡히는 분",
  },
  {
    icon: FileCheck,
    title: "준비서류 체크 및 보완 가이드",
    desc: "누락 없이 서류를 챙길 수 있도록 체크리스트를 제공합니다.",
    who: "서류 준비에서 막히거나 반려 경험이 있는 분",
  },
  {
    icon: Route,
    title: "신청 흐름(일정/단계) 안내",
    desc: "접수부터 결과까지 전체 일정과 단계를 정리해드립니다.",
    who: "어디서부터 시작해야 할지 모르는 분",
  },
  {
    icon: PiggyBank,
    title: "자금 활용 계획 정리 도움",
    desc: "운영·시설·운전자금 등 활용 계획 작성을 돕습니다.",
    who: "사업계획서나 자금용도 정리가 필요한 분",
  },
  {
    icon: ShieldCheck,
    title: "사후 관리 팁",
    desc: "유의사항, 서류 보관, 추가 신청 준비까지 안내합니다.",
    who: "자금 수령 후 관리 방법이 궁금한 분",
  },
];

export function Services() {
  return (
    <section className="bg-secondary px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-secondary-foreground">
          박민준 정책자금이 돕는 방식
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {services.map((item) => (
            <Card key={item.title} className="border-border bg-card shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-card-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <p className="mt-2 text-xs font-medium text-accent">
                  {item.who}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
