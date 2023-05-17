
import {Social} from "./Social";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export function Header() {

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
                <nav className="header-bottom__nav">
                    <ul className="header-bottom__list">
                        <Link className="header-bottom__link"
                              to={'/solutions'}>
                            <li className="header-bottom__list-item">{t("nav.Solutions")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/directions'}>
                            <li className="header-bottom__list-item">{t("nav.Directions")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/contacts'}>
                            <li className="header-bottom__list-item">{t("nav.Contacts")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/become_a_partner'}>
                            <li className="header-bottom__list-item">{t("nav.BecomeAPartner")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/vocation'}>
                            <li className="header-bottom__list-item">{t("nav.Vocation")}</li>
                        </Link>
                        <Link className="header-bottom__link"
                              to={'/about_us'}>
                            <li className="header-bottom__list-item">{t("nav.AboutUs")}</li>
                        </Link>
                    </ul>
                    <div className="header-bottom__language">{t("language")}
                        <ul className="header-bottom__language-list">
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