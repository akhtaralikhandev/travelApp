import React, { useEffect } from "react";
import MateriaMedicas from "../../components/materiamedica/MateriaMedicas";
import Layout from "../../components/common/Layout";
import FilterSection from "../../components/common/filterSection/FilterSection";
import Banner from "../../components/common/heroBanner/Banner";
import MateriaMedicaData from "../../store/MateriaMedicaData";
import "./index.scss";

function MateriaMedicaPage() {
  useEffect(() => {
    document.title = MateriaMedicaData.pageTitle;
  }, []);

  return (
    <Layout>
      <main className="main_container">
        <Banner data={MateriaMedicaData} />
        <FilterSection label={MateriaMedicaData.filterLabel} />
        <MateriaMedicas />
      </main>
    </Layout>
  );
}

export default MateriaMedicaPage;
