import {useState} from "react";

export function Expertise() {
    const [accordeon, setAccordeon] = useState(false);

    function onAccordeonClick() {
        setAccordeon(!accordeon)
    }
    return (
        <div className="expertise">
            <div onClick={onAccordeonClick} className="expertise-box">
                <p className="expertise__text">( <i>Catalog</i> + <i>Services</i> ) x <i>Expertise</i> = <i>Solutions</i></p>
                <img src="./images/arrow.png" alt=""
                     className={`expertise__img ${accordeon ? 'rotate' : ''}`}/>
            </div>
            <p className={`expertise__footnote ${accordeon ? 'accordeon-open' : ''}`}>Какой то текст аккордиона</p>
        </div>
    )
}