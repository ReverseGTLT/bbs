import {Services} from "../components/Services";
import {Advantage} from "../components/Advantage";
import {Sertification} from "../components/Sertification";

export function Chemical() {
    return (
        <div className="container chemical">
            <div className="chemical__main">
                <img src="./images/animate.png" alt="main chemical"/>
            </div>
            <Services/>
            <Advantage/>
            <Sertification/>
        </div>
    )
}