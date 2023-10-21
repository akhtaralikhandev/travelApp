import React, { useState } from "react";
import { FiRefreshCw, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import GeneralHeader from "../components/common/GeneralHeader";
import Button from "../components/common/Button";
import Breadcrumb from "../components/common/Breadcrumb";
import ForumsCategories from "../components/other/categories/ForumsCategories";
import breadcrumbimg from "../assets/images/bread-bg.jpg";
import { TiArrowUnsorted, TiBrush } from "react-icons/ti";
import img1 from "./../assets/images/img1.jpg"; // 263*175
//import gitlogo from "./../assets/images/git-logo.png";

import Select from "react-select";

const state = {
  breadcrumbimg: breadcrumbimg,
};

const catitems = [
  {
    icon: <TiBrush />,
    title: "Management District",
    stitle: "12 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiBrush />,
    title: "Japanese Architecture",
    stitle: "22 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiBrush />,
    title: "Ear-acupuncture",
    stitle: "12 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiBrush />,
    title: "Cupping",
    stitle: "22 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiArrowUnsorted />,
    title: "Scalp Acupuncture",
    stitle: "33 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiBrush />,
    title: "Reflexology",
    stitle: "44 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiBrush />,
    title: "Tuina",
    stitle: "48 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiArrowUnsorted />,
    title: "Reiki",
    stitle: "50 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiArrowUnsorted />,
    title: "Pathology",
    stitle: "14 Listings",
    url: "#",
    img: img1,
  },
  {
    icon: <TiArrowUnsorted />,
    title: "Technical Issues",
    stitle: "20 Listings",
    url: "#",
    img: img1,
  },
];

const viewOptions = [
  {
    value: 0,
    label: "View all",
  },
  {
    value: 1,
    label: "Option 1",
  },
  {
    value: 2,
    label: "Option 2",
  },
];

function About() {
  const [selectedTopic, setSelectedTopic] = useState(
    "Official Management District"
  );
  const [isAllChecked, setIsAllChecked] = useState(false);

  const handleTopicClick = (e) => setSelectedTopic(e.target.name);

  return (
    <main className="about-page">
      {/* Header */}
      <GeneralHeader />
      <Breadcrumb CurrentPgTitle="Forums" img={state.breadcrumbimg} />
      <div className="container mb-5">
        <div className="d-flex flex-column align-items-center">
          <h3 className="widget-title pb-0" style={{ color: "#f40400" }}>
            Our Forums
          </h3>
          <div className="title-shape margin-top-10px"></div>
          <h6 className="mt-5">Feel free to start a new topic </h6>
        </div>
        {
          //   <div className="d-flex justify-content-center flex-wrap mt-5">
          //   {" "}
          //   {topics.map((topic, index) => (
          //     <button
          //       key={index}
          //       type="button"
          //       className={classNames({
          //         "topics-button": true,
          //         "topics-button-selected": topic === selectedTopic,
          //       })}
          //       onClick={handleTopicClick}
          //       name={topic}
          //     >
          //       {topic}
          //     </button>
          //   ))}
          // </div>
        }
        <div className="row d-flex justify-content-center mt-5">
          <ForumsCategories catitems={catitems} />
        </div>
        <div class="table-responsive">
          <table className="table title-table">
            <thead>
              <tr>
                {
                //   <td className="bg-header">
                //   <input
                //     type="checkbox"
                //     checked={isAllChecked}
                //     onClick={() => setIsAllChecked(!isAllChecked)}
                //     style={{
                //       height: "1rem",
                //       width: "1rem",
                //       verticalAlign: "middle",
                //     }}
                //   />
                // </td>
              }
                <th colSpan="6">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex">
                      <Button text="Create topic" url="/post-compose" className="mr-2"/>
                      <Select
                        className="view-selector"
                        placeholder="View all"
                        options={viewOptions}
                        menuPortalTarget={document.body}
                      />
                      <button role="button" className="page-nav-btn ml-2">
                        <span>
                          <FiRefreshCw />
                        </span>
                      </button>
                    </div>
                    <div>
                      <button role="button" className="page-nav-btn">
                        <span>
                          <FiChevronLeft />
                        </span>
                      </button>
                      <button role="button" className="page-nav-btn">
                        <span>
                          <FiChevronRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {["", "", "", "", "", "", "", "", "", ""].map((el, index) => (
                <tr key={index}>
                  {
                  //   <td className="center-checkbox">
                  //   <input
                  //     type="checkbox"
                  //     checked={isAllChecked}
                  //     style={{
                  //       height: "1rem",
                  //       width: "1rem",
                  //       verticalAlign: "middle",
                  //     }}
                  //   />
                  // </td>
                }
                  {
                  //   <td style={{ width: 50 }}>
                  //   {/* <img width="45" height="45" src={gitlogo} /> */}
                  // </td>
                }
                  <td>Facebook Blueprint</td>
                  <td>Newly released courses, holiday marketing tips</td>
                  <td style={{ width: 10 }}>*</td>
                  <td>Sed scelerisque dui lacus</td>
                  <td align="right">Today</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        // <Footer />
      }
    </main>
  );
}

export default About;
