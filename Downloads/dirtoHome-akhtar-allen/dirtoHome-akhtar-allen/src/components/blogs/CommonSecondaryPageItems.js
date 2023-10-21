import Typography from "@material-ui/core/Typography";
import React, { useEffect, useRef, useState } from "react";

import { useSelector } from "react-redux";
import Comment from "../../layouts/Comments";
import Control from "../../layouts/Controls";

import { useParams } from "react-router-dom";
import CreateTopic from "../../layouts/CreateTopic";
import { getPosts, getTopics } from "../../services/posts";
import AcuPointItems from "./SecondaryPageItems/AcuPointItems";
// import BusinessProfile from "./SecondaryPageItems/BusinessProfile";
// import FormulaSecondary from "./SecondaryPageItems/FormulaSecondary";
// import SalonItems from "./SecondaryPageItems/SalonProfilePageItems";
// import AcuPointItems from "../acupunctures/AcuPointProfile";
import BusinessProfile from "../BusinessProfile";
//import MateriaMedicaProfile from "./../BusinessProfile";
// import FormulaProfile from "./../formulas/FormulaProfile";
//import SalonItems from "./../SalonProfile";

const SalonItems = () =>(<></>)
const MateriaMedica = () =>(<></>)
const FormulaSecondary = () =>(<></>)
// const AcuPointItems = () =>(<></>)

function CommonSecondaryPageItems(props) {
    const [topics, setTopics] = useState([]);
    const { id: clinicsoloId } = useParams();
    // const [Filter,setFilter] = useState({})
    const Thisstate = useSelector((s) => s.entities.acupoint);
    const Gstate = useSelector((s) => s.entities.acudata);
    console.log("Gstate" , Gstate?.dataLink)
    const activeNav = Thisstate.nav;

    const Filter =
        Thisstate.acupointlinkload && Gstate.status === "loaded"
            ? Gstate.list.filter((item) =>
                  item.name === undefined
                      ? item
                      : item.name.includes(Thisstate.acupagelink)
              )
            : null;
    const getTopicsOfCategory = async (id) => {
        const topics = await getTopics();
        const comments = await getPosts();
        const filteredTopics = topics.data.filter((e) => e?.catId?._id === id);
        let topicsWithReplies = [];
        let replyComments = [];
        filteredTopics.forEach((element) => {
            replyComments = [];

            comments.data.forEach((element1) => {
                if (element1.topicId._id === element._id) {
                    replyComments.push(element1);
                }
            });
            let objet = element;
            objet.replyComments = replyComments;
            topicsWithReplies.push(objet);
        });
        setTopics(topicsWithReplies);
    };
    useEffect(() => {
        getTopicsOfCategory();
    }, []);

    const Render = (event) => {
        if (Gstate.dataLink === "/acupunctures") {
            return <AcuPointItems newItem={event} />;
        } else if (Gstate.dataLink === "/formulas") {
            return <FormulaSecondary newItem={event} />;
        } else if (Gstate.dataLink === "/materiamedica") {
            return <MateriaMedica newItem={event} />;
        } else if (Gstate.dataLink === "/amateriamedica") {
            return <aMateriaMedica newItem={event} />;
        } else if (Gstate.dataLink === "/hmateriamedica") {
            return <hMateriaMedica newItem={event} />;
        } else if (Gstate.dataLink === `/clinicsolo/${clinicsoloId}`) {
            return <BusinessProfile data={event} />;
        } else if (Gstate.dataLink === "/abc") {
            return <h1>Page Not Added still</h1>;
        }
    };

    const Content =
        Thisstate.acupointlinkload && Gstate.status === "loaded"
            ? Filter.map((items) => Render(items))
            : null;

    const ErroR =
        Thisstate.acupagelink?.length < 8 ? (
            <h2 style={{ textAlign: "center" }}>Please Visit Correct Link</h2>
        ) : (
            Content
        );
    const ErroR2 =
        Filter != null ? (Filter.length === 0 ? "No Data Found" : null) : null;

    const loadRef = useRef();
    return (
        <>
            <div className="card-item blog-card border-bottom-0">
                <div className="card-content pl-0 pr-0 pb-0">
                    <input
                        type="text"
                        style={{
                            width: 0,
                            height: 0,
                            opacity: 0,
                        }}
                        ref={loadRef}
                    />
                    <div>
                        {Gstate.dataLink === "/clinicsolo" ||
                        Gstate.dataLink === "/abc" ? null : (
                            <div>
                                {ErroR2}
                                {ErroR}
                            </div>
                        )}
                    </div>
                    {/* <div
                        style={
                            Gstate.dataLink.includes("/clinicsolo") &&
                            Gstate.list?.length === 1
                                ? { display: "block" }
                                : { display: "none" }
                        }
                    >
                        <ClinicsItems />
                    </div> */}
                    {Gstate.dataLink === "/abc" ? <SalonItems /> : null}
                    <br />
                    <br />

                    {Filter && (
                        <div
                            style={
                                activeNav === "Topic and Comments"
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            <Comment
                                category={Filter[0]}
                                page={Gstate.dataLink}
                            />
                        </div>
                    )}

                    {Filter && (
                        <div
                            style={
                                activeNav === "Create Topic"
                                    ? { display: "block" }
                                    : { display: "none" }
                            }
                        >
                            <CreateTopic category={Filter[0]} />
                        </div>
                    )}

                    <div
                        style={
                            (activeNav === "Topic and Comments") |
                            (activeNav === "Create Topic") |
                            (activeNav === "Profile") |
                            (Gstate.dataLink === `/clinicsolo/${clinicsoloId}`)
                                ? { display: "none" }
                                : {
                                      display: "flex",
                                      justifyContent: "space-around",
                                      marginTop: "30vh",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      textAlign: "center",
                                  }
                        }
                    >
                        <Typography variant="h4">No Data Found</Typography>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Control />
            </div>
        </>
    );
}

export default React.memo(CommonSecondaryPageItems);
