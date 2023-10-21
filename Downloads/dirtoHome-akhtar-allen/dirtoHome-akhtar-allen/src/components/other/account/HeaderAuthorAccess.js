import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsGear, BsListCheck, BsPower, BsQuestion } from "react-icons/bs";
import { FiBookmark, FiPlus, FiPlusCircle, FiSearch } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { dashboardUrl } from "../../../config/config";
import { getProfile } from "../../../services/authservice";
import { getUser } from "../../../services/users";
import WidgetSearchTwo from "../../sidebars/widgets/WidgetSearchTwo";

export default function HeaderAuthorAccess() {
    const [AuthorAccessOpen, setAuthorAccessOpen] = useState(false);
    const [user, setUser] = useState();
    const jwt = localStorage.getItem("token");

    const profile = getProfile();

    useEffect(() => {
        const get = async () => {
            if (!jwt) return;
            const res = await getUser(profile?._id);

            setUser(res.data);
        };

        get();
    }, []);

    return (
        <>
            <div style={{ display: "flex" }} className="logo-right-content">
                <ul className="author-access-list">
                    {!jwt && (
                        <li>
                            <Link to="/login">Login</Link>
                            <span className="or-text">or</span>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    )}
                    <li>
                        <WidgetSearchTwo />
                    </li>
                </ul>
               {jwt && (
                    <>
                    
                    <div
                        className="side-user-menu-open"
                        //onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}
                    >
                        {/* <AiOutlineUser /> */}
                        {user && user.imageSrc ? (
                            <a href='http://aivoluon.com:3000/dashboard' target="_parent">
                            <img
                                src={user.imageSrc}
                                alt="User"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 0,
                                }}
                            />
                            </a>
                        ) : (
                            <AiOutlineUser />
                        )}
                    </div>
                    </>
                )}
            </div>

            {/* Side User panel */}

            <div
                className={
                    AuthorAccessOpen
                        ? "side-user-panel active"
                        : "side-user-panel"
                }
            >
                <div className="humburger-menu">
                    <div
                        className="humburger-menu-lines side-menu-close"
                        onClick={() => setAuthorAccessOpen(!AuthorAccessOpen)}
                    ></div>
                </div>
                <div className="side-menu-wrap side-user-menu-wrap">
                    <div className="side-user-img">
                        <img src={user?.imageSrc} alt="User" />
                        <h4 className="su__name">{user?.username}</h4>
                        <span className="su__meta">Joined 3 years ago</span>
                        <div className="avatar-icon">
                            <Link
                                to="/dashboard"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Change Avatar"
                            >
                                {" "}
                                <FiPlus />
                            </Link>
                        </div>
                    </div>

                    <ul className="side-menu-ul">
                        <li>
                            <a href={`${dashboardUrl.url}/login?t=${jwt}`}>
                                <RiDashboardLine className="user-icon" />{" "}
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <BsListCheck className="user-icon" /> My
                                Listings
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <FiBookmark className="user-icon" /> My
                                Bookmarks
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard">
                                <FiPlusCircle className="user-icon" /> add
                                listing
                            </Link>
                        </li>
                        <li>
                            <div className="dropdown-divider"></div>
                        </li>
                        <li>
                            <Link to="#">
                                <BsQuestion className="user-icon" /> help
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <BsGear className="user-icon" /> Settings
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => {
                                    setAuthorAccessOpen(false);
                                    localStorage.removeItem("token");
                                }}
                                to="/"
                            >
                                <BsPower className="user-icon" /> Sign Out
                            </Link>
                        </li>
                    </ul>
                    <div className="side-user-search contact-form-action">
                        <form method="post">
                            <div className="form-group mb-0">
                                <FiSearch className="form-icon" />
                                <input
                                    className="form-control"
                                    type="search"
                                    name="search-field"
                                    placeholder="Search by keywords"
                                />
                            </div>
                            <button
                                type="button"
                                className="theme-btn border-0"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
