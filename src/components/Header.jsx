
import {Social} from "./Social";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useState} from "react";

export function Header() {
    const [active, setActive] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);

    const langOpen = document.querySelector('.header-bottom__language');
    const langList = document.querySelector('.header-bottom__language-list');

    function onLanguageClick() {
        setOpenLanguage(!openLanguage)
    }

    function onBurgerClick() {
        setActive(!active)
    }

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className="header">
            <div className="header-top">
                <Link to="/">
                    <div className="header-top__title">{t("title")}</div>
                </Link>
                <div className="header-top__social">
                    <Social/>
                </div>
            </div>
            <div className="header-bottom">
                <div className={`burger ${active ? 'block' : ''}`} onClick={onBurgerClick}>
                    <span className={`${active ? 'active' : ''}`}></span>
                </div>
                <nav className="header-bottom__nav">
                    <ul className={`header-bottom__list ${active ? 'nav-visible' : ''}`}>
                        <Link className="header-bottom__link"
                              to={'/'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Home")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/solutions'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Solutions")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/directions'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Directions")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/contacts'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Contacts")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/become_a_partner'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.BecomeAPartner")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/vocation'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.Vocation")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/about_us'}
                              onClick={active && onBurgerClick}>
                            <li className="header-bottom__list-item">{t("nav.AboutUs")}</li>
                        </Link>
                    </ul>
                    <div onClick={onLanguageClick} className="header-bottom__language">{t("language")}
                        <ul className={`header-bottom__language-list ${openLanguage ? 'flex' : ''}`}>
                            <li className="header-bottom__language-item" onClick={() => changeLanguage("en")}>ENG</li>
                            <li className="header-bottom__language-item" onClick={() => changeLanguage("ru")}>RU</li>
                            <li className="header-bottom__language-item">GE</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}