import {ServicesItem} from "./ServicesItem";
import {ServicesSlider} from "./ServicesSlider";

export function Services() {
    return (
        <section className="services">
            <div className="complex">
                <div className="services-title">
                    <div className="container">
                        <h5 className="work__title">Комплексный сервис</h5>
                    </div>
                </div>
                <div className="container">
                    <div className="services-box">
                        <ServicesItem
                            src={"./images/services1.svg"}
                            description={"blablabla1"}
                        />

                        <ServicesItem
                            src={"./images/services2.svg"}
                            description={"blablabla2"}
                        />

                        <ServicesItem
                            src={"./images/services3.svg"}
                            description={"blablabla3"}
                        />

                        <ServicesItem
                            src={"./images/services4.svg"}
                            description={"blablabla4"}
                        />

                        <ServicesItem
                            src={"./images/services5.svg"}
                            description={"blablabla5"}
                        />
                    </div>
                </div>
            </div>
            <div className="attendance">
                <div className="services-title">
                    <div className="container">
                        <h5 className="work__title">Услуги</h5>
                    </div>
                </div>
                <ServicesSlider/>
            </div>
        </section>
    )
}