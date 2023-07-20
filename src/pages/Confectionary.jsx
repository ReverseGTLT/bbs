import {useTranslation} from "react-i18next";
import {AspectsItem} from "../components/AspectsItem";
import {ForItems} from "../components/ForItems";


export function Confectionary() {
    const { t } = useTranslation();
    return (
        <section className="container confectionary">
            <div className="confectionary__main">
                <img src="./images/confectionary/konditer.svg" alt="main"/>
            </div>
            <div className="aspects">
                <AspectsItem
                    img={'./images/confectionary/aspects1.png'}
                    title={t("confectionary.aspects.title1")}
                    description={t("confectionary.aspects.description1")}
                />
                <AspectsItem
                    img={'./images/confectionary/aspects2.png'}
                    title={t("confectionary.aspects.title2")}
                    description={t("confectionary.aspects.description2")}
                />
                <AspectsItem
                    img={'./images/confectionary/aspects3.png'}
                    title={t("confectionary.aspects.title3")}
                    description={t("confectionary.aspects.description3")}
                />
                <AspectsItem
                    img={'./images/confectionary/aspects4.png'}
                    title={t("confectionary.aspects.title4")}
                    description={t("confectionary.aspects.description4")}
                />
            </div>
            <div className="for">
                <div className="for-wrapper">
                    <h5 className="for__title">{t("confectionary.for.title")}</h5>
                    <a href="#" className="for__link">{t("confectionary.for.link")}</a>
                </div>
                <div className="for-items">
                    <ForItems
                        img={'./images/confectionary/for1.png'}
                        description={t("confectionary.for.description1")}
                    />
                    <ForItems
                        img={'./images/confectionary/for2.png'}
                        description={t("confectionary.for.description2")}
                    />
                    <ForItems
                        img={'./images/confectionary/for3.png'}
                        description={t("confectionary.for.description3")}
                    />
                    <ForItems
                        img={'./images/confectionary/for4.png'}
                        description={t("confectionary.for.description4")}
                    />
                </div>
            </div>
            <div className="confectionary-how">
                <p className="confectionary-how__title">{t("confectionary.for.how.title")}</p>
                <div className="confectionary-how__items">
                    <div className="confectionary-how__item">
                        <div className="confectionary-how__item-image">
                            <img src="./images/confectionary/how1.png" alt="basket"/>
                        </div>
                        <p className="confectionary-how__item-description">
                            {t("confectionary.for.how.description1")}
                        </p>
                    </div>

                    <div className="how-arrow">
                        <img src="./images/confectionary/how4.png" alt=""/>
                    </div>

                    <div className="confectionary-how__item">
                        <div className="confectionary-how__item-image">
                            <img src="./images/confectionary/how2.png" alt="basket"/>
                        </div>
                        <p className="confectionary-how__item-description">
                            {t("confectionary.for.how.description2")}
                        </p>
                    </div>

                    <div className="how-arrow">
                        <img src="./images/confectionary/how4.png" alt=""/>
                    </div>

                    <div className="confectionary-how__item">
                        <div className="confectionary-how__item-image">
                            <img src="./images/confectionary/how3.png" alt="basket"/>
                        </div>
                        <p className="confectionary-how__item-description">
                            {t("confectionary.for.how.description3")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="confectionary-partners">
                <p className="confectionary-how__title">{t("confectionary.partners")}</p>
                <div className="confectionary-partners__image">
                    <img src="./images/confectionary/partners.png" alt="partners"/>
                </div>
            </div>

            <div className="confectionary-partners">
                <p className="confectionary-how__title">{t("confectionary.clients")}</p>
                <div className="confectionary-partners__image">
                    <img src="./images/confectionary/clients.png" alt="partners"/>
                </div>
            </div>
        </section>
    )
}