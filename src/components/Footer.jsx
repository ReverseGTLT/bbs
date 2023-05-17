import {useTranslation} from "react-i18next";
import {useState} from "react";
import {Social} from "./Social";

export function Footer() {
    const { t } = useTranslation();
    const [showMap, setShowMap] = useState(false)

    function onMapClick() {
        setShowMap(!showMap)
        console.log(showMap)
    }
    return (
        <div className="footer" style={{backgroundImage: 'url(./images/footer.png)'}}>
            <div className="footer-container">
                <p className="footer__title">{t("footer.title")}</p>
                <div className="footer-box">
                    <div className="footer-address">
                        <p className="footer-address__title">{t("footer.find")}</p>
                        <address className="footer-address__address">{t("footer.address")}</address>
                        <div onClick={onMapClick} className="footer-address__map">{t("footer.map")}</div>
                    </div>
                    <div className="footer-tel">
                        <a href="tel:+955555755577">
                            <p className="footer-tel__number">+955 555 7555 77</p>
                        </a>
                        <a href="tel:+955555755555">
                            <p className="footer-tel__number">+955 555 7555 55</p>
                        </a>
                        <Social/>
                    </div>
                </div>
            </div>
            {showMap && <div className="popup">
                <p onClick={onMapClick} className="popup-close">&#10006;</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2752.435215545272!2d30.713354476082273!3d46.38059247110381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c7cb515fb15ed7%3A0x129fa8c4e492a0c5!2z0YPQuy4g0JLQu9Cw0LTQuNC80LjRgNCwINCS0YvRgdC-0YbQutC-0LPQviwg0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNjUwMDA!5e0!3m2!1sru!2str!4v1684355019582!5m2!1sru!2str"
                    width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>}
        </div>
    )
}