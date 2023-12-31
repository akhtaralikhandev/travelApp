"use client"
import { useState } from "react";
import "./hero.css";
const HeroHome = () => {
    const [height, setHeight] = useState("0%")
    const toggleHeight = () => {
        if (height === "0%") {
            setHeight("30%")
        } else {
            setHeight("0%")
        }
    }

    return (
        <>
            <div className="heroHome">
                <div className="heroHomeWrapper pl-8 pr-8 md:pl-32 md:pr-32 lg:pl-60 lg:pr-60 pt-12">
                    <div className="heroNavbar flex items-center justify-between">
                        <div className="flex items-center pt-8 flex-col justify-center">
                            <span>Travel</span>
                            <img src="/images/home/hero/Arrow 05.png" alt="img" />
                        </div>
                        <div className="middle  xl:block hidden">
                            <ul className="flex items-center  justify-between gap-12">
                                <li className="cursor-pointer">Home</li>
                                <li className="cursor-pointer">About</li>
                                <li className="flex items-center gap-4 cursor-pointer">
                                    <span>Services</span>
                                    <img src="/images/home/hero/Vector.png" alt="" />
                                </li>
                                <li className=" cursor-pointer">Upcoming Packages</li>
                            </ul>

                        </div>
                        <div className="right ">
                            <button className="navbar_button xl:block hidden rounded-sm p-2 shadow-xl">
                                Get in Touch
                            </button>
                            <span onClick={() => toggleHeight()} className="absolute top-20 xl:hidden block right-14 text-3xl cursor-pointer">
                                <i className="fa fa-bars" aria-hidden="true"></i>

                            </span>
                        </div>
                    </div>

                    <div className="heromain flex flex-col gap-14">
                        <div className="heromaintext md:text-6xl text-2xl flex flex-col pt-24">
                            <span>No matter where </span>
                            <span>you’re going to, we’ll</span>
                            <span>take you there</span>
                        </div>
                        <div className="heromaindiv2 text-xs md:text-xl flex items-center justify-between pl-4 pr-4 p-2 md:p-4">
                            <div className="text-xs md:text-xl">
                                <span>Where to?</span>
                            </div>
                            <div className="flex items-center  gap-4 text-xs md:text-xl">
                                <span>Travel Type</span>
                                <img className="sm:block hidden" src="/images/home/hero/Vector (1).png" alt="img" />
                            </div>
                            <div className="flex items-center gap-4 text-xs md:text-xl">
                                <span>Duration</span>
                                <img className="sm:block hidden" src="/images/home/hero/Vector (1).png" alt="img" />
                            </div>
                            <div>
                                <button className="heroButtonmain text-xs md:text-xl md:pl-16 md:pr-16 pl-4 pr-4 p-2 md:p-4">submit</button>
                            </div>
                        </div>
                        <div className="flex items-start md:items-center md:flex-row flex-col gap-2 md:gap-8">
                            <div className="flex items-center">
                                <img src="/images/home/hero/Ellipse 31.png" alt="img" />
                                <img src="/images/home/hero/Ellipse 35.png" alt="img" />
                                <img src="/images/home/hero/Ellipse 36.png" alt="img" />
                                <img src="/images/home/hero/Ellipse 31.png" alt="img" />
                                <img src="/images/home/hero/Ellipse 35.png" alt="img" />
                                <img src="/images/home/hero/Ellipse 36.png" alt="img" />
                            </div>
                            <div>
                                <span>
                                    2,500 people booked Tommorowland Event in last 24 hours
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: height }} className="nav md:hidden overflow-hidden flex absolute top-0 w-full justify-between items-center bg-black ">
                <ul className="flex flex-col text-white  items-start pl-8 p-4  text-sm justify-between gap-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="flex items-center gap-4 cursor-pointer">
                        <span>Services</span>
                        <img src="/images/home/hero/Vector.png" alt="" />
                    </li>
                    <li className=" cursor-pointer">Upcoming Packages</li>
                </ul>
                <div onClick={() => toggleHeight()} className="cross text-white pr-8 cursor-pointer font-light text-4xl">
                    <span>
                        <i className="fa fa-times " aria-hidden="true"></i>
                    </span>

                </div>
            </div>
            <div className="company flex p-4 md:p-12 items-center  justify-between md:pl-32 md:pr-32 ">
                <img
                    className="companyImage2 md:h-12 h-5"
                    src="/images/home/company/image 909.png"
                    alt="img"
                />
                <img
                    className="companyImage md:h-12 h-5"
                    src="/images/home/company/image 914.png"
                    alt="img"
                />
                <img
                    className="companyImage2 md:h-12 h-5"
                    src="/images/home/company/image 909.png"
                    alt="img"
                />
                <img
                    className="companyImage md:h-12 h-5"
                    src="/images/home/company/image 914.png"
                    alt="img"
                />
                <img
                    className="companyImage2 md:h-12 h-5"
                    src="/images/home/company/image 909.png"
                    alt="img"
                />
            </div>
            <div className="offer pt-24  bg-white">
                <div className="offerWrapper flex-col gap-8 items-center flex pl-8 pr-8 md:pl-32 md:pr-32 lg:pl-60 lg:pr-60">
                    <span className="category">CATEGORY</span>
                    <span className="we_offer_best md:text-5xl text-2xl">We Offer Best Services</span>
                    <div className="flex items-center flex-wrap gap-4 xl:flex-nowrap md:gap-8">
                        <div className="flex flex-col items-center shadow-lg p-4 gap-4">
                            <div className="flex items-center relative">
                                <img
                                    className="tour_guide_img"
                                    src="/images/home/offer/tour-guide 1.png"
                                    alt="img"
                                />
                                <img
                                    className="absolute -right-12 top-4"
                                    src="/images/home/offer/Rectangle 158.png"
                                    alt="img"
                                />
                            </div>
                            <span className="guided_tour">GUIDED TOUR</span>
                            <span className="guided_tour_texts">
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </span>
                        </div>
                        <div className="flex flex-col items-center shadow-lg p-4 gap-4">
                            <div className="flex items-center relative">
                                <img
                                    className="travelling_image"
                                    src="/images/home/offer/travelling 1.png"
                                    alt="img"
                                />
                                <img
                                    className="absolute -right-12 top-4"
                                    src="/images/home/offer/Rectangle 158.png"
                                    alt="img"
                                />
                            </div>
                            <span className="guided_tour">Guided Tour</span>
                            <span className="guided_tour_texts">
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </span>
                        </div>
                        <div className="flex flex-col items-center shadow-lg p-4 gap-4">
                            <div className="flex items-center relative">
                                <img
                                    className="tour_guide_img"
                                    src="/images/home/offer/hands 1.png"
                                    alt="img"
                                />
                                <img
                                    className="absolute -right-12 top-4"
                                    src="/images/home/offer/Rectangle 158.png"
                                    alt="img"
                                />
                            </div>
                            <span className="guided_tour">Religious Tours</span>
                            <span className="guided_tour_texts">
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </span>
                        </div>
                        <div className="flex flex-col items-center shadow-lg p-4 gap-4">
                            <div className="flex items-center relative">
                                <img
                                    className="tour_guide_img"
                                    src="/images/home/offer/medical-team 1.png"
                                    alt="img"
                                />
                                <img
                                    className="absolute -right-12 top-4"
                                    src="/images/home/offer/Rectangle 158.png"
                                    alt="img"
                                />
                            </div>
                            <span className="guided_tour">Medical insurance</span>
                            <span className="guided_tour_texts">
                                sunt qui repellat saepe quo velit aperiam id aliquam placeat.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="honeymoon bg-white">
                <div className="honeyMoonWrapper flex   items-center pt-8 pl-6 xl:pt-24 xl:pl-32 xl:pr-32">
                    <div className="relative  xl:block hidden items-center justify-center flex-1">
                        <img
                            className="honeymoonImage  h-80"
                            src="/images/home/honeymoon/image 50.png"
                            alt="img"
                        />
                        {/* <img className="honeymoonImage absolute -top-8   h-32" src="/images/home/honeymoon/Ellipse 3.png" alt="img" />
                        <img className="honeymoonImage absolute -top-4  h-20" src="/images/home/honeymoon/Ellipse 1.png" alt="img" />
                        <span className="honeyMoonPackages absolute top-32">Honeymoon Packages</span> */}
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <span className="honeyMoon">Honeymoon Specials</span>
                        <div className="our_romantic_texts md:text-5xl text-2xl flex flex-col">
                            <span>Our Romantic Tropical</span>
                            <span>Destinations</span>
                        </div>
                        <span className="et_labore_harum">
                            Et labore harum non nobis ipsum eum molestias mollitia et corporis
                            praesentium a laudantium internos. Non quis eius quo eligendi
                            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
                            ducimus illum aut optio quibusdam!
                        </span>
                        <button className="viewPackages">view Packages</button>
                    </div>
                </div>
            </div>
            <div className="resort_booking">
                <div className="resort_bookingWrapper flex md:flex-row flex-col items-center p-8 gap-8 xl:gap-24  xl:pt-24 xl:pl-60 xl:pr-60 bg-white">
                    <div className="">
                        <div>
                            <span className="fastAndEasy">Fast & Easy</span>
                            <div className="get_your_favorite md:text-5xl text-xl flex-col flex">
                                <span>Get Your Favourite</span>
                                <span>Resort Bookings</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-8 items-center">
                                <img
                                    className=""
                                    src="/images/home/favorites/Group 7.png"
                                    alt="img"
                                />
                                <div className="flex flex-col">
                                    <span className="choose_destination">Choose Destination</span>
                                    <div className="lorem_ipsum flex flex-col">
                                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                                        <span>adipiscing elit. Urna, tortor tempus.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <img
                                    className=""
                                    src="/images/home/favorites/Group 12.png"
                                    alt="img"
                                />
                                <div className="flex flex-col">
                                    <span className="choose_destination">Choose Destination</span>
                                    <div className="lorem_ipsum flex flex-col">
                                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                                        <span>adipiscing elit. Urna, tortor tempus.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <img
                                    className=""
                                    src="/images/home/favorites/Group 11.png"
                                    alt="img"
                                />
                                <div className="flex flex-col">
                                    <span className="choose_destination">Choose Destination</span>
                                    <div className="lorem_ipsum flex flex-col">
                                        <span>Lorem ipsum dolor sit amet, consectetur</span>
                                        <span>adipiscing elit. Urna, tortor tempus.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="resort_card shadow-xl flex flex-col gap-8 rounded-lg p-4">
                            <img
                                className=""
                                src="/images/home/favorites/Rectangle 17.png"
                                alt="img"
                            />
                            <span className="trip_to_hawaii">Trip to Hawaii </span>
                            <div>
                                <span>14-29 June</span>
                                <span></span>
                                <span>by JR Martinax</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img
                                        className=""
                                        src="/images/home/favorites/leaf 1.png"
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    <img
                                        className=""
                                        src="/images/home/favorites/map 1.png"
                                        alt="img"
                                    />
                                </div>
                                <div>
                                    <img
                                        className=""
                                        src="/images/home/favorites/send 2.png"
                                        alt="img"
                                    />
                                </div>

                            </div>
                            <div className="flex items-center justify-between">
                                <span>60 people are interested</span>
                                <img
                                    className=""
                                    src="/images/home/favorites/heart (6) 1.png"
                                    alt="img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="liberty md:h-80 h-48 xl:pl-60 xl:pr-60 xl:pt-24">
                <div className="liberty_wrapper">
                    <div className="nextholiday md:text-5xl text-2xl  relative flex flex-col">
                        <span>Let’s make your</span>
                        <span>next holiday amazing</span>
                        <img
                            className="line_image absolute right-48 top-32"
                            src="/images/home/liberty/Line-1.png"
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroHome;
