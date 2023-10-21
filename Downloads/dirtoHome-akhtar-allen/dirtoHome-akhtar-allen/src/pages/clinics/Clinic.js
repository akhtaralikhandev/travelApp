import React from "react";
import bg from "../../assets/images/custom/bg.jpg";
import ClinicDetail from "../../components/clinics/ClinicDetail/ClinicDetail";
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/common/Layout";
import NavMenuBar from "../../components/common/NavMenuBar";
import usePathSegments from "../../hooks/usePathSegments";

function Clinic() {
  const [pathSegments] = usePathSegments() || [];

  return (
    <Layout>
      <main>
        <Breadcrumb title="Clinic" subTitle="Clinic" img={bg} />

        <section className="blog-single-area padding-top-40px padding-bottom-70px">
          <div className="container">
            <NavMenuBar pathSegments={pathSegments} />
            <ClinicDetail />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Clinic;
