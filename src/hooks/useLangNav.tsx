import { useTranslation } from "react-i18next";
import { NavBar } from "../interfaces/navBar.interface";

const useLangNav = () => {
  const { t, i18n } = useTranslation("global");

  const optionsNav:NavBar[] = [
    {
      title: t("navbar.Company.Company"),
      path: "company",
      routes: [
        { name: t("navbar.Company.About"), path: "" },
        { name: t("navbar.Company.Contact"), path: "" },
        { name: t("navbar.Company.News"), path: "" },
      ],
    },
    {
      title: t("navbar.Discography.Discography"),
      path: "discography",
      routes: [
        { name: t("navbar.Discography.Artist"), path: "" },
        { name: t("navbar.Discography.Albums"), path: "" },
        { name: t("navbar.Discography.Videos"), path: "" },
      ],
    },
    {
      title: t("navbar.Services.Services"),
      path: "services",
      routes: [
        { name: t("navbar.Services.Production"), path: "" },
        { name: t("navbar.Services.Distribution"), path: "" },
        { name: t("navbar.Services.Promotion"), path: "" },
        { name: t("navbar.Services.Audiovisual"), path: "" },
        { name: t("navbar.Services.Legal"), path: "" },
      ],
    },
    {
      title: t("navbar.PlayList.PlayList"),
      path: "playlist",
      routes: [
        { name: t("navbar.PlayList.Featured"), path: "" },
        { name: t("navbar.PlayList.News"), path: "" },
        { name: t("navbar.PlayList.Specials"), path: "" },
      ],
    },
  ];

  const phrase = t("navbar.Phrase");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return { optionsNav, phrase, changeLanguage };
};

export default useLangNav;
