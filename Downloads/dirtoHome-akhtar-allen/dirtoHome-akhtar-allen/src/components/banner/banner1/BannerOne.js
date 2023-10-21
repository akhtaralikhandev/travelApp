import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getClinics } from "../../../services/clinics";
import sectiondata from "../../../store/menu";
import DirectoryAlphabet from "../../blogs/DirectoryAlphabet";
import BannerOneCategories from "./BannerOneCategories";
import BannerOneHeroHeading from "./BannerOneHeroHeading";
import BannerOneSearchInput from "./BannerOneSearchInput";

export default function BannerOne() {
    const [data, setData] = useState([]);
    const filter = useSelector((s) => s.entities.acudata.filter);
    console.log(filter);
    const s = async () => {
        const res = await getClinics();
        setData(res.data);
    };
    useEffect(() => {
        s();
    }, []);

    const filteredData = data.filter(
        (item) =>
            item.companyInfo.businessName[0] === filter ||
            filter === "all"
    );
    console.log(filteredData);
    return (
        <>
            <section
                className="hero-wrapper"
                style={{
                    backgroundImage:
                        "url(" + sectiondata.herobanners.banner1.bgimage + ")",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="container t">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Banner One Hero Heading */}
                            <BannerOneHeroHeading
                                title={sectiondata.herobanners.banner1.title}
                                content={
                                    sectiondata.herobanners.banner1.content
                                }
                                titleHighlight={
                                    sectiondata.herobanners.banner1
                                        .titleHighlight
                                }
                            />

                            {/* Banner One Search Input */}
                            <BannerOneSearchInput />
                            <DirectoryAlphabet />

                            {/* Banner One Categories */}
                            <BannerOneCategories
                                title={
                                    sectiondata.categories.featuredcategories
                                        .title
                                }
                                items={
                                    sectiondata.categories.featuredcategories
                                        .items
                                }
                                connector={
                                    sectiondata.categories.featuredcategories
                                        .connector
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
