import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import CharacterList from "./CharacterList";

export default function FilterSection({ label }) {
  const {character} = useSelector((state) => state.entities?.filter);

  return (
    <section className="cta-area section-bg column-sm-center padding-top-80px padding-bottom-80px">
      <div className="container alpha">
        <div className="row align-items-center">
          <div className="col-lg-12 text-left">
            <div className="mt-0">
              <Typography variant="h6" className="pagination-text text-center">
                {label}
              </Typography>
            </div>
            <div>
              <CharacterList />
            </div>
            <div className="text-center">
              <p>Active Filter: {character.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}