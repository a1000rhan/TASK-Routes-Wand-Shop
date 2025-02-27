import React from "react";
import { Link } from "react-router-dom";

export const WandList = ({ wand }) => {
  return (
    <div className="d-flex text-center justify-content-center m-5 cardlist rounded">
      <div className=" text-light text-center p-3 d-flex flex-column shadow p-3 mb- rounded">
        <Link
          className="gran text-light text-decoration-none"
          to={`/wondlist/${wand.slug}`}
        >
          <h2 className="m-3 p-2 rounded border border-light ">{wand.core}</h2>
          <img
            className="rounded image border border-5 border-dark shadow p-3 mb-5 bg-white"
            src={wand.imageUrl}
            alt={wand.slug}
          />
        </Link>
      </div>
    </div>
  );
};
