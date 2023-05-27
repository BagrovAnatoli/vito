import React, { useState } from 'react';
import { ClassesContext } from '../contexts';

function PhoneButton({ phone, className }) {
    const classes = React.useContext(ClassesContext);
    const [statusButton, setStatusButton] = useState('secret');

    const formatPhone = (ph) => `${ph.slice(0, 1)} ${ph.slice(1, 4)} ${ph.slice(4, 7)} ${ph.slice(7, 9)} ${ph.slice(9)}`;

    const clickHandler = () => setStatusButton('displayed');

    if (!phone) {
        return (
            <button
              className={`${className} ${classes['btn-hov02']}`}
            >Связаться с продавцом
            </button>
        );
    }

    return (
        <>
            {statusButton === 'secret'
            && (
            <button
              className={`${className} ${classes['btn-hov02']}`}
              onClick={clickHandler}
            >Показать&nbsp;телефон
                <span>8&nbsp;{phone.slice(1, 4)}&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
            </button>
            )}
            {statusButton === 'displayed'
            && (
                <div className={`${classes.article__a} ${classes['btn-hov02']}`}>
                    <a href={`tel: +7${phone.slice(1)}`}>
                        <span>{formatPhone(phone)}</span>
                    </a>
                </div>
            )}
        </>
    );
}

export default PhoneButton;
