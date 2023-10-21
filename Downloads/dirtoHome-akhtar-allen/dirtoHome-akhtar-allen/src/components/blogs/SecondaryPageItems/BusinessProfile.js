import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import { AiOutlineMobile, AiOutlineSkype } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { GiModernCity } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import QRCode from "react-qr-code";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activeId, activeNav } from "../../../actionCreator";
import BreadCrumb from "../../../layouts/BreadCrumb";
import ItemList from "../../../layouts/ItemList";
import Nav from "../../../layouts/Nav.js";
import MailsendModal from "../../common/MailsendModal";
import RequestForAppointmentModal from "../../places/ReqAppointmentModal";

const ClinicsItems = ({ data }) => {
    let { id: clinicsoloId } = useParams();
    const { list: clinicData } = useSelector((s) => s.entities.acudata);
    console.log(clinicData);
    const Thisstate = useSelector((s) => s.entities.acupoint);
    const activeNaV = Thisstate.nav;
    console.log(activeNaV);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(activeId(data._id));
        dispatch(activeNav("About Us"));
    }, [dispatch, data._id]);

    const imageStyle = {
        width: "300px",
        height: "300px",
    };

    const iconStyle = {
        fontSize: "25px",
    };

    return (
        <section>
            <div>
                <BreadCrumb name={clinicsoloId} parentname="Clinics" />
                <br />
                <div>
                    <Typography variant="h4">
                        {data.companyInfo.businessName}
                    </Typography>
                    <div className="headerborder"></div>
                </div>
                <br />
                <br />
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img
                        style={imageStyle}
                        src={data.imageSrc}
                        alt="clinic avatar"
                    />
                </div>
                <div className="col-lg-4">
                    <ul>
                        <ItemList
                            listName="Address1"
                            value={data.address1}
                            icon={
                                <GoLocation
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="Address2"
                            value={data.address2}
                            icon={
                                <GoLocation
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="Address3"
                            value={data.address3}
                            icon={
                                <GoLocation
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="City"
                            value={data.city}
                            icon={
                                <GiModernCity
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="Country"
                            value={data.country}
                            icon={
                                <GiModernCity
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="Mobile"
                            value={data.mobile}
                            icon={
                                <AiOutlineMobile
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="Phone"
                            value={data.phone}
                            icon={
                                <FiPhone
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                        <ItemList
                            listName="Skype"
                            value={data.skype}
                            icon={
                                <AiOutlineSkype
                                    className="mycustomliststyle"
                                    style={iconStyle}
                                />
                            }
                        />
                    </ul>
                </div>
                <div className="col-lg-4 d-flex justify-content-end">
                    <QRCode value={`/clinicsolo/${clinicsoloId}`} size={110} />
                </div>
            </div>

            <div className="mt-5 d-flex">
                <div>
                    <MailsendModal />
                </div>
                <div className=" ml-2">
                    <RequestForAppointmentModal clinicNo={clinicsoloId} />
                </div>
            </div>

            <div className="mt-5">
                <Nav page="clinicsolo" />
            </div>

            <div
                className="mt-5"
                style={
                    activeNaV === "About Us"
                        ? { display: "block" }
                        : { display: "none" }
                }
            >
                <Typography variant="h6">About Us</Typography>
                <hr />
                <Typography variant="p">{data.about}</Typography>
            </div>

            {activeNaV === "Working Houres" && (
                <div className="mt-5">
                    <Typography variant="h6">Working Houres</Typography>
                    <hr />
                    <ul>
                        {data.companyInfo.workingHours.map((item) => (
                            <ItemList
                                listName={item.day}
                                value={`${item.startTime} to ${item.endTime}`}
                            />
                        ))}
                    </ul>
                </div>
            )}

            <div
                className="mt-5"
                style={
                    activeNaV === "Professional Information"
                        ? { display: "block" }
                        : { display: "none" }
                }
            >
                <Typography variant="h6">Professional Information</Typography>
                <hr />
                <ul className="mb-5">
                    <ItemList
                        listName="Healthcare Provider Identifier Individual"
                        value={
                            data.professionalInfo
                                .healthcareProviderIdentifierIndividual
                        }
                    />
                    <ItemList
                        listName="Healthcare Provider Identifier Organisation"
                        value={
                            data.professionalInfo
                                .healthcareProviderIdentifierOrganisation
                        }
                    />
                    <ItemList
                        listName="License No"
                        value={data.professionalInfo.licenseNo}
                    />
                    <ItemList
                        listName="LicenseValidTill"
                        value={new Date(
                            data.professionalInfo.licenseValidTill
                        ).toLocaleDateString()}
                    />
                    <ItemList
                        listName="Treatments"
                        value={data.professionalInfo.treatments}
                    />
                </ul>

                <Typography variant="h6">Bank Information</Typography>
                <hr />
                <ul>
                    <ItemList listName="IBAN" value={data.bankInfo.IBAN} />
                    <ItemList listName="Bank" value={data.bankInfo.bank} />
                    <ItemList
                        listName="Branch of Bank"
                        value={data.bankInfo.branchOfBank}
                    />
                    <ItemList
                        listName="Chamber Commerce No"
                        value={data.companyInfo.chamberCommerceNo}
                    />
                </ul>
            </div>

            <div
                className="mt-5"
                style={
                    activeNaV === "Membership"
                        ? { display: "block" }
                        : { display: "none" }
                }
            >
                <Typography variant="h6">Membership</Typography>
                <hr />
                <ul>
                    <ItemList
                        listName="Organization A Name"
                        value={data.membership.organizationAName}
                    />
                    <ItemList
                        listName="Organization A Member No"
                        value={data.membership.organizationAMemberNo}
                    />
                    <ItemList
                        listName="Organization B Name"
                        value={data.membership.organizationBName}
                    />
                    <ItemList
                        listName="Organization Member No"
                        value={data.membership.organizationBMemberNo}
                    />
                </ul>
            </div>
        </section>
    );
};

export default React.memo(ClinicsItems);
