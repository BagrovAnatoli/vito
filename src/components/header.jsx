import React from 'react';
import { ClassesContext } from '../contexts';

function Header({ children }) {
    const classes = React.useContext(ClassesContext);
    return (
        <header className={classes.header}>
            <nav className={classes.header__nav}>
                {children}
            </nav>
        </header>
    );
}

export default Header;
