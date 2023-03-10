import React from 'react';
import { ClassesContext } from '../contexts';

function Logo() {
    const classes = React.useContext(ClassesContext);

    return (
        <a className={classes['menu__logo-link']} href="/" target="_blank">
            <img className={classes['menu__logo-img']} src="/img/logo.png" alt="logo" />
        </a>
    );
}

export default Logo;
