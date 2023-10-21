import React from 'react';

function InfoBoxOne(props) {
    return (
        <div className="row" style={{ justifyContent: "space-evenly"}}>
            {props.data.map(item => {
                return (
                    <div className={'column-td-6 col-lg-4'} key={item.id}>
                        <div className="icon-box" style={{ minHeight: "300px", height: "15em", maxHeight: "400px" }}>
                            <div className="info-icon">
                                {item.icon}
                            </div>
                            <div className="info-content">
                                <h4 className="info__title">
                                    {item.title}
                                </h4>
                                <p className="info__desc">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default InfoBoxOne;
