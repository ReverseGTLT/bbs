import {useTranslation} from "react-i18next";
import {HowWork} from "./HowWork";
import {CoffeeItem} from "./CoffeeItem";

export function Laser() {
    const { t } = useTranslation();
    return (
        <section className="container laser">
            <div className="laser__image">
                <img src="./images/laser/laser.png" alt=""/>
            </div>
            <HowWork/>
            <div className="laser-items__wrapper">
                <CoffeeItem
                    title={""}
                    src={"./images/laser/001.svg"}
                    description={""}
                />
                <CoffeeItem
                    title={""}
                    src={"./images/laser/002.svg"}
                    description={""}
                />
                <CoffeeItem
                    title={""}
                    src={"./images/laser/003.svg"}
                    description={""}
                />
                <CoffeeItem
                    title={""}
                    src={"./images/laser/004.svg"}
                    description={""}
                />
                <CoffeeItem
                    title={""}
                    src={"./images/laser/005.svg"}
                    description={""}
                />
                <CoffeeItem
                    title={""}
                    src={"./images/laser/006.svg"}
                    description={""}
                />
            </div>
            <div className="coffee-link">
                <a className="coffee-link__all" href="#">СМОТРЕТЬ ВСЕ</a>
            </div>
            <div className="steps">
                <div className="steps-title">
                    <p className="steps-title__text">Путь клиента/этапы работы</p>
                </div>
            </div>
            <div className="steps-image">
                <img src={t("steps.url")} alt={t("steps.url")}/>
            </div>
        </section>
    )
}