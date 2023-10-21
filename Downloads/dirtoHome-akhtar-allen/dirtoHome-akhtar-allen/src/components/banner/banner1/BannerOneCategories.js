import React, { useEffect, useState } from "react";
import { getClinics } from "../../../services/clinics";

export default function BannerOneCategories({ connector, title, items }) {
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        const getAllClinics = async () => {
            const { data } = await getClinics();
            setClinics(data);
            console.log(11111111111);
            console.log(data);
        };
        getAllClinics();
    }, []);

    return (
        <>
            <div className="highlighted-categories">
                <h4 className="highlighted-element">{connector}</h4>
                <h5 className="highlighted__title">{title}</h5>
                <div className="highlight-lists d-flex justify-content-center mt-4">
                    {clinics.map((item, index) => {
                        if (item.companyInfo.subBranch == "") {
                            return null
                        }
                        return (
                            <div className="category-item" key={index}>
                                <a href="@" className="d-block">
                                    <span className="icon-element">Icon</span>
                                    {item.companyInfo.subBranch}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
