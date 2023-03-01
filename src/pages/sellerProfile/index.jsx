import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClassesContext from '../context';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Logo from '../../components/logo';
import HeaderLogo from '../../components/headerLogo';
import Button from '../../components/button';
import HeaderButton from '../../components/headerButton';
import Cards from '../../components/cards';
import PhoneButton from '../../components/phoneButton/phoneButton';
import classes from './index.module.scss';

import { getAllUsers } from '../../store/actions/thunks/users';
import { usersLoadingSelector, usersErrorSelector, userByIdSelector } from '../../store/selectors/users';

import Modal from '../../components/Modal';
import Login from '../../components/Login/login';

function SellerProfilePage() {
    const urlParams = useParams();
    const userId = Number(urlParams.id);
    console.log(userId);

    const [isModalVisible, setModalVisible] = useState(true);

    const dispatch = useDispatch();
    const user = useSelector(userByIdSelector(userId));
    const loading = useSelector(usersLoadingSelector);
    const error = useSelector(usersErrorSelector);

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
      }

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header>
                        <HeaderLogo />
                        <HeaderButton className={classes['header__btn-putAd']} id="btputAd">
                            Разместить объявление
                        </HeaderButton>
                        <HeaderButton className={classes['header__btn-lk']} id="btnlk">
                            Личный кабинет
                        </HeaderButton>
                    </Header>
                    <main className={classes.main}>
                        <div className={classes.main__container}>
                            <div className={classes['main__center-block']}>
                                <div className={`${classes.main__menu} ${classes.menu}`}>
                                    <Logo />
                                    <form className={classes.menu__form} action="/">
                                        <Button id="btnGoBack">Вернуться на&nbsp;главную</Button>
                                    </form>
                                </div>
                                <h2 className={classes.main__h2}>Профиль продавца</h2>
                                    { loading && <div>Загрузка</div> }
                                    { error && <div>{error.message}</div> }
                                    { (user && user.id)
                                    && (
                                        <div className={`${classes['main__profile-sell']} ${classes['profile-sell']}`}>
                                            <div className={classes['profile-sell__content']}>
                                                <div className={`${classes['profile-sell__seller']} ${classes.seller}`}>
                                                    <div className={classes.seller__left}>
                                                        <div className={classes.seller__img}>
                                                            <a href="/" target="_self">
                                                                <img src="#" alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className={classes.seller__right}>
                                                        <h3 className={classes.seller__title}>{`${user.name} ${user.surname}`}</h3>
                                                        <p className={classes.seller__city}>{user.city}</p>
                                                        <p className={classes.seller__inf}>{`Продаёт товары с ${user.sells_from}`}</p>
                                                        <div className={classes['seller__img-mob-block']}>
                                                            <div className={classes['seller__img-mob']}>
                                                                <a href="/" target="_self">
                                                                    <img src="#" alt="" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        {/* <button className={`${classes.seller__btn} ${classes['btn-hov02']}`}>Показать&nbsp;телефон
                                                            <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                                                        </button> */}
                                                        <PhoneButton phone={user.phone} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                <h3 className={`${classes.main__title} ${classes.title}`}>
                                    Товары продавца
                                </h3>
                            </div>
                            <div className={classes.main__content}>
                                <div className={`${classes.content__cards} ${classes.cards}`}>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
            {isModalVisible &&
            (
                <Modal onClick={toggleModal}>
                    <Login />
                </Modal>
            )}
        </ClassesContext.Provider>
    );
}

export default SellerProfilePage;
