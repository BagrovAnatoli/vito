import React from 'react';
import ClassesContext from '../pages/context';
import BASE_URL from '../constants';

function Card({
    title, price, city, createdOn, imgUrl, id,
}) {
    const classes = React.useContext(ClassesContext);

    return (
        <div className={classes.cards__item}>
            <div className={`${classes.cards__card} ${classes.card}`}>
                <div className={classes.card__image}>
                    <a href={`ads/${id}`} target="_blank" rel="noreferrer">
                        <img src={`${BASE_URL}/${imgUrl}`} alt="pic" />
                    </a>
                </div>
                <div className={classes.card__content}>
                    <a href={`ads/${id}`} target="_blank" rel="noreferrer">
                        <h3 className={classes.card__title}>{title}</h3>
                    </a>
                    <p className={classes.card__price}>{price}&nbsp;₽</p>
                    <p className={classes.card__place}>{city}</p>
                    <p className={classes.card__date}>{createdOn}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
