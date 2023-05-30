import {AdvantageItem} from "./AdvantageItem";

export function Advantage() {
    return (
        <section className="advantage">
            <div className="services-title">
                <div className="container">
                    <h5 className="work__title">Преимущества</h5>
                </div>
            </div>
            <div className="advantage-box container">
                <AdvantageItem
                    src={"./images/ada1.svg"}
                    title={"Title1"}
                    description={"description1"}
                />

                <AdvantageItem
                    src={"./images/ada2.svg"}
                    title={"Title2"}
                    description={"description2"}
                />

                <AdvantageItem
                    src={"./images/ada3.svg"}
                    title={"Title3"}
                    description={"description3"}
                />

                <AdvantageItem
                    src={"./images/ada4.svg"}
                    title={"Title4"}
                    description={"description4"}
                />

                <AdvantageItem
                    src={"./images/ada5.svg"}
                    title={"Title5"}
                    description={"description5"}
                />

                <AdvantageItem
                    src={"./images/ada6.svg"}
                    title={"Title6"}
                    description={"description6"}
                />
            </div>
        </section>
    )
}