import React from "react";

import { useDispatch, useSelector } from "react-redux";
// import { selectAcuPoint } from "../../"
import { activeNav } from "../actionCreator";

import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import { useEffect } from "react";

const CustomNav = (props) => {
    const dispatch = useDispatch();

    const Width = props.name.length > 10 ? { width: "12em" } : { width: "7em" };
    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <motion.div
            onClick={() => dispatch(activeNav(props.name))}
            className="mycustomnav"
            style={Width}
        >
            <motion.div
                // whileHover={{ scale: 1.05, border: "2px solid red" }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                }}
            >
                <Typography
                    variant="body1"
                    className="mycustomnavactive"
                    style={
                        props.activenav === props.name
                            ? { border: "1px solid red" }
                            : null
                    }
                >
                    {props.name}
                </Typography>
            </motion.div>
        </motion.div>
    );
};

const Nav = (props) => {
    const Thisstate = useSelector((s) => s.entities.acupoint);
    const Gstate = useSelector((s) => s.entities.acudata);
    const navigation = Thisstate.nav;

    useEffect(() => {
        console.log(Thisstate);
    }, []);

    // Gstate.datalink please remove after adding real link
    const NavArray =
        Gstate.status == "loaded" || Gstate.datalink === "/abc"
            ? Thisstate.navdata.map((item) => (
                  <CustomNav name={item.name} activenav={navigation} />
              ))
            : "";

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "90vw",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexFlow: "row wrap",
                    textAlign: "center",
                }}
                className="custom-scroll"
            >
                {NavArray}
                {props.page === "acupunctures" && (
                    <CustomNav name="Create Topic" />
                )}
            </div>
        </div>
    );
};

export default React.memo(Nav);