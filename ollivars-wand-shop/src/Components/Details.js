import React from "react";
import { useParams } from "react-router-dom";
import wands from "../wands";
import { Link } from "react-router-dom";

const Details = () => {
  const { wandslug } = useParams();
  const wandDisc = wands.find((wand) => wand.slug === wandslug);
  return (
    <div className="bg-dark text-light mx-auto w-75 text-center p-3 d-flex flex-column shadow ">
      <h3>{wandDisc.core}</h3>
      <div className="d-flex justify-content-center">
        <img
          className="rounded border-5 border-secondary w-50 modal-content"
          src={wandDisc.imageUrl}
          alt={wandDisc.slug}
        />
      </div>
      <p>Wood: {wandDisc.wood}</p>
      <p>Length: {wandDisc.length}</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Details;
