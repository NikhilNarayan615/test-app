import Team from "@/components/ui/team";
import { ImagesSliderDemo } from "./back/page";
import Feature from "@/components/ui/feature";
import Divisions from "@/components/ui/divisions";
import Model from "@/components/ui/threedmodel";
import Accomplishment from "@/components/ui/accom";
import Legacy from "@/components/ui/legacy";

import { InfiniteMovingCardsDemo } from "./cards/page";

export default function Home() {
  return (
    <main>
      <ImagesSliderDemo />
      <Feature />
      <Team />
      <Divisions />
      <InfiniteMovingCardsDemo />
      <Model />
      <Accomplishment />
      <Legacy />
    </main>
  );
}