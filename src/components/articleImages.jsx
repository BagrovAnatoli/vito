// import React, { useState } from 'react';
import React from 'react';
import ClassesContext from '../pages/context';

function ArticleImages() {
    const classes = React.useContext(ClassesContext);
    // const [statusButton, setStatusButton] = useState('');

    return (
        <div className={classes['article__fill-img']}>
            <div className={classes.article__img}>
                    <img src="/" alt="photoOfGood" />
            </div>
            <div className={classes['article__img-bar']}>
                <div className={classes['article__img-bar-div']}>
                    <img src="/" alt="photoOfGood" />
                </div>
                <div className={classes['article__img-bar-div']}>
                    <img src="/" alt="photoOfGood" />
                </div>
                <div className={classes['article__img-bar-div']}>
                    <img src="/" alt="photoOfGood" />
                </div>
                <div className={classes['article__img-bar-div']}>
                    <img src="/" alt="photoOfGood" />
                </div>
                <div className={classes['article__img-bar-div']}>
                    <img src="/" alt="photoOfGood" />
                </div>
                <div className={classes['article__img-bar-div']}>
                    <img src="/" alt="photoOfGood" />
                </div>
            </div>
            <div className={`${classes['article__img-bar-mob']} ${classes['img-bar-mob']}`}>
                <div className={`${classes['img-bar-mob__circle']} ${classes['circle-active']}`}></div>
                <div className={classes['img-bar-mob__circle']}></div>
                <div className={classes['img-bar-mob__circle']}></div>
                <div className={classes['img-bar-mob__circle']}></div>
                <div className={classes['img-bar-mob__circle']}></div>
            </div>
        </div>
    );
}

export default ArticleImages;
