import {useTranslation} from "react-i18next";

export function AboutAs() {
    const { t } = useTranslation();
    return (
        <div>About Us {t("nav.Solutions")}</div>
    )
}