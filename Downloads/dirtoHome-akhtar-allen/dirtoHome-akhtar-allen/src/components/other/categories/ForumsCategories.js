import React from "react";
import { Link } from "react-router-dom";

function ForumsCategories({ catitems }) {
  return (
    <>
      {catitems.map((item, index) => {
        return (
          <div className="col-lg-2 column-td-4" key={index}>
            <div className="mb-4 mt-0 ml-0 mr-0 p-0">
              <figure className="forum-cat-fig m-0">
                <img src={item.img} alt="category" className="cat-img" />
                <figcaption className="fig-caption">
                  <Link to={item.url} className="cat-fig-box">
                    <div className="icon-element mb-1">{item.icon}</div>
                    <div className="cat-content">
                      <h5 className="cat__title mb-1" style={{paddingBottom: '0'}}>{item.title}</h5>
                      <span className="badge">{item.stitle}</span>
                    </div>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ForumsCategories;
