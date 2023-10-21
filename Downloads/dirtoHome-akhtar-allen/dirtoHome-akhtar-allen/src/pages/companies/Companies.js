import React, { useEffect } from "react"; 
import Company from "../../components/companies/Company";
import Layout from "../../components/common/Layout";
import FilterSection from "../../components/common/filterSection/FilterSection";
import Banner from "../../components/common/heroBanner/Banner";
import CompaniesData from "../../store/CompaniessData";
import "./index.scss";

function CompanyPage() {
  useEffect(() => {
    document.title = CompanysData.pageTitle;
  }, []);

  return (
    <Layout>
      <main className="main_container">
        <Banner data={CompaniesData} />
        <FilterSection label={CompanysData.filterLabel} />
        <Company />
      </main>
    </Layout>
  );
}

export default CompanyPage;
