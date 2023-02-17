import React, { useState } from 'react';
import ClassesContext from '../pages/context';

function ArticleButton({ phone }) {
    const classes = React.useContext(ClassesContext);
    const [statusButton, setStatusButton] = useState('secret');

    const clickHandler = (e) => {
        if (statusButton === 'secret') {
            alert(phone);
            e.target.innerText = phone;
        }
        return setStatusButton('displayed');
    };

    return (
        <button
          className={`${classes.article__btn} ${classes['btn-hov02']}`}
          onClick={clickHandler}
        >Показать&nbsp;телефон
            <span>8&nbsp;{phone.slice(1, 4)}&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
        </button>
    );
}

export default ArticleButton;
