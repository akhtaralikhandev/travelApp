import React from "react";
import Tab from "./Tab";

const TabList = ({ tabs, activeTab, setActiveTab }) => {
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
