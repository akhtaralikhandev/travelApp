import React from "react";
import bg from "../../assets/images/custom/bg.jpg";
import Breadcrumb from "../../components/common/Breadcrumb";
import Layout from "../../components/common/Layout";
import NavMenuBar from "../../components/common/NavMenuBar";
import MateriaMedicaDetail from "../../components/materiamedica/MateriaMedicaDetail/MateriaMedicaDetail";
import usePathSegments from "../../hooks/usePathSegments";

function MateriaMedica() {
  const [pathSegments] = usePathSegments() || [];

  return (
    <Layout>
      <main>
        <Breadcrumb title="Materia Medica" subTitle="MateriaMedica" img={bg} />

        <section className="blog-single-area padding-top-40px padding-bottom-70px">
          <div className="container">
            <NavMenuBar pathSegments={pathSegments} />
            <MateriaMedicaDetail />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default MateriaMedica;
