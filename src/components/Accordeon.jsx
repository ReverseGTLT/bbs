import React, { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="accordion">
                <AccordionItem
                    title="Позиция 1"
                    content="Текст для позиции 1"
                    index={0}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
                <AccordionItem
                    title="Позиция 2"
                    content="Текст для позиции 2"
                    index={1}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
                <AccordionItem
                    title="Позиция 3"
                    content="Текст для позиции 3"
                    index={2}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
                <AccordionItem
                    title="Позиция 4"
                    content="Текст для позиции 4"
                    index={3}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
            </div>
        </div>
    );
};

const AccordionItem = ({ title, content, index, activeIndex, handleClick }) => {
    const isActive = activeIndex === index;

    return (
        <div>
            <div className={`accordion-item ${isActive ? 'active accordion-grey' : ''}`} onClick={isActive ? () => handleClick(null) : () => handleClick(index)}>
                <div className="accordion-title">{title}</div>
                <div className={`accordion-img`}>
                    <img className={`${isActive ? 'rotate' : ''}`} src="./images/arrow.png" alt=""/>
                </div>
            </div>
            {isActive && <div className={`accordion-content`}>{content}</div>}
        </div>
    );
};

export default Accordion;
