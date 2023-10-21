import React from "react";
import GeneralHeader from "./GeneralHeader";
import ScrollTopBtn from "./ScrollTopBtn";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <GeneralHeader />
      {children}
      <ScrollTopBtn />
      <Footer />
    </>
  );
}
