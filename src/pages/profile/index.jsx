import classes from './index.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

function ProfilePage() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Header classes={classes} />
                <main className={classes.main}>
                    <div className={classes.main__container}>
                        <div className={classes['main__center-block']}>
                            <div className={`${classes.main__menu} ${classes.menu}`}>
                                <a className={classes['menu__logo-link']} href="/" target="_blank">
                                    <img className={classes['menu__logo-img']} src="img/logo.png" alt="logo" />
                                </a>
                                <form className={classes.menu__form} action="#">
                                    <button className={`${classes.menu__btn} ${classes['btn-hov02']}`} id="btnGoBack">Вернуться на&nbsp;главную</button>
                                </form>
                            </div>
                            <h2 className={classes.main__h2}>Здравствуйте, Антон!</h2>
                        </div>
                        <div className={classes.main__content}>
                            main__content
                        </div>
                    </div>
                </main>
                <Footer classes={classes} />
            </div>
        </div>
    );
}

export default ProfilePage;
