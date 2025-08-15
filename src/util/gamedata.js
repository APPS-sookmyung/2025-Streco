import valorant from "./../assets/valorant.jpg";
import overwatch2 from "./../assets/overwatch2.png";
import lol from "./../assets/lol.webp";
import gta5 from "./../assets/gta5.webp";
import er from "./../assets/er.jpg";

export const gameOptions = [
  { value: "valorant", label: "Valorant", image: valorant },
  { value: "overwatch2", label: "Overwatch2", image: overwatch2 },
  { value: "lol", label: "LOL", image: lol },
  { value: "gta5", label: "GTA5", image: gta5 },
  { value: "er", label: "Eternal Return", image: er },
];

import jett from "./../assets/jett.webp";

export const characterOptions = {
  valorant: [
    { value: "gekko", label: "게코", image: jett },
    { value: "neon", label: "네온", image: jett },
    { value: "deadlock", label: "데드록", image: jett },
  ],
  overwatch2: [
    { value: "tracer", label: "트레이서", image: jett },
    { value: "reinhardt", label: "라인하르트", image: jett },
  ],
};
