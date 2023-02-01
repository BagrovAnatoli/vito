import classes from './index.module.css'

function ProfilePage() {
    return (
        <body>
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <header className={classes.header}>
                    <nav className={classes.header__nav}>
                        <div className={classes.header__logo logo-mob}>
                            <a className={classes.logo-mob__link" href="/" target="_blank}>
                                <img className={classes.logo-mob__img" src="img/logo-mob.png" alt="logo}/>
                            </a>
                        </div>
                        <button className={classes.header__btn-putAd btn-hov01" id="btputAd}>Разместить объявление</button>
                        <button className={classes.header__btn-lk btn-hov01" id="btnlk}>Личный кабинет</button>
                    </}>
                                <div className={classes.profile__content}>
                                    <h3 className={classes.profile__title title}>Настройки профиля</h3>
                                    <div className={classes.profile__settings settings}>
                                        <div className={classes.settings__left}>
                                            <div className={classes.settings__img}>
                                                <a href="/" target="_self">
                                                    <img src="#" alt=""/>
                                                </a>
                            
                                            </div>
                                            <a className={classes.settings__change-photo" href="/" target="_self}>
                                                Заменить
                                            </a>
                                        </div>
                                        <div className={classes.settings__right}>
                                            <form className={classes.settings__form" action="#}>
                                                <div className={classes.settings__div}>
                                                    <label for="fname">Имя</label>
                                                    <input className={classes.settings__f-name" id="settings-fname" name="fname" type="text" value="Ан" placeholder="}/>
                                                </div>
                            
                                                <div className={classes.settings__div}>
                                                    <label for="lname">Фамилия</label>
                                                    <input className={classes.settings__l-name" id="settings-lname" name="lname" type="text" value="Городецкий" placeholder="}/>
                                                </div>
                            
                                                <div className={classes.settings__div}>
                                                    <label for="city">Город</label>
                                                    <input className={classes.settings__city" id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder="}/>
                                                </div>
                            
                                                <div className={classes.settings__div}>
                                                    <label for="phone">Телефон</label>
                                                    <input className={classes.settings__phone" id="settings-phone" name="phone" type="tel" value="89161234567" placeholder="+79161234567}/>
                                                </div>
                            
                                                <button className={classes.settings__btn btn-hov02" id="settings-btn}>Сохранить</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <h3 className={classes.main__title title}>
                                Мои товары
                            </h3>
                        </div>
                        <div className={classes.main__content}>
                            
                            <div className={classes.content__cards cards}>                            
    
                                <div className={classes.cards__item}>
                                    <div className={classes.cards__card card}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pict"/>
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
                                    <div className={classes.cards__card card}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pict"/>
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
                                    <div className={classes.cards__card card}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pict"/>
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
                                    <div className={classes.cards__card card}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic"/>
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
                                    <div className={classes.cards__card card}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic"/>
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
                                    <div className={classes.cards__card card}>
                                        <div className={classes.card__image}>
                                            <a href="/" target="_blank">
                                                <img src="#" alt="pic"/>
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
                
                <footer className={classes.footer}>
                    <div className={classes.footer__container}>
                        <div className={classes.footer__img}>
                            <a href="/" target="_self">
                                <img src="img/icon_01.png" alt="home"/>
                            </a>                        
                        </div>
                        <div className={classes.footer__img}>
                            <a href="/" target="_self">
                                <img src="img/icon_02.png" alt="home"/>
                            </a>
                        </div>
                        <div className={classes.footer__img}>
                            <a href="/" target="_self">
                                <img src="img/icon_03.png" alt="home"/>
                            </a>
                        </div>
                    </div>
                    
                </footer>
            </div>
        </div>
    
        {/* <script src="js/script.js"></script> */}
    </body>
    );
  }
  
export default ProfilePage;