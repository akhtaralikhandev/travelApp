import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import SignUpBox from "../components/other/account/SignUpBox"
import GeneralHeader from "../components/common/GeneralHeader"
import Breadcrumb from "../components/common/Breadcrumb"
// import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer"
import ScrollTopBtn from "../components/common/ScrollTopBtn"
import breadcrumbimg from "../assets/images/oldpaper-bg.jpg"
// import sectiondata from "../store/store";
import { Button } from "@material-ui/core"
import LoginBox from "../components/other/account/LoginBox"
import RecoverPassBox from "../components/other/account/RecoverPassBox"
import SignupForm from "../components/other/account/SignupForm"

function SignUp(props) {
  const location = useLocation()
  // Access the current URL
  const currentUrl = location.pathname + location.search
  let authMethod
  if (currentUrl === "/signup") authMethod = "SignUp"
  if (currentUrl === "/login") authMethod = "Login"
  const [active, setactive] = useState(authMethod)

  useEffect(() => {
    document.title = active
  }, [])
  return (
    <main className="signup-page">
      {/* Header */}
      <GeneralHeader />

      {/* Breadcrumb */}
      {/* <Breadcrumb CurrentPgTitle={active} img={state.breadcrumbimg} />*/}
      <Breadcrumb CurrentPgTitle={active} img={breadcrumbimg} />
      <section className="form-shared padding-top-40px padding-bottom-100px">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="row mx-4" style={{ justifyContent: "center" }}>
                <Button
                  style={active === "Login" ? { color: "#ff6b6b", border: "1px solid #ff6b6b" } : null}
                  onClick={() => setactive("Login")}
                  className="p-2 shadow-sm px-4 border mt-2 mx-2"
                >
                  LogIn
                </Button>
                <Button
                  style={active === "SignUp" ? { color: "#ff6b6b", border: "1px solid #ff6b6b" } : null}
                  onClick={() => setactive("SignUp")}
                  className="p-2 shadow-sm px-4 border mt-2 mx-2"
                >
                  SignUp
                </Button>
                <Button
                  style={active === "Recover Password" ? { color: "#ff6b6b", border: "1px solid #ff6b6b" } : null}
                  onClick={() => setactive("Recover Password")}
                  className="p-2 shadow-sm border mt-2 mx-2"
                >
                  Recover Password
                </Button>
              </div>
              <br />
              {active === "Login" ? (
                <LoginBox
                  title="Login to your account"
                  subtitle=""
                  handlePassword={() => setactive("Recover Password")}
                  handleRegister={() => setactive("SignUp")}
                />
              ) : null}
              {active === "SignUp" ? (
                <SignUpBox
                  subtitle=""
                  handlePassword={() => setactive("Recover Password")}
                  handleLogin={() => setactive("Login")}
                />
                // <SignupForm
                //   handlePassword={() => setactive("Recover Password")}
                //   handleLogin={() => setactive("Login")}
                // />
              ) : null}
              {active === "Recover Password" ? (
                <RecoverPassBox handleLogin={() => setactive("Login")} handleRegister={() => setactive("SignUp")} />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      {/* <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} /> */}

      {/* Footer */}
      <Footer />

      <ScrollTopBtn />
    </main>
  )
}

export default SignUp
