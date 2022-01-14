import React from "react";
import { useParams } from "react-router-dom";
import wands from "../wands";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";

const Details = () => {
  const { wandslug } = useParams();
  const wandDisc = wands.find((wand) => wand.slug === wandslug);
  return (
    <div className="bg-secondary text-light mx-auto w-75 text-center p-3 d-flex flex-column rounded  shadow ">
      <h3>{wandDisc.core}</h3>
      <div className="d-flex justify-content-center">
        <img
          className="rounded border-5 border-dark w-50 modal-content"
          src={wandDisc.imageUrl}
          alt={wandDisc.slug}
        />
      </div>
      <div className="test-start text-light ">
        <p>
          <strong>Wood:</strong> {wandDisc.wood}
        </p>
        <p>
          <strong>Length:</strong> {wandDisc.length}
        </p>
      </div>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
};

export default Details;
