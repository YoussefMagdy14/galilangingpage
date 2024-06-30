import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import useTranslation from "../../hook/useTranslation";

const Layout = ({ children }) => {
  const { T, locale } = useTranslation();
  console.log(locale, "locale");
  return (
    <div dir={locale === "en" ? " ltr" : "rtl"}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
