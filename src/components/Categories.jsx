import {useTranslation} from "react-i18next";
import {CategoriesItem} from "./CategoriesItem";

export function Categories () {

    const { t } = useTranslation();
    return (
        <div className="categories">
            <div className="categories-box">
                <CategoriesItem
                    id={"categoriesItemInfo1"}
                    image={"./images/coffe.svg"}
                    title={t("categories.coffee.title")}
                    descriptions={t("categories.coffee.description")}
                    btn={t("categories.btn")}
                />
                <CategoriesItem
                    id={"categoriesItemInfo2"}
                    image={"./images/condit.svg"}
                    title={t("categories.confectionery.title")}
                    descriptions={t("categories.confectionery.description")}
                    btn={t("categories.btn")}
                />
                <CategoriesItem
                    id={"categoriesItemInfo3"}
                    image={"./images/topper.svg"}
                    title={t("categories.toppers.title")}
                    descriptions={t("categories.toppers.description")}
                    btn={t("categories.btn")}
                />
                <CategoriesItem
                    id={"categoriesItemInfo4"}
                    image={"./images/chemical.svg"}
                    title={t("categories.chemicals.title")}
                    descriptions={t("categories.chemicals.description")}
                    btn={t("categories.btn")}
                />
            </div>
        </div>
    )
}