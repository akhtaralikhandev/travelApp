import React, { useEffect } from "react";
import Clinic from "../../components/clinics/Clinic";
import Layout from "../../components/common/Layout";
import FilterSection from "../../components/common/filterSection/FilterSection";
import Banner from "../../components/common/heroBanner/Banner";
import ClinicsData from "../../store/ClinicsData";
import "./index.scss";

function ClinicPage() {
  useEffect(() => {
    document.title = ClinicsData.pageTitle;
  }, []);

  return (
    <Layout>
      <main className="main_container">
        <Banner data={ClinicsData} />
        <FilterSection label={ClinicsData.filterLabel} />
        <Clinic />
      </main>
    </Layout>
  );
}

export default ClinicPage;
