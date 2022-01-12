import React from "react";
import wands from "../wands";
import { WandList } from "./WandList";

export const Home = () => {
  const wandsList = wands.map((wand) => <WandList wand={wand} />);

  return <div>{wandsList}</div>;
};
