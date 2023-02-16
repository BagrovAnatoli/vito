import React from 'react';
import ClassesContext from '../pages/context';

function HeaderLogo() {
    const classes = React.useContext(ClassesContext);

    return (
        <div className={`${classes.header__logo} ${classes['logo-mob']}`}>
            <a className={classes['logo-mob__link']} href="/" target="_blank">
                <img className={classes['logo-mob__img']} src="/img/logo-mob.png" alt="logo" />
            </a>
        </div>
    );
}

export default HeaderLogo;
