import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
import { recoverUser } from "../../../services/users";

function RecoverPassBox(props) {
  const [email, setEmail] = useState("");
  const [dialogue, setDialogue] = useState(null);
  const [success, setSuccess] = useState(true);

  const clearInput = () => {
    setEmail("");
  };

  const showDialogue = (_dialogue, success) => {
    setDialogue(_dialogue);
    if (success !== null) {
      setSuccess(success);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await recoverUser(email,"testusername");
      showDialogue(`Email sent to ${email}`, true);
      clearInput();
    } catch (error) {
      showDialogue(error.response.data, false);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setDialogue(null);
  };
  useEffect(() => {}, []);

  return (
    <>
      <section className="form-shared padding-top-40px padding-bottom-100px">
        <div className="container">
          <>
            {dialogue !== null ? (
              success ? (
                <div class="alert alert-success" role="alert">
                  {dialogue}
                </div>
              ) : (
                <div class="alert alert-danger" role="alert">
                  {dialogue}
                </div>
              )
            ) : null}
          </>
          <div>
            <div>
              <div className="billing-form-item mb-0  shadow-sm">
                <div className="billing-title-wrap">
                  <h3 className="widget-title font-size-28">
                    Recover Password!
                  </h3>
                  <p className="font-size-16 font-weight-medium">
                    Enter the email of your account to reset password. Then you
                    will receive a link to email to reset the password.If you
                    have any issue about reset password{" "}
                    <Link to="/contact-us" className="color-text">
                      contact us
                    </Link>
                  </p>
                </div>
                <div className="billing-content">
                  <div className="contact-form-action">
                    <form onSubmit={handleSubmit}>
                      <div className="input-box">
                        <label className="label-text">Your Email</label>
                        <div className="form-group">
                          <span className="la form-icon">
                            <FaRegEnvelope />
                          </span>
                          <input
                            className="form-control"
                            required
                            type="email"
                            name="text"
                            value={email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>
                      <div className="btn-box margin-top-20px margin-bottom-20px">
                        <button className="theme-btn border-0" type="submit">
                          reset password
                        </button>
                      </div>
                      <p className="font-weight-medium">
                        <div>
                          <div
                            onClick={() => props.handleLogin()}
                            className="color-text font-weight-medium"
                            role="button"
                          >
                            Login
                          </div>
                          <div
                            onClick={() => props.handleRegister()}
                            className="color-text font-weight-medium"
                            role="button"
                          >
                            Register
                          </div>
                        </div>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RecoverPassBox;
