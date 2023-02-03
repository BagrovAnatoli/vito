import React from 'react';
import ClassesContext from '../context';
import Header from '../../components/header';
import Footer from '../../components/footer';
// import Logo from '../../components/logo';
// import Button from '../../components/button';
import Card from '../../components/card';
import classes from './index.module.scss';

function MainPage() {
    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header />
                    <main className={classes.main}>
                        <div className={`${classes.main__search} ${classes.search}`}>
                            <a className={classes['search__logo-link']} href="/" target="_blank">
                                <img className={classes['search__logo-img']} src="img/logo.png" alt="logo" />
                            </a>
                            <a className={classes['search__logo-mob-link']} href="/" target="_blank">
                                <img className={classes['search__logo-mob-img']} src="img/logo-mob.png" alt="logo" />
                            </a>
                            <form className={classes.search__form} action="#">
                                <input className={classes.search__text} type="search" placeholder="Поиск по объявлениям" name="search" />
                                <input className={classes['search__text-mob']} type="search" placeholder="Поиск" name="search-mob" />
                                <button className={`${classes.search__btn} ${classes['btn-hov02']}`}>Найти</button>
                            </form>
                        </div>

                        <div className={classes.main__container}>
                            <h2 className={classes.main__h2}>Объявления</h2>
                            <div className={classes.main__content}>
                                <div className={`${classes.content__cards} ${classes.cards}`}>

                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />

                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </ClassesContext.Provider>
    );
}

export default MainPage;
