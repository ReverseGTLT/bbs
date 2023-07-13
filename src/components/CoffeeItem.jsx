
export function CoffeeItem( {title, src, description} ) {
    return (
        <div className="coffee-items__item">
            <div className="coffee-items__img">
                <img src={src} alt={src}/>
            </div>
            <div className="coffee-items__info">
                <p className="work-item__info-title">{title}</p>
                <p className="work-item__info-descriptions">{description}</p>
            </div>
        </div>
    )
}