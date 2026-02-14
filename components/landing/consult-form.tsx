"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2 } from "lucide-react";

export function ConsultForm() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="consultation-form" className="bg-background px-4 py-12">
        <div className="mx-auto max-w-lg">
          <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm">
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <h3 className="text-lg font-bold text-card-foreground">
              접수 완료!
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              확인 후 순차적으로 안내드립니다.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation-form" className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-balance text-center text-xl font-bold text-foreground">
          무료 가능성 진단 신청
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          아래 정보를 입력해주시면, 확인 후 안내드립니다.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-card-foreground">
              이름 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="홍길동"
              required
              className="bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="phone" className="text-card-foreground">
              연락처 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="010-0000-0000"
              required
              className="bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="industry" className="text-card-foreground">
              업종 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="industry"
              placeholder="예: 카페, 제조업, 온라인쇼핑몰"
              required
              className="bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="years" className="text-card-foreground">
              업력 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="years"
              placeholder="예: 2년, 창업 예정"
              required
              className="bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="revenue" className="text-card-foreground">
              월/연매출 <span className="text-xs text-muted-foreground">(선택)</span>
            </Label>
            <Input
              id="revenue"
              placeholder="예: 월 3,000만원"
              className="bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="amount" className="text-card-foreground">
              희망자금{" "}
              <span className="text-xs text-muted-foreground">(선택)</span>
            </Label>
            <Input
              id="amount"
              placeholder="예: 5,000만원"
              className="bg-background"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-card-foreground">
              문의내용{" "}
              <span className="text-xs text-muted-foreground">(선택)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="궁금한 점이나 상황을 간단히 적어주세요."
              rows={3}
              className="bg-background"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="agree"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="mt-0.5"
            />
            <Label
              htmlFor="agree"
              className="cursor-pointer text-xs leading-relaxed text-muted-foreground"
            >
              개인정보 처리 동의 (필수) - 입력하신 정보는 상담 목적으로만 사용되며, 상담 완료 후 안전하게 폐기됩니다.
            </Label>
          </div>

          <Button
            type="submit"
            disabled={!agreed}
            size="lg"
            className="w-full bg-primary py-6 text-base font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-40"
          >
            무료 가능성 진단 신청
          </Button>
        </form>
      </div>
    </section>
  );
}
