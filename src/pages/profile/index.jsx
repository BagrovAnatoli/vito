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
                            <div className={`${classes.main__profile} ${classes.profile}`}>
                                <div className={classes.profile__content}>
                                    <h3 className={`${classes.profile__title} ${classes.title}`}>Настройки профиля</h3>
                                    <div className={`${classes.profile__settings} ${classes.settings}`}>
                                        <div className={classes.settings__left}>
                                            <div className={classes.settings__img}>
                                                <a href="/" target="_self">
                                                    <img src="#" alt="" />
                                                </a>
                                            </div>
                                            <a className={classes['settings__change-photo']} href="/" target="_self">
                                                Заменить
                                            </a>
                                        </div>
                                        <div className={classes.settings__right}>
                                            <form className={classes.settings__form} action="#">
                                                <div className={classes.settings__div}>
                                                    <label htmlFor="fname">Имя</label>
                                                    <input className={classes['settings__f-name']} id="settings-fname" name="fname" type="text" value="Ан" placeholder="" />
                                                </div>

                                                <div className={classes.settings__div}>
                                                    <label htmlFor="lname">Фамилия</label>
                                                    <input className={classes['settings__l-name']} id="settings-lname" name="lname" type="text" value="Городецкий" placeholder="" />
                                                </div>

                                                <div className={classes.settings__div}>
                                                    <label htmlFor="city">Город</label>
                                                    <input className={classes.settings__city} id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder="" />
                                                </div>

                                                <div className={classes.settings__div}>
                                                    <label htmlFor="phone">Телефон</label>
                                                    <input className={classes.settings__phone} id="settings-phone" name="phone" type="tel" value="89161234567" placeholder="+79161234567" />
                                                </div>

                                                <button className={`${classes.settings__btn} ${classes['btn-hov02']}`} id="settings-btn">Сохранить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 className={`${classes.main__title} ${classes.title}`}>
                                Мои товары
                            </h3>
                        </div>
                        <div className={classes.main__content}>
                            <div className={`${classes.content__cards} ${classes.cards}`}>

                                <div className={classes.cards__item}>
                                    <div className={`${classes.cards__card} ${classes.card}`}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic" />
                                            </a>
                                        </div>
                                        <div className={classes.card__content}>
                                            <a href="/" target="_blank">
                                                <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                                            </a>
                                            <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                                            <p className={classes.card__place}>Санкт Петербург</p>
                                            <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.cards__item}>
                                    <div className={`${classes.cards__card} ${classes.card}`}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic" />
                                            </a>
                                        </div>
                                        <div className={classes.card__content}>
                                            <a href="/" target="_blank">
                                                <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                                            </a>
                                            <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                                            <p className={classes.card__place}>Санкт Петербург</p>
                                            <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.cards__item}>
                                    <div className={`${classes.cards__card} ${classes.card}`}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic" />
                                            </a>
                                        </div>
                                        <div className={classes.card__content}>
                                            <a href="/" target="_blank">
                                                <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                                            </a>
                                            <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                                            <p className={classes.card__place}>Санкт Петербург</p>
                                            <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.cards__item}>
                                    <div className={`${classes.cards__card} ${classes.card}`}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic" />
                                            </a>
                                        </div>
                                        <div className={classes.card__content}>
                                            <a href="/" target="_blank">
                                                <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                                            </a>
                                            <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                                            <p className={classes.card__place}>Санкт Петербург</p>
                                            <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.cards__item}>
                                    <div className={`${classes.cards__card} ${classes.card}`}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic" />
                                            </a>
                                        </div>
                                        <div className={classes.card__content}>
                                            <a href="/" target="_blank">
                                                <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                                            </a>
                                            <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                                            <p className={classes.card__place}>Санкт Петербург</p>
                                            <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.cards__item}>
                                    <div className={`${classes.cards__card} ${classes.card}`}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic" />
                                            </a>
                                        </div>
                                        <div className={classes.card__content}>
                                            <a href="/" target="_blank">
                                                <h3 className={classes.card__title}>Ракетка для большого тенниса Triumph Pro ST</h3>
                                            </a>
                                            <p className={classes.card__price}>2&nbsp;200&nbsp;₽</p>
                                            <p className={classes.card__place}>Санкт Петербург</p>
                                            <p className={classes.card__date}>Сегодня в&nbsp;10:45</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
                <Footer classes={classes} />
            </div>
        </div>
    );
}

export default ProfilePage;
