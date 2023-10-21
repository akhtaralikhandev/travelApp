import React, { useEffect } from "react";
import BeautySalon from "../../components/BeautySalons/BeautySalon";
import Layout from "../../components/common/Layout";
import FilterSection from "../../components/common/filterSection/FilterSection";
import Banner from "../../components/common/heroBanner/Banner";
import BeautySalonsData from "../../store/BeautySalonsData";
import "./index.scss";

function BeautySalonPage() {
  useEffect(() => {
    document.title = BeautySalonsData.pageTitle;
  }, []);

  return (
    <Layout>
      <main className="main_container">
        <Banner data={BeautySalonsData} />
        <FilterSection label={BeautySalonsData.filterLabel} />
        <BeautySalon />
      </main>
    </Layout>
  );
}

export default BeautySalonPage;
