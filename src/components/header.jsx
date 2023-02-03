import React from 'react';
import ClassesContext from '../pages/context';
// import HeaderLogo from './headerLogo';
import HeaderButton from './headerButton';

function Header() {
    const classes = React.useContext(ClassesContext);
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                <HeaderButton className={classes['header__btn-main-enter']} id="btnMainEnter">
                    Вход в личный кабинет
                </HeaderButton>
                {/* <HeaderLogo />
                <HeaderButton className={classes['header__btn-putAd']} id="btputAd">
                    Разместить объявление
                </HeaderButton>
                <HeaderButton className={classes['header__btn-lk']} id="btnlk">
                    Личный кабинет
                </HeaderButton> */}
            </nav>
        </header>
    );
}

export default Header;
