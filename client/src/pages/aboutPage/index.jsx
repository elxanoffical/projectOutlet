import React from "react";
import Header from "../../components/header";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import { changeLanguage } from "i18next";
const AboutPage = () => {

    const {t,i18n} = useTranslation()
  return (
    <div>
      <Header />
      <div className="container mx-auto w-full py-20 flex flex-col items-center justify-center bg-emerald-400 rounded-2xl">
        <h1 className="text-white text-5xl tracking-wider uppercase font-semibold">
            {t('heroText')}
        </h1>
        <h1 className="text-white text-5xl tracking-wider uppercase font-semibold">
            Language: {i18n.language}
        </h1>
        <button onClick={()=>changeLanguage("az")}>klick az</button>
        <button onClick={()=>changeLanguage("en")}>klick en</button>
        <button onClick={()=>changeLanguage("tr")}>klick tr</button>
      </div>

      <div className="container flex mx-auto w-full py-20 px-10 border border-emerald-300 mt-20">
        <nav className="flex flex-col gap-7 border-r border-r-gray-400">
          <Link
            className="text-3xl border-l-2 border-transparent hover:border-l-2 hover:border-l-emerald-400 pl-2"
            to=""
          >
            mackbook
          </Link>
          <Link
            to="iphone"
            className="text-3xl border-l-2 border-transparent hover:border-l-2 hover:border-l-emerald-400 pl-2"
          >
            iphone
          </Link>
          <Link
            to="iwatch"
            className="text-3xl border-l-2 border-transparent hover:border-l-2 hover:border-l-emerald-400 pl-2"
          >
            iwatch
          </Link>
        </nav>
        <Outlet/>
      </div>
    </div>
  );
};

export default AboutPage;
