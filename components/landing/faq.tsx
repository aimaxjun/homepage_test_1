import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "상담만 받아도 되나요?",
    a: "네, 상담만으로도 충분합니다. 가능성 진단 후 진행 여부는 자유롭게 결정하시면 됩니다. 상담 자체는 무료입니다.",
  },
  {
    q: "무조건 승인되나요?",
    a: "아닙니다. 정책자금은 기관별 심사 기준이 있으며, 업종·업력·매출·신용 등 다양한 요건에 따라 결과가 달라집니다. 승인을 보장하지 않으며, 가능성 진단과 준비 방향 안내를 도와드립니다.",
  },
  {
    q: "준비해야 할 서류가 너무 많아요.",
    a: "자금 종류에 따라 필요한 핵심 서류 위주로 체크리스트를 정리해드립니다. 한꺼번에 준비하기 어려운 경우 단계별로 안내드리니 부담을 줄일 수 있습니다.",
  },
  {
    q: "개인사업자/법인 모두 가능한가요?",
    a: "네, 개인사업자와 법인 모두 상담 가능합니다. 다만 자금별로 신청 자격 요건이 다르므로, 사업 형태에 맞는 자금을 안내해드립니다.",
  },
  {
    q: "업력이 짧아도 방법이 있나요?",
    a: "업력이 짧더라도 신청 가능한 자금이 있을 수 있습니다. 정확한 진단을 위해 업종과 매출 등 기본 정보를 확인한 후 안내드립니다.",
  },
  {
    q: "기존 대출이 있으면 불리한가요?",
    a: "기존 대출이 있다고 무조건 불리한 것은 아닙니다. 다만 총 부채 규모나 신용 상태에 따라 영향이 있을 수 있으므로, 구체적인 상황을 확인 후 안내드립니다.",
  },
  {
    q: "진행 비용이 있나요?",
    a: "초기 가능성 진단 상담은 무료입니다. 이후 진행 관련 비용은 상담 시 투명하게 안내드리며, 사전 동의 없이 비용이 발생하지 않습니다.",
  },
  {
    q: "상담 후 얼마나 걸리나요?",
    a: "자금 종류와 준비 상황에 따라 다릅니다. 서류가 준비된 경우 빠르게 진행 가능하며, 일반적으로 접수 후 심사까지 수 주에서 수 개월이 소요될 수 있습니다. 구체적인 일정은 상담 시 안내드립니다.",
  },
];

export function FAQ() {
  return (
    <section className="bg-secondary px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-secondary-foreground">
          자주 묻는 질문
        </h2>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`faq-${idx}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-secondary-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
