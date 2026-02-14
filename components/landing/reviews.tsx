import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "김○○",
    business: "카페 운영 3년차",
    rating: 5,
    text: "어떤 자금을 신청해야 할지 몰랐는데, 조건별로 깔끔하게 정리해주셔서 방향이 잡혔어요.",
  },
  {
    name: "이○○",
    business: "온라인 쇼핑몰",
    rating: 5,
    text: "서류가 두 번이나 반려됐었는데, 체크리스트 받고 보완하니까 진행이 수월해졌습니다.",
  },
  {
    name: "박○○",
    business: "제조업 5년차",
    rating: 5,
    text: "어려운 용어 없이 단계별로 설명해주셔서 처음인 저도 이해하기 쉬웠어요.",
  },
  {
    name: "정○○",
    business: "학원 운영",
    rating: 4,
    text: "무리하게 권유하지 않아서 오히려 신뢰가 갔습니다. 진행이 명확했어요.",
  },
  {
    name: "최○○",
    business: "미용실 운영 2년차",
    rating: 5,
    text: "카톡으로 편하게 상담받았어요. 바쁜 중에도 빠르게 답변해주셔서 좋았습니다.",
  },
  {
    name: "한○○",
    business: "소상공인 (음식점)",
    rating: 5,
    text: "다른 곳에서는 무조건 된다고 했는데, 여기는 솔직하게 가능성을 알려줘서 믿음이 갔어요.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-foreground">
          상담 후기
        </h2>
        <div className="mt-8 flex flex-col gap-4">
          {reviews.map((review) => (
            <Card
              key={review.name + review.business}
              className="border-border bg-card shadow-sm"
            >
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-card-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.business}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-card-foreground">
                  {`"${review.text}"`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
