import React from 'react';
import ClassesContext from '../pages/context';

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
