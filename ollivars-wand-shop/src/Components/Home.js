import React from "react";
import wands from "../wands";
import { WandList } from "./WandList";
import { Card } from "@mui/material";

export const Home = () => {
  const wandsList = wands.map((wand) => <WandList wand={wand} />);

  return <Card className="d-flex flex-wrap m-3 bg-secondary">{wandsList}</Card>;
};
