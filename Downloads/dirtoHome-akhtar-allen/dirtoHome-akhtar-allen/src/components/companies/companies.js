import React, { useState } from "react";
import TabList from "../common/tabs/TabList";
import CompaniesList from "./CompaniesList";
import TopicAndComments from "./TopicAndComments";

const TABS = ["Company", "Topics And Comments"];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="data mt-5">
      <TabList activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      {activeTab === TABS[0] && <CompaniesList />}
      {activeTab === TABS[1] && <TopicAndComments />}
    </section>
  );
}
