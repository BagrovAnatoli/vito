import React from 'react';
import ClassesContext from '../pages/profile/context';

function Header() {
    const classes = React.useContext(ClassesContext);
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <div className={`${classes.header__logo} ${classes['logo-mob']}`}>
                    <a className={classes['logo-mob__link']} href="/" target="_blank">
                        <img className={classes['logo-mob__img']} src="img/logo-mob.png" alt="logo" />
                    </a>
                </div>
                <button className={`${classes['header__btn-putAd']} ${classes['btn-hov01']}`} id="btputAd">Разместить объявление</button>
                <button className={`${classes['header__btn-lk']} ${classes['btn-hov01']}`} id="btnlk">Личный кабинет</button>
            </nav>
        </header>
    );
}

export default Header;
