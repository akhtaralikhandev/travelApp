import React from "react";
import FilterForm from "../../../layouts/FilterForm";
import Header from "./Header";
import Info from "./Info";

const Banner = ({ data }) => {
  return (
    <section className="hero-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 heading-texts">
            <Header subTitle={data.heading.subTitle} title={data.heading.title} />
            <div className="blog-grid padding-top-40px">
              <div className="container">
                <div className="row pt-4 mt-3">
                  <div className="col-lg-6 text-center">
                    <img src={data.image} className="w-50" alt="Acupuncture" />
                  </div>

                  <div className="col-lg-6 margin-mobile">
                    <Info description={data.descriptions} />
                    {
                      data.filterName === 'Meridian' &&
                      <div className="w-100 mt-4">
                        <FilterForm filterName={data.filterName} />
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;