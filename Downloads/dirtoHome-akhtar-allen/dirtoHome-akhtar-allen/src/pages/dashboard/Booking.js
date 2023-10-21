import React from 'react';
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PersonalInfo from "../../components/other/account/PersonalInfo";
import WidgetBookingProduct from "../../components/sidebars/widgets/WidgetBookingProduct";
import { GiChickenOven } from 'react-icons/gi'
import WidgetBookingSummary from "../../components/sidebars/widgets/WidgetBookingSummary";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import breadcrumbimg from '../../assets/images/hero-bg.jpg'
import placeimg from '../../assets/images/img6.jpg'


function Booking() {
    return (
        <main className="booking-page">
            {/* Header */}
            <GeneralHeader/>

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Booking" MenuPgTitle="pages" img={state.breadcrumbimg}/>

            {/* Personal Information */}
            <section className="booking-area padding-top-40px padding-bottom-80px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <PersonalInfo/>
                        </div>
                        <div className="col-lg-4">
                            <WidgetBookingProduct
                                img={state.img}
                                title={state.title}
                                subtitle={state.subtitle}
                                cardType={state.cardType}
                                badge={state.badge}
                                cardLink={state.cardLink}
                                cardTypeIcon={state.cardTypeIcon} />

                            <WidgetBookingSummary
                                title={state.summaryTitle}
                                date={state.summaryDate}
                                hour={state.summaryHour}
                                adults={state.summaryAdults}
                                children={state.summaryChildren}
                                total={state.summaryTotal} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default Booking;
