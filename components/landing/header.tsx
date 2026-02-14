"use client";

import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function Header() {
  const scrollToForm = () => {
    document
      .getElementById("consultation-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-accent" />
          <span className="text-lg font-bold text-foreground">
            박민준 정책자금
          </span>
        </div>
        <Button
          onClick={scrollToForm}
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          상담신청
        </Button>
      </div>
    </header>
  );
}
