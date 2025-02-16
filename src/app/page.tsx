import { About } from "./_components/about";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";
import { Testionials } from "./_components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testionials />
      <Footer />
    </main>)
}