const steps = [
  {
    step: 1,
    title: "간단 정보 입력",
    desc: "업종, 업력, 매출, 희망 자금 등 기본 정보를 입력합니다.",
    time: "약 5~10분",
  },
  {
    step: 2,
    title: "가능성 진단 및 방향 제시",
    desc: "입력 정보를 바탕으로 적합한 자금과 준비 방향을 안내합니다.",
    time: "당일 안내 가능 (상황에 따라 다를 수 있음)",
  },
  {
    step: 3,
    title: "서류 체크 / 보완 가이드",
    desc: "필요한 서류 목록과 보완이 필요한 부분을 짚어드립니다.",
    time: "1~2일 내 정리 제공",
  },
  {
    step: 4,
    title: "신청 진행 및 일정 관리",
    desc: "접수 일정 확인 후 단계별로 진행 상황을 함께 관리합니다.",
    time: "일정에 따라 상이",
  },
];

export function Process() {
  return (
    <section className="bg-secondary px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-secondary-foreground">
          진행 프로세스
        </h2>
        <div className="mt-8 flex flex-col gap-0">
          {steps.map((item, idx) => (
            <div key={item.step} className="flex gap-4">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                {idx < steps.length - 1 && (
                  <div className="my-1 w-0.5 flex-1 bg-border" />
                )}
              </div>
              {/* Content */}
              <div className="pb-8">
                <h3 className="pt-2 text-base font-bold text-secondary-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-1.5 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
