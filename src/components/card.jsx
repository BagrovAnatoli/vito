import React from 'react';
import ClassesContext from '../pages/context';

function Card() {
    const classes = React.useContext(ClassesContext);

    return (
        <div className={classes.cards__item}>
            <div className={`${classes.cards__card} ${classes.card}`}>
                <div className={classes.card__image}>
                    <a href="/" target="_blank">
                        <img src="#" alt="pic" />
                    </a>
                </div>
                <div className={classes.card__content}>
                    <a href="/" target="_blank">
                        <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                    </a>
                    <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                    <p className={classes.card__place}>Санкт Петербург</p>
                    <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
