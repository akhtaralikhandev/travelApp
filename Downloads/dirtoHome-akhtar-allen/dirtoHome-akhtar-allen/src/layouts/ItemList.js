import CheckIcon from "@material-ui/icons/Check";
import { motion } from "framer-motion";
import React from "react";

const ItemList = (props) => {
    return (
        <motion.li whileHover={{ color: "red" }} className="myliststyle">
            {props.icon ? (
                props.icon
            ) : (
                <CheckIcon className="mycustomliststyle" />
            )}
            {props.listName} : {props.value === "NULL" ? null : props.value}
        </motion.li>
    );
};
export default ItemList;
