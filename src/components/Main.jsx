import {Route, Routes} from "react-router-dom";
import {Solutions} from "../pages/Solutions";
import {Directions} from "../pages/Directions";
import {Contacts} from "../pages/Contacts";
import {BecomeAPartner} from "../pages/BecomeAPartner";
import {Vocations} from "../pages/Vocations";
import {AboutAs} from "../pages/AboutAs";
import {Home} from "../pages/Home";

export function Main() {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/solutions" element={<Solutions/>}/>
                <Route exact path="/directions" element={<Directions/>}/>
                <Route exact path="/contacts" element={<Contacts/>}/>
                <Route exact path="/become_a_partner" element={<BecomeAPartner/>}/>
                <Route exact path="/vocation" element={<Vocations/>}/>
                <Route exact path="/about_us" element={<AboutAs/>}/>
            </Routes>
        </div>
    )
}