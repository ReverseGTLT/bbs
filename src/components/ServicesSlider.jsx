import {useTranslation} from "react-i18next";
import {useState} from "react";

import Fade from 'react-reveal/Fade';
import {Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";

export function ServicesSlider() {
    const { t } = useTranslation();
    const [onClicked, setOnClicked] = useState("Первый слайд сервиса");
    const [isVisibles, setIsVisibles] = useState(true);
    const [selectedTag, setSelectedTag] = useState('ServiceText1');

    function pushTextToDescription(e) {
        const selectedId = e.target.id;
        setIsVisibles(false); // Скрываем текущий текст

        switch (selectedId) {
            case 'ServiceText1':
                setTimeout(() => {
                    setOnClicked("Первый слайд сервиса");
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText2':
                setTimeout(() => {
                    setOnClicked("Второй слайд сервиса");
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText3':
                setTimeout(() => {
                    setOnClicked("Третий слайд сервиса");
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
            case 'ServiceText4':
                setTimeout(() => {
                    setOnClicked("Четвертый слайд сервиса");
                    setIsVisibles(true); // Показываем новый текст
                }, 200);
                break;
        }
        setSelectedTag(selectedId);
    }

    return (
        <div className="work">
            <div className="work-box desctop">
                <div className="container container--work">
                    <div className="work-titles">
                        <Fade down>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText1' ? 'selected' : ''}`} id="ServiceText1">{"first"}
                            </h2>
                        </Fade>
                        <Fade down delay={400}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText2' ? 'selected' : ''}`} id="ServiceText2">{"second"}
                            </h2>
                        </Fade>
                        <Fade down delay={800}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText3' ? 'selected' : ''}`} id="ServiceText3">{"third"}
                            </h2>
                        </Fade>
                        <Fade down delay={1200}>
                            <h2 onClick={pushTextToDescription}
                                className={`work-titles__text ${selectedTag === 'ServiceText4' ? 'selected' : ''}`} id="ServiceText4">{'fourth'}
                            </h2>
                        </Fade>
                    </div>
                    <div className="work-descriptions">
                        <p className={`work-descriptions__text ${isVisibles ? 'visible' : ''}`} data-description="ServiceText1">{onClicked}</p>
                    </div>
                </div>

            </div>
            <div className="work-mobile">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    slidesPerView="auto"
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                >
                    <SwiperSlide>
                        <Fade left>
                            <div className="slideContainer">
                                <h2 className="work-titles__text">{"first"}
                                </h2>
                                <p className="work-descriptions__text">{"Первый слайд"}</p>
                            </div>
                        </Fade>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{"second"}
                            </h2>
                            <p className="work-descriptions__text">{"Второй слайд"}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{"third"}
                            </h2>
                            <p className="work-descriptions__text">{"Третий слайд"}</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideContainer">
                            <h2 className="work-titles__text">{"fourth"}
                            </h2>
                            <p className="work-descriptions__text">{"Четвертый слайд"}</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}