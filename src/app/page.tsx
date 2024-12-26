import { HomeHereoSection } from "./components/home-hero-section";

import { Tabs } from "./components/tab/tabs";
import { Topics } from "./components/topics";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center container bg-grey-content w-full gap-8">
      <HomeHereoSection />
      <Tabs />
      <Topics />
    </div>
  );
}
