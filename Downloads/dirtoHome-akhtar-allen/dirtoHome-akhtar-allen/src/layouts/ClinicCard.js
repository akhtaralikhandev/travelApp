import React from "react";

export default function ClinicCard(props) {
  return (
    <div>
      <div className="row" style={{ justifyContent: "space-evenly", marginTop: "5em" }}>
        {props.data.map((item) => {
          return (
            <div className={"column-td-6 col-lg-4"} key={item.id}>
              <div
                className="icon-box"
                style={{ minHeight: "80px", height: "8em", maxHeight: "120px" }}
              >
                <div className="info-icon" style={{ overflow: "hidden", borderRadius: 10 }}>
                  <img
                    src={item.icon}
                    alt="none"
                    style={{
                      height: "100%",
                      transform: "scale(1.1)",
                    }}
                  />
                </div>
                <div className="info-content">
                  <h4 className="info__title text-center">{item.title}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
