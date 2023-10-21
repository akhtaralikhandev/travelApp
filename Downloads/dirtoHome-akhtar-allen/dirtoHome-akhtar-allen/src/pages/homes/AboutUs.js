import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Paper from "@material-ui/core/Paper";
import bg3 from "../../assets/images/oldpaper-bg.jpg";
import { AboutUsData } from "../../store/AboutUsData";
import { Typography } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
// import sectiondata from "../../store/store"
import HowItWorkOne from "../../components/hiw/hiw1/HowItWorkOne";
import InfoBoxOne from "../../components/other/infoboxes/infobox1/InfoBoxOne";
// import bg1 from "../../assets/images/custom/bg2.jpg";
import { BottomText } from "../../store/AboutUsData";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import GeneralHeader from "../../components/common/GeneralHeader";

export default function BannerOne() {
  const [acuDatA, setacuDatA] = useState({});

  const NONE = { display: "none" };
  const MBottom = { marginBottom: "0.8em" };

  const TextStyle = acuDatA.description1 === null ? NONE : MBottom;

  useEffect(() => {
    setacuDatA(AboutUsData);
  }, []);
  return (
    <>
      <GeneralHeader />

      <section
        className="hero-wrapper"
        style={{ backgroundImage: "url(" + bg3 + ")", paddingBottom: "1em" }}
      >
        <div className="container-fluid" style={{ marginTop: "-4em" }}>
          <div className="row">
            <div className="col-lg-12">
              <div style={{ textAlign: "center" }}>
                <Typography variant="subtitle1" color="" style={{}}>
                  <small>{acuDatA.top}</small>
                </Typography>

                <motion.h1
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{ textShadow: "2px 2px 8px black" }}
                >
                  {acuDatA.heading}
                </motion.h1>

                <motion.div
                  className="headerborder"
                  initial={{ backgroundColor: "rgb(0,0,0)" }}
                  animate={{
                    backgroundColor: "rgb(255,255,255)",
                    transition: { duration: 3 },
                  }}
                  style={{
                    margin: "auto auto",
                    marginTop: "1em",
                  }}
                ></motion.div>
              </div>

              <section className="blog-grid padding-top-40px padding-bottom-50px">
                <div className="container">
                  <div className="row" style={{ paddingTop: "2em" }}>
                    <div className="col-lg-6" style={{ marginTop: "10px" }}>
                      {/* Your Image will be replace But few things needed to change white adding images May be i had seen wrong dimension */}

                      {acuDatA.img1 === "NULL" ? (
                        <div>
                          <div
                            className="w-90 bg-light border"
                            style={{ height: "373px" }}
                          ></div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-evenly",
                            }}
                          >
                            <div
                              className="w-100 bg-light border"
                              style={{ height: "273px" }}
                            ></div>
                            <div
                              className="w-100 bg-light border"
                              style={{ height: "273px" }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <img src={acuDatA.img1} className="imgstyle" />
                      )}
                    </div>

                    <div
                      className="col-lg-6"
                      style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        overflowWrap: "break-word",
                        textAlign: "left",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: { duration: 1, delay: 0 },
                        }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Paper elevation={3} style={{ padding: "1em" }}>
                          <Typography variant="body1" style={TextStyle}>
                            {acuDatA.description1}
                          </Typography>
                          <br />
                          <Typography variant="body1" style={TextStyle}>
                            {acuDatA.description2}
                          </Typography>
                          <br />
                          <Typography variant="body1" style={TextStyle}>
                            {acuDatA.description3}
                          </Typography>
                        </Paper>

                        <Paper elevation={3} className="p-3 mt-4">
                          <Typography variant="h6" style={{ color: "#ff6b6b" }}>
                            We Offer the Next Module for your clinic
                          </Typography>
                          <br />
                          <Typography variant="body1">
                            <ul>
                              {acuDatA.list === undefined
                                ? null
                                : acuDatA.list.map((item) => (
                                    <li>
                                      <RemoveIcon
                                        className="mr-3"
                                        style={{ color: "#ff6b6b" }}
                                      />
                                      {item}
                                    </li>
                                  ))}
                            </ul>
                          </Typography>
                        </Paper>
                        <Paper className="mt-4 p-3" elevation={3}>
                          <Typography variant="h6" style={{ color: "#ff6b6b" }}>
                            Mission / Vision Statement
                          </Typography>
                          <br />
                          <Typography variant="body1">
                            {acuDatA.description4}
                          </Typography>
                          <br />
                          <Typography variant="body1">
                            {acuDatA.description5}
                          </Typography>
                        </Paper>
                      </motion.div>
                      <hr />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Another Section After Header */}

      <section className="hiw-area text-center padding-top-80px padding-bottom-40px pb-0">
        <div className="container">
          <div className="row section-title-width text-center">
            {/* <SectionsHeading 
                            title={sectiondata.howitworks.hiw1.sectitle} 
                            desc={sectiondata.howitworks.hiw1.seccontent} /> */}
          </div>

          <div className="container-fluid">
            <InfoBoxOne data={BottomText} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </>
  );
}
