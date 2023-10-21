import React, { useState, useRef } from "react"
import SignUpBox from "./SignUpBox"

const SignupForm = (props) => {
  const [title, setTitle] = useState("Signup")
  const [activeBtn, setActiveBtn] = useState()
  const [role, setRole] = useState()

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
  const btnClass = "btn btn-danger shadow-none"
  const activeBtnClass = "btn btn-primary bg-blue text-white shadow-none"
  return (
    <>
      <h4 className="text-center">Select Account Type</h4>
      <div className="container mt-4">
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
      <div className="mt-5">
        <SignUpBox title={title} role={role} subtitle="" handlePassword={props.handlePassword} handleLogin={props.handleLogin} />
      </div>
    </>
  )
}

export default SignupForm
