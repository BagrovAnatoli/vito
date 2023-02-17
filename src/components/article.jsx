import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { fetchArticleById } from '../store/actions/thunks/ads';
import { articleSelector, articleLoadingSelector, articleErrorSelector } from '../store/selectors/ads';
import ClassesContext from '../pages/context';
import BASE_URL from '../constants';

function Article() {
    const urlParams = useParams();
    const articleId = Number(urlParams.id);

    const classes = React.useContext(ClassesContext);
    const dispatch = useDispatch();
    const article = useSelector(articleSelector);
    const loading = useSelector(articleLoadingSelector);
    const error = useSelector(articleErrorSelector);

    console.log(article);

    const isArticleExist = () => {
        if (article && article.id > 0) {
            return true;
        }
        return false;
    };

    useEffect(() => {
        dispatch(fetchArticleById(articleId));
    }, []);

    return (
        <>
            { loading ? <div>Загрузка</div> : null }
            { error ? <div>{error}</div> : null }
            { isArticleExist()
                && (
                    <>
                        <div className={`${classes.main__artic} ${classes.artic}`}>
                            <div className={`${classes.artic__content} ${classes.article}`}>
                                <div className={classes.article__left}>
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
                                </div>
                                <div className={classes.article__right}>
                                    <div className={classes.article__block}>
                                        <h3 className={`${classes.article__title} ${classes.title}`}>{article.title}</h3>
                                        <div className={classes.article__info}>
                                            <p className={classes.article__date}>{article.created_on}</p>
                                            <p className={classes.article__city}>{article.user.city}</p>
                                        </div>
                                        <p className={classes.article__price}>{article.price}</p>
                                        <button className={`${classes.article__btn} ${classes['btn-hov02']}`}>Показать&nbsp;телефон
                                            <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                                        </button>
                                        <div className={`${classes.article__author} ${classes.author}`}>
                                            <div className={classes.author__img}>
                                                <img src={`${BASE_URL}/${article.user.avatar}`} alt={article.user.name} />
                                            </div>
                                            <div className={classes.author__cont}>
                                                <p className={classes.author__name}>{article.user.name}</p>
                                                <p className={classes.author__about}>Продает товары с {article.user.sells_from}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.main__container}>
                            <h3 className={`${classes.main__title} ${classes.title}`}>
                                Описание товара
                            </h3>
                            <div className={classes.main__content}>
                                <p className={classes.main__text}>{article.description}</p>
                            </div>
                        </div>
                    </>
                )}
        </>
    );
}

export default Article;