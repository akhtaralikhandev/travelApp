import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GeneralHeader from "../components/common/GeneralHeader";
import bg3 from "../assets/images/custom/bg3.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setCookieAccept } from "../actionCreator";
import Button from "@material-ui/core/Button";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";


const Style = {
  cookieAccepted: {
    display: "none",
  },
  cookie: {
    display: "block",
    position: "fixed",
    bottom: 0,
    color: "white",
    background: "rgba(50,54,59,0.8)",
    minHeight: "100px",
    width: "100vw",
    zIndex: "1000"
  },
};

export default function CookieBanner() {
  const dispatch = useDispatch();
  const Gstate = useSelector((s) => s.entities.acudata);
  return (
    <div>
      <GeneralHeader />
      <section
        className="hero-wrapper"
        style={{
          backgroundImage: "url(" + bg3 + ")",
          paddingBottom: "1em",
          paddingTop: "10em",
        }}
      >
        <section className="blog-grid padding-bottom-50px">
          <div className="container">
            <div className="row">
              <div
                className=" col-sm-12 col-12 col-lg-12"
                style={{ marginTop: "10px" }}
              >
                <Paper elevation={3} style={{ overflow: "hidden" }}>
                  <div
                    className="w-100 p-2 text-left"
                    style={{ background: "rgb(230,230,230)" }}
                  >
                    <Typography variant="h5" style={{ color: "black" }}>
                      Cookie Acceptance Banner
                    </Typography>
                  </div>
                  <div className="w-100 text-left pt-4 pl-3 pb-4 pr-3">
                    <Typography variant="h6">Header Content Here</Typography>

                    <Typography variant="body2">
                      Helo this is the hidden content and the the last one was
                    </Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Paper
        elevation={0}
        style={
          Gstate.cookieaccept === true ? Style.cookieAccepted : Style.cookie
        }
      >
        <div className="container py-4">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-12 col-sm-9">
              <Typography variant="h6">This website uses cookies</Typography>
              <Typography variant="body2">
                We use cookies to personalise content and ads, to provide social
                media features and to analyse our traffic. We also share
                information about your use of our site with our social media,
                advertising and analytics partners who may combine it with other
                information that you’ve provided to them or that they’ve
                collected from your use of their services.
              </Typography>
            </div>
            <div className="col-12 col-sm-3 text-right">
              <Button
                variant="outlined"
                onClick={()=> dispatch(setCookieAccept(true))}
                className="px-5 border-white text-white"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </Paper>
      
      <Footer />

      <ScrollTopBtn />
    </div>
  );
}
