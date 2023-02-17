import React from 'react';
import ClassesContext from '../pages/context';

function ArticleButton({ phone }) {
    const classes = React.useContext(ClassesContext);

    return (
        <button className={`${classes.article__btn} ${classes['btn-hov02']}`}>Показать&nbsp;телефон
            <span>8&nbsp;{phone.slice(1, 4)}&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
        </button>
    );
}

export default ArticleButton;
