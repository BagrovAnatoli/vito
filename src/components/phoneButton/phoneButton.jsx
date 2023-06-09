import React, { useState } from 'react';
import classes from './index.module.scss';

function PhoneButton({ phone }) {
    const [statusButton, setStatusButton] = useState('secret');

    const formatPhone = (ph) => `${ph.slice(0, 1)} ${ph.slice(1, 4)} ${ph.slice(4, 7)} ${ph.slice(7, 9)} ${ph.slice(9)}`;

    const clickHandler = () => setStatusButton('displayed');

    if (!phone) {
        return (
            <button
              className={`${classes.btn} ${classes['btn-hov']}`}
            >Связаться с продавцом
            </button>
        );
    }

    return (
        <>
            {statusButton === 'secret'
            && (
            <button
              className={`${classes.btn} ${classes['btn-hov']}`}
              onClick={clickHandler}
            >Показать&nbsp;телефон
                <span>8&nbsp;{phone.slice(1, 4)}&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
            </button>
            )}
            {statusButton === 'displayed'
            && (
                <div className={`${classes.btn} ${classes.a} ${classes['btn-hov']}`}>
                    <a href={`tel: +7${phone.slice(1)}`}>
                        <span>{formatPhone(phone)}</span>
                    </a>
                </div>
            )}
        </>
    );
}

export default PhoneButton;
