import React from 'react';
// import { useParams } from 'react-router-dom';
import ClassesContext from '../context';
import Header from '../../components/header';
import Article from '../../components/article';
import Footer from '../../components/footer';
import HeaderLogo from '../../components/headerLogo';
import HeaderButton from '../../components/headerButton';
import classes from './index.module.scss';

function ArticlePage() {
    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header>
                        <HeaderLogo />
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
                        <Article />
                    </main>
                    <Footer />
                </div>
            </div>
        </ClassesContext.Provider>
    );
}

export default ArticlePage;
