import React from 'react';
import ClassesContext from '../pages/profile/context';

function Footer() {
    const classes = React.useContext(ClassesContext);

    return (
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                <div className={classes.footer__img}>
                    <a href="/" target="_self">
                        <img src="img/icon_01.png" alt="home" />
                    </a>
                </div>
                <div className={classes.footer__img}>
                    <a href="/" target="_self">
                        <img src="img/icon_02.png" alt="home" />
                    </a>
                </div>
                <div className={classes.footer__img}>
                    <a href="/" target="_self">
                        <img src="img/icon_03.png" alt="home" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
