/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import ClassesContext from '../pages/context';
import BASE_URL from '../constants';

function ArticleImages({ images }) {
    const classes = React.useContext(ClassesContext);
    const [carrentImageIndex, setCurrentImageIndex] = useState(0);

    const imageClickHandler = (i) => {
        setCurrentImageIndex(i);
    };

    if (images.length > 0) {
        return (
            <div className={classes['article__fill-img']}>
                <div className={classes.article__img}>
                    <img
                      src={`${BASE_URL}/${images[carrentImageIndex].url}`}
                      alt={`${images[carrentImageIndex].id}`}
                    />
                </div>
                <div className={classes['article__img-bar']}>
                    {images.map((image, i) => (
                        <div
                          className={classes['article__img-bar-div']}
                          key={image.id}
                          onClick={() => imageClickHandler(i)}
                        >
                            <img src={`${BASE_URL}/${image.url}`} alt={`${image.id}`} />
                        </div>
                    ))}
                </div>
                <div className={`${classes['article__img-bar-mob']} ${classes['img-bar-mob']}`}>
                    {images.map((image, i) => (
                        <div
                          className={`${classes['img-bar-mob__circle']} ${
                            carrentImageIndex === i
                            && classes['circle-active']
                          }`}
                          key={image.id}
                          onClick={() => imageClickHandler(i)}
                        >
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ArticleImages;
