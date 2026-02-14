import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Problems } from "@/components/landing/problems";
import { Services } from "@/components/landing/services";
import { Profile } from "@/components/landing/profile";
import { Process } from "@/components/landing/process";
import { Reviews } from "@/components/landing/reviews";
import { FAQ } from "@/components/landing/faq";
import { ConsultForm } from "@/components/landing/consult-form";
import { BottomBar } from "@/components/landing/bottom-bar";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pb-16">
        <Hero />
        <Problems />
        <Services />
        <Profile />
        <Process />
        <Reviews />
        <FAQ />
        <ConsultForm />
      </main>
      <BottomBar />
    </>
  );
}
