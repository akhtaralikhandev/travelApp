import React, { useEffect } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { useDispatch } from "react-redux";
import { loadData } from "../../actionCreator";
import AcupunctureBanner from "../../components/acupunctures/acu_components/Banner.js";

function CommonHomePage({ pageDetails, dataLink }) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = pageDetails.pageTitle;
    dispatch(loadData());
  }, []);

  return (
    <main className="blog-fullwidth-page">
      <GeneralHeader />
      <AcupunctureBanner
        headerData={pageDetails}
        dataLink={dataLink}
      />

      <Footer />
      <ScrollTopBtn />
    </main>
  );
}

export default React.memo(CommonHomePage);
