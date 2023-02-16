import React from 'react';
import { useParams } from 'react-router-dom';
import ClassesContext from '../context';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HeaderLogo from '../../components/headerLogo';
import HeaderButton from '../../components/headerButton';
import classes from './index.module.scss';

function ArticlePage() {
    const urlParams = useParams();
    const articleId = Number(urlParams.id);
    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header>
                        <HeaderLogo />
                        <div>Статья №{articleId}</div>
                        <HeaderButton className={classes['header__btn-putAd']} id="btputAd">
                            Разместить объявление
                        </HeaderButton>
                        <HeaderButton className={classes['header__btn-lk']} id="btnlk">
                            Личный кабинет
                        </HeaderButton>
                    </Header>
                    <main className={classes.main}>
                        <div className={classes.main__container}>
                            <div className={`${classes.main__menu} ${classes.menu}`}>
                                <a className={classes['menu__logo-link']} href="/" target="_blank">
                                    <img className={classes['menu__logo-img']} src="/img/logo.png" alt="logo" />
                                </a>
                                <form className={classes.menu__form} action="#">
                                    <button className={`${classes['menu__btn-serch']} ${classes['btn-hov02']}`} id="btnGoBack">Вернуться на главную</button>
                                </form>
                            </div>
                        </div>
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
                                        <h3 className={`${classes.article__title} ${classes.title}`}>Ракетка для большого тенниса Triumph Pro STС Б/У</h3>
                                        <div className={classes.article__info}>
                                            <p className={classes.article__date}>Сегодня в 10:45</p>
                                            <p className={classes.article__city}>Санкт-Петербург</p>
                                            <a className={classes.article__link} href="/" target="_blank" rel="nofollow">23 отзыва</a>
                                        </div>
                                        <p className={classes.article__price}>2 200 ₽</p>
                                        <button className={`${classes.article__btn} ${classes['btn-hov02']}`}>Показать&nbsp;телефон
                                            <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                                        </button>
                                        <div className={`${classes.article__author} ${classes.author}`}>
                                            <div className={classes.author__img}>
                                                <img src="/" alt="pic" />
                                            </div>
                                            <div className={classes.author__cont}>
                                                <p className={classes.author__name}>Кирилл</p>
                                                <p className={classes.author__about}>Продает товары с августа 2021</p>
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
                                <p className={classes.main__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </ClassesContext.Provider>
    );
}

export default ArticlePage;
