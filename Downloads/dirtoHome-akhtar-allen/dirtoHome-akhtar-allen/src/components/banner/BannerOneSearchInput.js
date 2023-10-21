import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { FiSearch } from "react-icons/fi";
import { default as ReactSelect, default as Select } from "react-select";
import { CountryListData } from "../../../store/CountryListData";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid rgba(128, 137, 150, 0.3)",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #9e9e9e",
    },
    paddingLeft: 32,
    height: 49,
    minHeight: 49,
  }),
};

const customStyles1 = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? state.data.value : "white",
  }),
};

const Option = ({ data, onChange }) => {
  const handleOptionClick = () => {
    onChange(data);
  };
  return (
    <div
      onClick={handleOptionClick}
      style={{ cursor: "default", color: "black" }}
      className="country-option"
    >
      <ReactCountryFlag
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
        countryCode={data.code}
        svg
      />
      {data.name}
    </div>
  );
};

const state = {
  selectedCatOp: null,
  categories: [
    {
      value: 0,
      label: "Select a category",
    },
    {
      value: 1,
      label: "All Type of Clinics",
    },
    {
      value: 2,
      label: "General Practitioners",
    },
    {
      value: 3,
      label: "TCM",
    },
    {
      value: 4,
      label: "Ayurveda",
    },
    {
      value: 5,
      label: "Homeopathy",
    },
    {
      value: 6,
      label: "Bach-Bloesem",
    },
    {
      value: 7,
      label: "Pharmacy",
    },
    {
      value: 8,
      label: "Hospitals",
    },
    {
      value: 9,
      label: "Dentistry",
    },
    {
      value: 10,
      label: "Reiki",
    },
  ],
};
export default function BannerOneSearchInput() {
  const [selectedOptions, setSelectedOptions] = useState(null);
  return (
    <>
      <div
        className="main-search-input"
        style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="main-search-input-item">
          <div className="contact-form-action">
            <form action="#">
              <div className="form-group mb-0">
                <span className="form-icon">
                  <FiSearch />
                </span>
                <input className="form-control" type="text" placeholder="What are you looking for?"/>
              </div>
            </form>
        </div>
		
        <div className="contact-form-action">
            <form action="#">
              <div className="form-group mb-0">
                <span className="form-icon">
                  <FiSearch />
                </span>
                <input className="form-control" type="text" placeholder="Type in the City of the Clinic"/>
              </div>
            </form>
        </div>
       
        <div className="main-search-input-item category">
          <Select 
		    placeholder="Select a Category"
            options={state.categories}
            styles={customStyles1}
          />
        </div>

        <div className="main-search-input-item location">
          <ReactSelect
            placeholder="Select a Country"
            options={CountryListData}
            styles={customStyles}
            value={selectedOptions}
            getOptionLabel={(option) => option.name}
            components={{
              Option: (props) => (
                <Option
                  {...props}
                  onChange={(selected) => {
                    setSelectedOptions(selected);
                  }}
                />
              ),
            }}
          />
        </div>

        <div className="main-search-input-btn">
          <button className="button theme-btn" type="submit">
            Search
          </button>
        </div>
     </div>
     </div>
   </>
  )

}
