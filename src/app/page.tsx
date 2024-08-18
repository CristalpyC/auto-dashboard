import { About } from "@/components/home-components/About";
import { Description } from "@/components/home-components/Description";
import { Footer } from "@/components/home-components/Footer";
import { Intro } from "@/components/home-components/Intro";
import { Services } from "@/components/home-components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealerw",
  description: "Dealerw app",
};


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
