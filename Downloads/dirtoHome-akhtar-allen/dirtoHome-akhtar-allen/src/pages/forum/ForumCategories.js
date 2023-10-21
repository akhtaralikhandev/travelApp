import React from "react";
import { Link } from "react-router-dom";
import "./ForumCatogories.css";

// Demo Data of Forums_categories..
const forums_categories = [
  {
    _id: "10eba340-nfjc-11eb-b8bc-0242ac130003",
    name: "Allergies",
    details: "Operations and surgical procedures",
    icon: "fas fa-cut fa-1x",
  },
  {
    _id: "36eb5176-bdhc-11eb-b8bc-0242ac130003",
    name: "Bones, Joint, Muscles",
    details: "Bones, joints and muscles",
    icon: "fas fa-bone fa-1x",
  },
  {
    _id: "3f9e633a-d01c-3bgd-b8bc-0242ac130003",
    name: "Duis aute irure dolor",
    details: "Brain and nerves",
    icon: "fas fa-eye fa-1x",
  },
  {
    _id: "3f9e633a-d01c-11eb-b8bc-0242anh3v003",
    name: "Duis aute irure dolor",
    details: "Brain and nerves",
    icon: "fas fa-heart fa-1x",
  },
  {
    _id: "3f9e633a-d01c-11j3-b8bc-0242ac130003",
    name: "Irure uis aute dolor",
    details: "Brain and nerves",
    icon: "fas fa-wine-glass-alt fa-1x",
  },
  {
    _id: "3f9e633a-d01c-11eb-b8bc-0242ac133923",
    name: "Duis aute irure dolor",
    details: "Brain and nerves",
    icon: "fas fa-bacterium fa-1x",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac174003",
    name: "Ea commodo consequat",
    details: "Bones, joints and muscles",
    icon: "fas fa-bone fa-1x",
  },
  {
    _id: "36eb5176-d0we-11eb-b8bc-0242ac130003",
    name: "Ea commodo consequat",
    details: "Bones, joints and muscles",
    icon: "fas fa-bone fa-1x",
  },
  {
    _id: "3f9hfb3a-d01c-11eb-b8bc-0242ac130003",
    name: "Duis aute irure dolor",
    details: "Brain and nerves",
    icon: "fas fa-eye fa-1x",
  },
  {
    _id: "3f9e633a-d01c-1vfd-b8bc-0242ac130003",
    name: "Duis aute irure dolor",
    details: "Brain and nerves",
    icon: "fas fa-eye fa-1x",
  },
  {
    _id: "3f9e633a-d01c-11eb-b8bc-0234dc130003",
    name: "Duis aute irure dolor",
    details: "Brain and nerves",
    icon: "fas fa-eye fa-1x",
  },
  {
    _id: "36eb5176-d01c-11eb-bdf-0242ac130003",
    name: "Ea commodo consequat",
    details: "Bones, joints and muscles",
    icon: "fas fa-bone fa-1x",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242fr130003",
    name: "Ea commodo consequat",
    details: "Bones, joints and muscles",
    icon: "fas fa-bone fa-1x",
  },
  {
    _id: "36eb5176-d01c-11eb-b8bc-0242ac130024",
    name: "Featured Forum",
    details: "Bones, joints and muscles",
    icon: "fas fa-bone fa-1x",
  },
];

const ForumCategories = ({forumcats}) => {

  console.log('Our forumCats here -- ', forumcats);


  return (
    <>
      <h3 className="mb-2">Forum Categories</h3>
      <ul className="list-group">
        <div className="row for-cat-row">
          {forums_categories.map((el) => (
            <li className="list-group-item col-12 col-md-5 mr-2 for-cat-list">
              <i className={`${el.icon} mr-2`}></i>{" "}
              <Link
                // onClick={() => props.updateForumCatName(el.title)}
                to={{ pathname: `/categories/${el._id}`, state: `${el.name}` }}
              >
                {el.name}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </>
  );
};

export default ForumCategories;
