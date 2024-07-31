import { About } from "@/components/home-components/About";
import { Intro } from "@/components/home-components/Intro";
import { Services } from "@/components/home-components/Services";

export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <About />
    </main>
  );
}
