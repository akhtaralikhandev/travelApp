import React, { useEffect } from "react";
import Nav from "../../../layouts/Nav.js";

import { useDispatch, useSelector } from "react-redux";
import { activeId, activeNav } from "../../../actionCreator";

import Typography from "@material-ui/core/Typography";

import QRCode from "react-qr-code";

import BreadCrumb from "../../../layouts/BreadCrumb";
import ItemList from "../../../layouts/ItemList";

const Items = (incomingData) => {
    const props = incomingData.newItem;

    const Thisstate = useSelector((s) => s.entities.acupoint);
    const dispatch = useDispatch();
    // const  Gstate= useSelector(selectData)
    const page = Thisstate.acupagelink;

    const activeNaV = Thisstate.nav;

    useEffect(() => {
        dispatch(activeId(props.id));
        dispatch(activeNav("Profile"));
        console.log(Thisstate.activeid);
    }, [props]);
    return (
        <div>
            <ul>
                <BreadCrumb name={page} />
                <br />

                <div className="">
                    <Typography variant="h4">{props.name}</Typography>
                    <div className="headerborder"></div>
                </div>

                <br />
                <br />

                <Typography
                    variant="h4"
                    style={{
                        color: "rgb(100,100,100)",
                    }}
                >
                    Epithet
                </Typography>
                <br />

                <div className="qrcode">
                    <QRCode value={`/acupunture/${page}`} size={110} />
                </div>

                <ItemList listName="Pinyin" value={props.pinyin} />
                <ItemList listName="English" value={props.english} />
                <ItemList listName="Japanese" value={props.japanese} />
                <ItemList listName="Korean" value={props.korean} />
                <ItemList listName="Vietnamese" value={props.vietnamese} />

                <br />

                <Nav page="acupunctures" />

                <br />
            </ul>
            <ul
                style={
                    activeNaV === "Profile"
                        ? { display: "block" }
                        : { display: "none" }
                }
            >
                <ItemList
                    listName="Physical Location"
                    value={props.physicalLocation}
                />
                <ItemList listName="Five Element" value={props.fiveElement} />
                <ItemList listName="Horary Cycle" value={props.horarycycle} />
                <ItemList
                    listName="Functionality"
                    value={props.functionality}
                />
                <ItemList listName="Meridian" value={props.meridian} />
                <ItemList listName="Element" value={props.element} />
                <ItemList listName="Physical Location" value={props.caution} />
            </ul>
        </div>
    );
};

export default React.memo(Items);
