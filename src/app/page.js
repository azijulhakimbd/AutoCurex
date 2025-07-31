import Image from "next/image";
import Services from "./Components/Services";
import HeroBanner from "./Components/HeroBanner";
import About from "./Components/About";

export default function Home() {
  return (
    <div className="mx-6 md:mx-24">
    <HeroBanner/>
    <About/>
    <Services/></div>
  );
}
