function Footer(props) {
    const { classes } = props;
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
