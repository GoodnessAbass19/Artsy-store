import Hero from "./components/home/Hero";
import Head from "./components/home/Home";
import Featured from "./components/home/Featured";
import Exhibition from "./components/home/Exhibition";
import Explore from "./components/home/Explore";
import Creators from "./components/home/Creators";

export default function Home() {
  return (
    <main>
      <Head />
      <Hero />
      <Featured />
      <Exhibition />
      <Explore />
      <Creators />
    </main>
  );
}
