import React from 'react';
import { GoLocation } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'

function ContactSidebar({contactinfo}) {
    return (
        <>
            <div className="billing-form-item">
                <div className="billing-title-wrap">
                    <h3 className="widget-title pb-0">
                        Contact Us
                    </h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <div className="our-office-content">
                        {/* <img src={contactinfo.img} alt="office image" className="w-100 radius-round" /> */}
                        {/* <div className="section-heading mt-4 mb-4">
                            <p className="sec__desc font-size-15 line-height-24">
                                {contactinfo.desc}
                            </p>
                        </div> */}
                        <ul className="info-list">
                            <li className="row mb-2 mr-2">
                                 
                                <span className="col-3"><span className="la"><GoLocation /></span></span> 
                                <span className="row float-right col-6"  style={{ flexDirection: "column" }}>
                                {contactinfo.address.split(",,").map((item)=> <span class="col-12">{item}<br /></span>)}
                                </span>
                            
                            </li>
                            <li className="d-inline-block mb-2 mr-2">
                                <span className="la"><FiPhone /></span> {contactinfo.phoneNum}
                            </li>
                            <li className="d-inline-block mb-2 mr-2">
                                <span className="la"><FaRegEnvelope /></span> {contactinfo.email}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="billing-title-wrap pt-0">
                    <h3 className="widget-title pb-0">Working Hours</h3>
                    <div className="title-shape margin-top-10px"></div>
                </div>
                <div className="billing-content">
                    <ul className="list-items">
                        <li className="d-flex align-items-center justify-content-between color-text-2">
                            <strong className="font-weight-medium">{contactinfo.opendays}</strong>
                            <strong className="font-weight-medium color-text-3">{contactinfo.opendaytime}</strong>
                        </li>
                        <li className="d-flex align-items-center justify-content-between color-text-2">
                            <strong className="font-weight-medium">{contactinfo.closeday}</strong><strong className="color-text">Closed</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ContactSidebar;
