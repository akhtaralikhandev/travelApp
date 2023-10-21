import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import GeneralHeader from "../components/common/GeneralHeader";
import Button from "../components/common/Button";
import ForumsCategories from "../components/other/categories/ForumsCategories";
import Breadcrumb from "../components/common/Breadcrumb";
import breadcrumbimg from "../assets/images/bread-bg.jpg";
import { TiArrowUnsorted, TiBrush } from "react-icons/ti";
import img1 from "../assets/images/img1.jpg"; // 263*175

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

function About() {
  return (
    <main className="about-page">
      {/* Header */}
      <GeneralHeader />
      <Breadcrumb CurrentPgTitle="Post topic" img={state.breadcrumbimg} />
      <div className="container mb-5">
        <div className="row d-flex justify-content-center mt-5 mb-2">
          <ForumsCategories catitems={catitems} />
        </div>
        <div className="d-flex flex-column">
          <div className="text-muted mb-5 text-center">
            Fill in title and detail and click on the Post button to post a
            topic.{" "}
          </div>
          <div>
            <form action="/" method="POST" name="email_to_form">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Title of the topic"
              />
              <Editor
                initialValue="<p>Type body here...</p>"
                init={{
                  branding: false,
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </form>
          </div>
          <div className="wrapper text-right mt-3">
            <Button text="Discard" url="/forums" className="mr-3" />
            <button className="post-btn">Post</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
