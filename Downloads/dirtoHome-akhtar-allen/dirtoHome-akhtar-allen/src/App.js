import React, { useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { Switch, useLocation } from "react-router-dom";
import { store } from "./app/store";
import "./assets/css/customcss.css";
import InternalTopicDetail from "./components/internaltopic/InternalTopicDetail";
import LayoutDefault from "./layouts/LayoutDefault";
import Contact from "./pages/Contact";
import CookieBanner from "./pages/CookieBanner";
import Error from "./pages/Error";
import Form2 from "./pages/Form2";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignUp from "./pages/SignUp";
import TermOfUse from "./pages/TermOfUse";
//import AcupunctureDetailsPage from "./pages/acupuncture/Acupuncture";
//import FormulaDetailsPage from "./pages/formulas/Formula";
//import Acupunctures from "./pages/acupuncture/Acupunctures";
//import Formulas from "./pages/formulas/Formulas";
import CommonHomePage from "./pages/blogs/CommonHomePage";
import CommonSecondaryPage from "./pages/blogs/CommonSecondaryPage";
import Dashboard from "./pages/dashboard/Dashboard";
import ForumHome from "./pages/forum/ForumHome";
import Forums from "./pages/forum/Forums";
import TopicDetail from "./pages/forum/TopicDetail";
import AboutUs from "./pages/homes/AboutUs";
import Home from "./pages/homes/Home";
import MateriaMedicaDetails from "./pages/materiamedica/MateriaMedica";
import MateriaMedicas from "./pages/materiamedica/MateriaMedicas";
import authservice from "./services/authservice";
import ClinicsData from "./store/ClinicData";
//import FormulaData from "./store/FormulaData";
import AppRoute from "./utils/AppRoute";
import ProtectedRoute from "./utils/ProtectedRoute";
import ScrollReveal from "./utils/ScrollReveal";

const App = () => {
  const childRef = useRef();
  let location = useLocation();
  const [loggedId, setLoggedIn] = useState(false);

  useEffect(() => {
    if (authservice.getJwt()) {
      setLoggedIn(true);
    }
    document.body.classList.add("is-loaded");
    childRef.current.init();
  }, [location]);

  return (
    <>
      <Provider store={store}>
        <ScrollReveal ref={childRef}>
          {() => (
            <Switch>
              <AppRoute
                exact
                path="/"
                component={Home}
                layout={LayoutDefault}
              />
              <AppRoute path="/about-us" component={AboutUs} />
              <AppRoute path="/contact-us" component={Contact} />
              <AppRoute path="/form2" component={Form2} />
              <AppRoute
                path="/cookie-acceptance-banner"
                component={CookieBanner}
              />
              <AppRoute
                path="/clinics"
                component={
                  <CommonHomePage
                    datalink="/clinicsolo"
                    pageDetails={ClinicsData}
                  />
                }
              />
              <AppRoute path="/termofuse" component={TermOfUse} />
              <AppRoute path="/forum/topic/:topicId" component={TopicDetail} />
              <AppRoute path="/forum" component={ForumHome} exact />
              <AppRoute path="/privacypolicy" component={PrivacyPolicy} />
              <AppRoute path="/signup" component={SignUp} />
              <AppRoute path="/login" component={SignUp} />
              {/* <AppRoute
                path="/acupuncture/topic/:topicId"
                component={<InternalTopicDetail />}
              /> */}
              <AppRoute
                path="/forumcategories/topic/:topicId"
                component={TopicDetail}
              />
              <ProtectedRoute
                path="/forum/:forum_id"
                component={Forums}
                exact
              />
              <AppRoute
                path="/categories/:forum_cat_id"
                component={ForumHome}
              />
              {loggedId && <AppRoute path="/dashboard" component={Dashboard} />}
              {/* <AppRoute
                path="/acupunctures/:id"
                component={(event) => <AcupunctureDetailsPage name={event} />}
              />
              <AppRoute
                path="/acupunctures"
                component={() => <Acupunctures />}
              /> */}
              <AppRoute
                path="/salon-profile/:name"
                component={(event) => (
                  <div>
                    <CommonSecondaryPage datalink="/abc" name={event} />
                  </div>
                )}
              />
              <AppRoute
                path="/clinicsolo/:id"
                component={(event) => (
                  <div>
                    <CommonSecondaryPage
                      datalink={event.location.pathname}
                      name={event}
                    />
                  </div>
                )}
              />
              <AppRoute
                path="/forumcategories/:name"
                component={(event) => (
                  <div>
                    <CommonSecondaryPage
                      datalink="/forumcategories"
                      name={event}
                    />
                  </div>
                )}
              />
              {/* <AppRoute
                path="/formulas/:id"
                component={(event) => (
                  <div>
                    <CommonSecondaryPage datalink="/formulas" name={event} />
                  </div>
                )}
              /> */}
              {/* <AppRoute
                path="/formulas/:id"
                component={(event) => <FormulaDetailsPage name={event} />}
              />
              <AppRoute path="/formulas" component={() => <Formulas />} />
              <AppRoute
                path="/materiamedica/:id"
                component={() => <MateriaMedicaDetails />}
              /> */}
              <AppRoute
                path="/materiamedica"
                component={() => <MateriaMedicas />}
              />
              <AppRoute
                path="/clinics/:name"
                component={(event) => (
                  <div>
                    <CommonSecondaryPage datalink="/clinicsolo" name={event} />
                  </div>
                )}
              />
              <AppRoute
                path="/salon-profile/:name"
                component={(event) => (
                  <CommonSecondaryPage datalink="/salon" name={event} />
                )}
              />
              <AppRoute component={Error} />
            </Switch>
          )}
        </ScrollReveal>
      </Provider>
    </>
  );
};

export default App;
