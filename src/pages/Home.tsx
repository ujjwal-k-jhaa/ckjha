import { Hero } from "../components/Hero";
import { Gallery } from "../components/Gallery";
import { Services } from "../components/Services";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import { Process } from "../components/Process";
import { FAQ } from "../components/FAQ";
import { Booking } from "../components/Booking";

export function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Work />
      <Services />
      <Process />
      <FAQ />
      <Booking />
      <Contact />
    </>
  );
}
