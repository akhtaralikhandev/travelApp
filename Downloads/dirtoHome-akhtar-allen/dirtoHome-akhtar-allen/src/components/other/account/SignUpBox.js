import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai"
import { FaRegEnvelope } from "react-icons/fa"
import { FiLock } from "react-icons/fi"
import { CountryListData } from "../../../store/CountryListData"
import users from "./../../../services/users"
import SelectCountry from "../../common/SelectCountry"
import ReactSelect, { components } from "react-select"
import ReactCountryFlag from "react-country-flag"

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid rgba(128, 137, 150, 0.3)",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #9e9e9e",
    },
    paddingLeft: 32,
    height: 49,
    minHeight: 49,
  }),
}

const Option = ({ data, onChange }) => {
  const handleOptionClick = () => {
    onChange(data)
  }
  return (
    <div onClick={handleOptionClick} style={{ cursor: "default" }} className="country-option">
      <ReactCountryFlag style={{ marginLeft: "1rem", marginRight: "1rem" }} countryCode={data.code} svg />
      {data.name}
    </div>
  )
}

function SignUpBox(props) {
  const [title, setTitle] = useState("Signup")
  const [activeBtn, setActiveBtn] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [role, setRole] = useState()
  const [country, setCountry] = useState()
  const [errorMessage, setErrorMessage] = useState("")
  const [selectedOptions, setSelectedOptions] = useState()


  useEffect(() => {
    setCountry(selectedOptions?.name)
  }, [selectedOptions])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = {
        firstName,
        lastName,
        username,
        email,
        password,
        role,
        country,
      }

      await users.saveUser(user)
      //await auth.login(user.username, user.password);
      window.location = "/dashboard"
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        //console.log(ex.response.data);
        setErrorMessage(ex.response.data)
      }
    }
  }

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected)
  }

  useEffect(() => {}, [])

  const showTitle = (accountType) => {
    if (accountType === "solo-practice") {
      setTitle("Signup for Solo Practice")
      setActiveBtn("solo")
      setRole("622a75a8773388bb0b220190")
    }

    if (accountType === "clinic") {
      setTitle("Signup for Clinic")
      setActiveBtn("clinic")
      setRole("622a7596773388bb0b220189")
    }

    if (accountType === "patient") {
      setTitle("Signup for Patient")
      setActiveBtn("patient")
      setRole("622930056405e723619e88d8")
    }
    
  }

  const btnClass = "btn bg-blue text-white shadow-none"
  const activeBtnClass = "btn custom-btn text-white shadow-none"

  return (
    <>
      <h4 className="text-center">Select Account Type</h4>
      <div className="container my-4">
        <div className="row justify-content-between">
          <div className="col-auto">
            <button onClick={() => showTitle("solo-practice")} className={activeBtn === "solo" ? activeBtnClass : btnClass }>
              Solo - Practice
            </button>
          </div>
          <div className="col-auto">
            <button onClick={() => showTitle("clinic")} id="clinic" className={activeBtn === "clinic" ? activeBtnClass : btnClass }>
              Clinic with Staff
            </button>
          </div>
          <div className="col-auto">
            <button onClick={() => showTitle("patient")} id="patient" className={activeBtn === "patient" ? activeBtnClass : btnClass }>
              Patient / Common User
            </button>
          </div>
        </div>
      </div>
      <div className="billing-form-item mb-0 shadow-sm">
        <div className="billing-title-wrap border-bottom-0 pr-0 pl-0 pb-0 text-center">
          <h3 className="widget-title font-size-28 pb-0">{props.title ? props.title : title}</h3>
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
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">First name</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Last name</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Username</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <AiOutlineUser />
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Email</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <FaRegEnvelope />
                      </span>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
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
                {/* <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Select Account Type</label>
                    <div className="form-group">
                      <span className="form-icon">
                        <FiLock />
                      </span>
                      <select
                        className="form-control"
                        type="text"
                        name="accounttype"
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Confirm password"
                        required
                      >
                        <option value="">Select Account Type</option>
                        <option value="622a75a8773388bb0b220190">
                          Solo - Practice{" "}
                        </option>
                        <option value="622a7596773388bb0b220189">
                          Clinic with Staff
                        </option>
                        <option value="622930056405e723619e88d8">
                          Patient / Common User
                        </option>
                      </select>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="input-box">
                    <label className="label-text">Select Country</label>
                    <div className="form-group">
                      <span className="form-icon" style={{ zIndex: 10 }}>
                        <FiLock />
                      </span>
                      <ReactSelect
                        placeholder="Select a Location"
                        options={CountryListData}
                        styles={customStyles}
                        value={selectedOptions}
                        getOptionLabel={(option) => option.name}
                        components={{
                          Option: (props) => <Option {...props} onChange={handleSelectChange} />,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <div className="custom-checkbox d-block mr-0">
                      <input type="checkbox" id="chb13" required />
                      <label htmlFor="chb13">
                        I declare that I have read the
                        <Link to="#" className="color-text">
                          {" "}
                          Privacy Policy and Term of Use.
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="btn-box margin-top-20px margin-bottom-20px">
                    <button className="theme-btn border-0" type="submit">
                      Register account
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p className="font-weight-medium">
                    Already have an account?
                    <div onClick={() => props.handleLogin()} className="color-text font-weight-medium" role="button">
                      Login
                    </div>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpBox
