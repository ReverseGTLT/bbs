import {CoffeeItem} from "../components/CoffeeItem";


export function Coffee( { } ) {
    return (
        <section className="coffee">
            <h4 className="work__title">Coffee</h4>
            <div className="container coffee-image">
                <img className="coffee-image__picture" src="./images/coffee/coffee-main.png" alt="coffee main"/>
            </div>
            <div className="coffee-link">
                <a className="coffee-link__all" href="#">СМОТРЕТЬ ВСЕ</a>
            </div>
            <div className="container coffee-items">
                <CoffeeItem
                    title={"Получите все и сразу"}
                    src={"./images/coffee/1.png"}
                    description={"Вам не нужно заключать договоры с множеством подрядчиков и выбирать, с кем выгоднее сотрудничать.\n" +
                        "\n" +
                        "Мы всё уже сделали — создали платформу с низкими ценами, быстрой доставкой и выгодным банковским обслуживанием"}
                />

                <CoffeeItem
                    title={"Автоматизируйте управление кофейней"}
                    src={"./images/coffee/2.png"}
                    description={"Полный комплекс программных решений для вашего бизнеса: ведите складской учет, установите бонусную программу, подключитесь к мобильному приложению для клиентов, следите за аналитикой продаж, составляйте меню с фото и модификаторами и многое другое."}
                />

                <CoffeeItem
                    title={"Экономия на оптовых закупках"}
                    src={"./images/coffee/3.png"}
                    description={"Мы не зарабатываем на кофе, поэтому не делаем рыночной наценки на продукции маркетплейса. У нас вы можете купить зерно и сопутствующие товары с выгодой до 40%."}
                />
            </div>
            <div className="container coffee-bg">
                <img src="./images/coffee/coffee-footer.png" alt="coffee footer"/>
            </div>
            <div className="coffee-goods">
                <div className="container">
                    <h5 className="work-item__info-title">Товары и услуги</h5>
                    <div className="coffee-goods__wrapper">
                        <div className="coffee-goods__item">
                            <img src="./images/coffee/goods1.svg" alt="goods1"/>
                            <p>Бесплатное обучение</p>
                        </div>

                        <div className="coffee-goods__item">
                            <img src="./images/coffee/goods2.svg" alt="goods2"/>
                            <p>Техническое обслуживание</p>
                        </div>

                        <div className="coffee-goods__item">
                            <img src="./images/coffee/goods3.svg" alt="goods3"/>
                            <p>Сопровождение проектов</p>
                        </div>

                        <div className="coffee-goods__item">
                            <img src="./images/coffee/goods4.svg" alt="goods4"/>
                            <p>Аренда и продажа оборудования и кофейных аксессуаров</p>
                        </div>

                        <div className="coffee-goods__item">
                            <img src="./images/coffee/goods5.svg" alt="goods5"/>
                            <p>Уникальный кофе под заказ</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}