import React from "react";
import bg from "../../assets/images/custom/bg.jpg";
import BeautySalonDetail from "../../components/BeautySalons/BeautySalonDetail/BeautySalonDetail";
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/common/Layout";
import NavMenuBar from "../../components/common/NavMenuBar";
import usePathSegments from "../../hooks/usePathSegments";

function BeautySalon() {
  const [pathSegments] = usePathSegments() || [];

  return (
    <Layout>
      <main>
        <Breadcrumb title="BeautySalon" subTitle="BeautySalon" img={bg} />

        <section className="blog-single-area padding-top-40px padding-bottom-70px">
          <div className="container">
            <NavMenuBar pathSegments={pathSegments} />
            <BeautySalonDetail />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default BeautySalon;
