import React from "react";
import bg from "../../assets/images/custom/bg.jpg";
import CompanyDetail from "../../components/companies/CompanyDetail/CompanyDetail";
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/common/Layout";
import NavMenuBar from "../../components/common/NavMenuBar";
import usePathSegments from "../../hooks/usePathSegments";

function Company() {
  const [pathSegments] = usePathSegments() || [];

  return (
    <Layout>
      <main>
        <Breadcrumb title="Company" subTitle="Company" img={bg} />

        <section className="blog-single-area padding-top-40px padding-bottom-70px">
          <div className="container">
            <NavMenuBar pathSegments={pathSegments} />
            <CompanyDetail />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Company;
