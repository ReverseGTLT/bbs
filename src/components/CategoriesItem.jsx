import Fade from 'react-reveal/Fade';
import Pulse from "react-reveal";
export function CategoriesItem( {image, title, btn, descriptions, id} ) {
    return (
        <div className="categories-item">
            <Fade left >
                <div className="categories-item__image">
                    <img src={image} alt={title}/>
                </div>
            </Fade>
            <Pulse >
                <div className="categories-item__info">
                    <h3 className="categories-item__title">{title}</h3>
                    <div className="categories-item__box"  id={id}>
                        <p className="categories-item__descriptions">{descriptions}</p>
                        <button className="categories-item__btn">{btn}</button>
                    </div>
                </div>
            </Pulse>
        </div>
    )
}