import React from 'react'
import { useSelector } from "react-redux"
import FilterForm from "../../../layouts/FilterForm"
import { motion } from "framer-motion"
import Paper from "@material-ui/core/Paper"
import bg3 from "../../../assets/images/custom/bg3.jpg"

export default function BannerOne({ headerData, dataLink }) {
    console.log("Header Data", headerData);
    console.log("DataLink", dataLink)

    const NONE = { display: "none" }
    const MBottom = { marginBottom: "0.8em" }

    const TextStyle = MBottom

    return (
        <>
            <section className="hero-wrapper"
                style={{ backgroundImage: 'url(' + bg3 + ')', paddingBottom: "1em", }}>
                <div className="container-fluid" style={{ marginTop: "-4em" }}>
                    <div className="row">
                        <div className="col-lg-12">


                            <div style={{ textAlign: "center" }}>

                                <p style={{
                                    color: "#ff6b6b",
                                    letterSpacing: "1px",
                                    fontWeight: "bold",
                                    fontSize: " 15px"
                                }}>
                                    {headerData.top}
                                </p>

                                <motion.h1
                                    initial={{ opacity: 0.5 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    style={{ textShadow: "2px 2px 8px black" }}
                                >
                                    {headerData.heading}
                                </motion.h1>

                                <motion.div
                                    className="headerborder"
                                    initial={{ backgroundColor: "rgb(0,0,0)" }}
                                    animate={{
                                        backgroundColor: "rgb(255,255,255)",
                                        transition: { duration: 3 }
                                    }}

                                    style={{
                                        margin: "auto auto",
                                        marginTop: "1em"
                                    }}>
                                </motion.div>
                            </div>

                            <section className="blog-grid padding-top-40px padding-bottom-50px">
                                <div className="container">
                                    <div className="row" style={{ paddingTop: "2em" }}>

                                        <div className="col-lg-6" style={{ textAlign: "center", marginTop: "10px" }}>
                                            <img
                                                src={headerData.image}
                                                className="imgstyle"
                                            />
                                        </div>

                                        <div
                                            className="col-lg-6"
                                            style={{
                                                marginTop: "10px",
                                                fontSize: "20px",
                                                overflowWrap: "break-word"
                                            }}>

                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1, transition: { duration: 1, delay: 0 } }}
                                                whileTap={{ scale: 0.98 }}>
                                                <Paper
                                                    elevation={3}
                                                    style={{ padding: "1em" }}>
                                                    {
                                                        headerData.descriptions.map((description) => (
                                                            <p style={TextStyle}>{description}</p>
                                                        ))
                                                    }
                                                </Paper>
                                            </motion.div>
                                            <hr />

                                            {dataLink !== '/formulas' ?
                                                <FilterForm filterName={headerData.filterName} /> : undefined}

                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
