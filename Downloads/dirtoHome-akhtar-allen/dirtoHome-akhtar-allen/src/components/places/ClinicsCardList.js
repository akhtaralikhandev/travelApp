import _ from "lodash";
import React, { useEffect, useState } from "react";
import { AiOutlineMobile, AiOutlineSkype } from "react-icons/ai";
import { FiHeart, FiPhone } from "react-icons/fi";
import { GiModernCity } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { Link } from "react-router-dom";
import { getClinics } from "../../services/clinics";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/Pagination";
import RequestForAppointmentModal from "./ReqAppointmentModal";

function ClinicsCardList({ griditems }) {
    const [clinics, setClinics] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    const sortColumn = { path: "createdAt", order: "asc" };

    useEffect(() => {
        const getAllClinics = async () => {
            const { data } = await getClinics();
            setClinics(data);
        };
        getAllClinics();
    }, []);

    // check clinic open or close function
    const checkClinicOpenOrClose = (workingHours) => {
        const d = new Date();
        const day = d.toLocaleDateString("en-US", { weekday: "long" });
        const time = d
            .toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            })
            .replace("AM", "")
            .replace("PM", "");
        const workingTimes = workingHours.filter(
            (Day) => Day.day.toLowerCase() === day.toLowerCase()
        );

        return workingTimes[0].open &&
            workingTimes[0].startTime < time &&
            workingTimes[0].endTime > time ? (
            <span className="badge"> Open </span>
        ) : (
            <span className="badge badge-closed"> Closed </span>
        );
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getDataPgnation = () => {
        const sorted = _.orderBy(
            clinics,
            [sortColumn.path],
            [sortColumn.order]
        );
        let nClinics = paginate(sorted, currentPage, pageSize);
        return { data: nClinics };
    };

    return (
        <>
            {getDataPgnation().data.map((item) => {
                return (
                    <div className="col-lg-4 column-td-6" key={item._id}>
                        <div className="card-item">
                            <Link
                                to={`/clinicsolo/${item._id}`}
                                className="card-image-wrap"
                            >
                                <div className="card-image">
                                    <img
                                        src={item?.clinics?.imageSrc}
                                        className="card__img"
                                        alt="Place"
                                    />
                                    {checkClinicOpenOrClose(
                                        item?.companyInfo?.workingHours
                                    )}
                                    <span
                                        className="badge-toggle"
                                        data-toggle="tooltip"
                                        data-placement="bottom"
                                        title="22 Likes"
                                    >
                                        <FiHeart />
                                    </span>
                                </div>
                            </Link>
                            <div className="card-content-wrap">
                                <div className="card-content">
                                    <Link to={`/clinicsolo/${item._id}`}>
                                        {/* <h5 className="card-meta">fdfd</h5> */}
                                        <h4 className="card-title">
                                            {item?.companyInfo?.businessName}
                                        </h4>
                                        <p className="card-sub">
                                            {item?.companyInfo?.subBranch}
                                        </p>
                                    </Link>
                                    {/* <a
                                            href={item.authorUrl}
                                            className="author-img"
                                        >
                                            <img
                                                src={item.author}
                                                alt="author-img"
                                            />
                                        </a> */}
                                    <ul className="info-list padding-top-20px padding-bottom-20px">
                                        <li className="list-item">
                                            <span className="la d-inline-block">
                                                <GoLocation />
                                            </span>{" "}
                                            {item?.clinics?.Address?.address1}
                                        </li>
                                        <li className="list-item">
                                            <span className="la d-inline-block">
                                                <GoLocation />
                                            </span>{" "}
                                            {item?.clinics?.Address?.address2}
                                        </li>
                                        <li className="list-item">
                                            <span className="la d-inline-block">
                                                <GoLocation />
                                            </span>{" "}
                                            {item?.clinics?.Address?.address3}
                                        </li>
                                        <li className="list-item">
                                            <span className="la d-inline-block">
                                                <GiModernCity />
                                            </span>{" "}
                                            {item?.clinics?.Address?.zip}
                                        </li>
                                        <li className="list-item">
                                            <span className="la d-inline-block">
                                                <GiModernCity />
                                            </span>{" "}
                                            {item?.clinics?.Address?.city}
                                        </li>
                                        <li>
                                            <ul className="info-list d-flex">
                                                <li className="list-item mr-2">
                                                    <a
                                                        href="callto://+1234567890"
                                                        className="text-black"
                                                    >
                                                        <span className="la d-inline-block">
                                                            <FiPhone />
                                                        </span>{" "}
                                                        {
                                                            item?.clinics
                                                                ?.phones?.phone
                                                        }
                                                    </a>
                                                </li>
                                                <li className="list-item">
                                                    <a
                                                        href="callto://+1234567890"
                                                        className="text-black"
                                                    >
                                                        <span className="la d-inline-block">
                                                            <AiOutlineMobile />
                                                        </span>{" "}
                                                        {
                                                            item?.clinics
                                                                ?.phones?.mobile
                                                        }
                                                    </a>
                                                </li>
                                            </ul>
                                            {/* <div className="d-flex gap-5">
                                                    <div>
                                                        <span className="la d-inline-block">
                                                            <FiPhone />
                                                        </span>{" "}
                                                        {
                                                            item?.clinics
                                                                ?.phones?.phone
                                                        }
                                                    </div>
                                                    <div>
                                                        <span className="la d-inline-block">
                                                            <FiPhone />
                                                        </span>{" "}
                                                        {
                                                            item?.clinics
                                                                ?.phones?.mobile
                                                        }
                                                    </div>
                                                </div> */}
                                        </li>
                                        <li className="list-item">
                                            <a
                                                href="callto://+1234567890"
                                                className="text-black"
                                            >
                                                <span className="la d-inline-block">
                                                    <AiOutlineSkype />
                                                </span>{" "}
                                                {item?.clinics?.phones?.skype}
                                            </a>
                                        </li>
                                        <li className="list-item">
                                            <span className="la d-inline-block">
                                                <IoIosLink />
                                            </span>{" "}
                                            <a href={item.websiteUrl}>
                                                {item?.clinics?.website}
                                            </a>
                                        </li>
                                        {/* <li>
                                                <span className="la d-inline-block">
                                                    <IoIosLink />
                                                </span>{" "}
                                                <a href={item.websiteUrl}>
                                                    {item.website}
                                                </a>
                                            </li>
                                            <li>
                                                <span className="la d-inline-block">
                                                    <FaRegCalendarCheck />
                                                </span>{" "}
                                                {item.date}
                                            </li> */}
                                    </ul>
                                    <RequestForAppointmentModal
                                        clinicNo={item?.clinics?._id}
                                    />
                                    <div className="btn-box">
                                        <Link
                                            to={`/clinicsolo/${item._id}`}
                                            className="btn btn-outline-primary d-block mt-2"
                                        >
                                            View Profile of Clinic
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className="rating-row">
                                        <span className={"badge"}>badge</span>
                                        <div className="rating-rating">
                                            {item.ratings.map(
                                                (rating, index) => {
                                                    return (
                                                        <span key={index}>
                                                            {rating}
                                                        </span>
                                                    );
                                                }
                                            )}
                                            <span className="rating-count">
                                                {item.ratingNum}
                                            </span>
                                        </div>
                                        <div className="listing-info">
                                            <ul>
                                                <li>
                                                    <span className="info__count">
                                                        <AiOutlineEye />
                                                    </span>{" "}
                                                    {item.view}
                                                </li>
                                                <li>
                                                    <span
                                                        className="info__save"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Bookmark"
                                                    >
                                                        <FiHeart />
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="w-100 d-flex align-items-center justify-content-center">
                <Pagination
                    itemsCount={clinics.length}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
        </>
    );
}

export default ClinicsCardList;
