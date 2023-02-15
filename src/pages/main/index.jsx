import React from 'react';
import ClassesContext from '../context';
import Header from '../../components/header';
import Search from '../../components/search';
import Footer from '../../components/footer';
// import Logo from '../../components/logo';
// import Button from '../../components/button';
import HeaderButton from '../../components/headerButton';
import Cards from '../../components/cardsStub';
import classes from './index.module.scss';

function MainPage() {
    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header>
                        <HeaderButton className={classes['header__btn-main-enter']} id="btnMainEnter">
                            Вход в личный кабинет
                        </HeaderButton>
                    </Header>
                    <main className={classes.main}>
                        <Search />
                        <div className={classes.main__container}>
                            <h2 className={classes.main__h2}>Объявления</h2>
                            <div className={classes.main__content}>
                                <div className={`${classes.content__cards} ${classes.cards}`}>
                                    <Cards />
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
