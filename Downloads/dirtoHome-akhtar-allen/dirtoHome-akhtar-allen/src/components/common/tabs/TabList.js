import React from "react";
import Tab from "./Tab";

const TabList = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="container">
      <div
        className="row"
        style={{ marginTop: "-3em", justifyContent: "space-evenly" }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            activeTab={activeTab}
            tab={tab}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </div>
  );
};

export default TabList;
