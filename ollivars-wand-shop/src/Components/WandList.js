import React from "react";
import { Link } from "react-router-dom";

export const WandList = ({ wand }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="bg-dark text-light text-center w-50 p-3 d-flex flex-column shadow p-3 mb- rounded">
        <h2 className="m-3 rounded border border-light">{wand.core}</h2>
        <Link to={`/wondlist/${wand.slug}`}>
          <img
            className="rounded image border border-5 border-secondary shadow p-3 mb-5 bg-white"
            src={wand.imageUrl}
            alt={wand.slug}
          />
        </Link>
      </div>
    </div>
  );
};
