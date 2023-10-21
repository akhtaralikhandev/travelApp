import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeFilter, changepaginationvisiblity } from "../actionCreator";
// import ReactCountryFlag from ""
import ReactCountryFlag from "react-country-flag";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ filterName }) {
  const classes = useStyles();
  const Gstate = useSelector((s) => s.entities.acudata);

  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const dispatch = useDispatch();
  const ClinicsState = useSelector((s) => s.entities.clinics);
  console.log("ClinicsState", ClinicsState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event truggerd");

    if (Gstate.acudata.pageheaderheading == "Clinics") {
      dispatch(changepaginationvisiblity(true));
      dispatch(activeFilter(state));
    } else {
      dispatch(activeFilter(state));
    }
  };

  const MeridianList =
    Gstate.status === "loaded"
      ? Gstate.list
          .filter(
            (elem, index) =>
              Gstate.list.findIndex((obj) => obj.meridian === elem.meridian) ===
              index
          )
          .map((item) => (
            <MenuItem
              key={item.meridian}
              id={item.meridian}
              value={item.meridian}
            >
              {item.meridian}
            </MenuItem>
          ))
      : "Loading....";

  const CountryList =
    Gstate.acudata.pageheaderheading === "Clinics"
      ? ClinicsState.countrylist.map((item) => (
          <MenuItem key={item.code} id={item.code} value={item.name}>
            <ReactCountryFlag
              countryCode={item.code}
              svg
              style={{ marginRight: "1em" }}
            />
            {item.name} {item.dial_code}
            {/* <Typography variant="body1" style={{ marginLeft: "em"}}> */}
            {/* {item.dial_code} */}
            {/* </Typography> */}
          </MenuItem>
        ))
      : null;

  const View =
    Gstate.acudata.pageheaderheading === "Clinics" ? CountryList : MeridianList;

  return (
    <Paper
      elevation={3}
      style={{ padding: "1rem" }}
    >
      <Typography variant="h5">{filterName} </Typography>
      <br />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          style={{ width: "4em" }}
        >
          {filterName}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          className="ps-0"
          onChange={handleChange}
          label={filterName}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {View}
        </Select>

        <br />

        <div style={{ textAlign: "right" }}>
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="theme-btn border-0"
            type="submit"
            value="submit"
            onClick={(event) => handleSubmit(event)}
          >
            <i className="la la-paper-plane"></i>
            Submit
          </motion.button>
        </div>
      </FormControl>
    </Paper>
  );
}
