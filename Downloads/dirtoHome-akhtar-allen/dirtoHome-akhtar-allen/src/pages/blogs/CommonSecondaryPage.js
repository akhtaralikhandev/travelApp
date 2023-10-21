import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bg from "../../assets/images/custom/bg.jpg";
import CommonSecondaryPageItems from "../../components/blogs/CommonSecondaryPageItems";
import Breadcrumb from "../../components/common/Breadcrumb";
import GeneralHeader from "../../components/common/GeneralHeader";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import Footer from "../../components/common/footer/Footer";
import LoadingErrorView from "../../layouts/LoadingErrorView";
import { NavData } from "../../store/NavData";
import { useParams } from "react-router-dom";
import { acuPageLink, setDataLink, loadData, navdata } from "../../actionCreator";
import { ClinicsNavData } from "../../store/ClinicsNavData";
import { SalonNavData } from "../../store/SalonProfileNavData";

function CommonSecondaryPage(props) {
  const Gstate = useSelector((s) => s.entities.acudata);
  console.log("Gstate" , Gstate)
  const dispatch = useDispatch();
  const { id: clinicId } = useParams();
  console.log(props);
  useEffect(() => {
    dispatch(setDataLink(props?.datalinK));
    dispatch(loadData());
    props?.datalinK !== `/clinicsolo/${clinicId}` ? console.log("") : dispatch(navdata(ClinicsNavData));
    props?.datalinK !== "/abc" ? console.log("") : dispatch(navdata(SalonNavData));
    props?.datalinK !== "/formulas" ? console.log("") : dispatch(navdata(NavData));
    props?.datalinK !== "/acupunctures" ? console.log("") : dispatch(navdata(NavData));
    props?.datalinK !== "/materiamedica" ? console.log("") : dispatch(navdata(NavData));

    dispatch(acuPageLink(props.name.match.params.name || props.name.match.params.id));
    console.log(props);
  }, []);

  const DataLink = Gstate.datalink;
  const Status = Gstate.status;
  const Formulas = DataLink !== "/formulas" ? "" : "Formulas";
  const Acupuncture = DataLink !== "/acupunctures" ? "" : "Acupunture Point";
  const MateriaMedica = DataLink !== "/materiamedica" ? "" : "Materia Medica";
  const Clinics = !DataLink?.includes("/clinicsolo") ? "" : "Clinic Profile";
  const Salons = DataLink !== "/abc" ? "" : "Salon Profile";
  const Companies = DataLink !== "/abc" ? "" : "Company Profile";

  const menuTitle = (title) => {
    if (DataLink?.includes("/clinicsolo")) {
      return "clinicsolo";
    }
    return title;
  };
  return (
    <div>
      <GeneralHeader />
      <Breadcrumb
        CurrentPgTitle={Formulas + MateriaMedica + Acupuncture + Salons + Clinics + Companies}
        MenuPgTitle={menuTitle(Gstate.datalink?.slice(1, -1))}
        img={bg}
      />
      {Gstate.datalink === "/abc" ? null : <LoadingErrorView />}
      <section
        style={Status === "loaded" ? {} : { display: "none" }}
        className="blog-single-area padding-top-40px padding-bottom-70px"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {Gstate.acupagelink}
              <CommonSecondaryPageItems />
            </div>
          </div>
        </div>
      </section>
      {Gstate.datalink === "/abc" && (
        <div className="container">
          <CommonSecondaryPageItems />
        </div>
      )}
      <Footer />
      <ScrollTopBtn />
    </div>
  );
}

export default React.memo(CommonSecondaryPage);
