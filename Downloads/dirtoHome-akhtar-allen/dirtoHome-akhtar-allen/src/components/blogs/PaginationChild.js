import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { activeFilter } from "../../actionCreator";

const List = (props) => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(activeFilter(event));
    };

    const color = {
        background: "linear-gradient(to bottom right,red, rgb(255, 149, 149))",
        color: "white",
        boxShadow: "7px 7px 10px rgb(150,150,150)",
    };

    const Style = props.activeFilter == props.filter ? color : null;
    return (
        <motion.li
            style={Style}
            className="mycustomliststyle"
            initial={{ borderRadius: " 0" }}
            whileTap={{
                scale: 0.8,
            }}
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            onClick={() => handleClick(props.filter)}
        >
            <Typography style={{ color: "white" }} variant="h6">
                <small> {props.filter.toUpperCase()} </small>
            </Typography>
        </motion.li>
    );
};

export default React.memo(List);
