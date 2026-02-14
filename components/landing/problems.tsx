import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, FileX, Compass, Clock } from "lucide-react";

const problems = [
  {
    icon: HelpCircle,
    title: "정보가 너무 많아 뭐가 맞는지 모르겠어요",
    solution: "핵심 조건만 요약해 드립니다",
  },
  {
    icon: FileX,
    title: "서류에서 자꾸 반려가 나요",
    solution: "서류 체크리스트로 보완 포인트를 짚어드립니다",
  },
  {
    icon: Compass,
    title: "나에게 맞는 자금이 뭔지 모르겠어요",
    solution: "업종·업력·매출 기준으로 맞춤 안내합니다",
  },
  {
    icon: Clock,
    title: "은행/기관 상담이 어렵고 시간이 없어요",
    solution: "전화·카톡으로 편하게 상담 가능합니다",
  },
];

export function Problems() {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-foreground">
          이런 고민, 혹시 해보셨나요?
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {problems.map((item) => (
            <Card
              key={item.title}
              className="border-border bg-card shadow-sm"
            >
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-base font-semibold leading-snug text-card-foreground">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {item.solution}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
