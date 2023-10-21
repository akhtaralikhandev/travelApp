import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import auth from "./../../../services/authservice";

function LoginBox(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.login(username, password);
       window.location.href = "http://aivoluon.com:3000/";
      
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        //console.log(ex.response.data);
        setErrorMessage(ex.response.data);
      }
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="billing-form-item mb-0">
        <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
          <h3 className="widget-title font-size-28 pb-0">{props.title}</h3>
          <p className="font-size-16 font-weight-medium">{props.subtitle}</p>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="billing-content">
          <div className="contact-form-action">
            <form method="post" onSubmit={handleSubmit}>
              <div className="row">
                {/* <SignInOptions /> */}

                {/* <div className="col-lg-12">
                                    <div className="account-assist mt-4 mb-4 text-center">
                                        <p className="account__desc">or</p>
                                    </div>
                                </div> */}
                {/* Above code is for social network enable it is requried */}

                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Username, or email</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username, or email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Password</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <FiLock />
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="custom-checkbox mr-0 d-flex align-items-center justify-content-between">
                      <div>
                        <input type="checkbox" id="chb1" />
                        <label htmlFor="chb1">Remember Me</label>
                      </div>
                      <div>
                        <div
                          onClick={() => props.handlePassword()}
                          className="color-text font-weight-medium"
                          role="button"
                        >
                          Forgot password?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="btn-box margin-top-20px margin-bottom-20px">
                    <button className="theme-btn border-0" type="submit">
                      Login now
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p className="font-weight-medium">
                    Not a member?
                    <div
                      onClick={() => props.handleRegister()}
                      className="color-text font-weight-medium"
                      role="button"
                    >
                      Register
                    </div>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
