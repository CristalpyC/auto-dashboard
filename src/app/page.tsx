"use client"
import { About } from "@/components/home-components/About";
import { Description } from "@/components/home-components/Description";
import { Footer } from "@/components/home-components/Footer";
import { Intro } from "@/components/home-components/Intro";
import { Services } from "@/components/home-components/Services";

export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <About />
      <Description />
      <Footer />
    </main>
  );
}
