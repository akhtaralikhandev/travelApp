import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetBautySalonsQuery } from "../../redux/bautysalons/bautysalonsApi";
import Carousel from "../common/Carousel";
import LoadingSkeleton from "../common/LoadingSkeleton";

const BautySalonsList = () => {
  const { data: bautysalons, isLoading, isError } = useGetBautySalonsQuery();

  const { character } = useSelector((state) => state.entities?.filter);

  const itemsPerPage = 48;
  const [visibleItemCount, setVisibleItemCount] = useState(itemsPerPage);

  // load more handler
  const handleLoadMore = () => {
    setVisibleItemCount((prevCount) => prevCount + itemsPerPage);
  };

  // filter data
  const applyFilter = (data) => {
    if (character === "all") {
      return data;
    }
    // Apply your filter logic here
    return data.filter(
      (item) =>
        item.letter_1.includes(character.toUpperCase()) ||
        item.letter_2.includes(character.toUpperCase())
    );
  };

  let content;

  // loading ui
  if (isLoading) {
    content = (
      <div className="col-lg-12">
        <LoadingSkeleton />
      </div>
    );
  }

  if (isError && !isLoading) {
    content = <h2 className="text-center mt-3">Somthing went wrong!</h2>;
  }

  // main content ui
  if (!isLoading && !isError && bautysalons.length > 0) {
    const filteredData = applyFilter(bautysalons);
    const visibleData = filteredData.slice(0, visibleItemCount);

    content = (
      <div className="col-lg-12">
        <Paper elevation={5} className="px-4 mt-0 card-container pb-4">
          <div className="row">
            {visibleData.map((item) => (
              <Link
                key={item._id}
                to={`/bautysalons/${item._id}`}
                className="col-12 col-md-4"
              >
                <Carousel name={item.name} />
              </Link>
            ))}
            {visibleData.length === 0 && (
              <h2 className="text-center mt-3">
                No data Found. Select Another Option.
              </h2>
            )}
          </div>
        </Paper>
        <div style={{ textAlign: "center" }}>
          {filteredData?.length > visibleItemCount && (
            <Button
              style={{
                marginTop: "3em",
                background: "rgba(240, 240, 240, 0.6)",
                fontSize: "16px",
              }}
              onClick={handleLoadMore}
            >
              Click To See More {filteredData?.length - visibleItemCount}
              <ExpandMoreIcon className="ml-4" />
            </Button>
          )}
        </div>
      </div>
    );
  }

  if (!isLoading && !isError && bautysalons.length === 0) {
    content = <h2 className="text-center mt-3">Item empty!</h2>;
  }

  return (
    <section className="blog-grid padding-top-20px padding-bottom-100px">
      <div className="container">
        <div className="row">{content}</div>
      </div>
    </section>
  );
};

export default BautySalonsList;
