import React, { useEffect, useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { ClassesContext, AuthContext } from '../../contexts';
import { logout } from '../../store/actions/thunks/auth';
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
import Login from '../../components/Login/index';
import Register from '../../components/Register/index';

function SellerProfilePage() {
    const urlParams = useParams();
    const userId = Number(urlParams.id);
    console.log(userId);

    const [modalVisible, setModalVisible] = useState(true);
    const [modalContent, setModalContent] = useState('login');
    const { isAuth, logoutContext } = useContext(AuthContext);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector(userByIdSelector(userId));
    const loading = useSelector(usersLoadingSelector);
    const error = useSelector(usersErrorSelector);

    const registerHandler = () => {
        setModalContent('register');
    };

    const loginHandler = () => {
        setModalContent('login');
        setModalVisible(true);
    };

    const putAdHandler = () => {
        alert('putAd');
    };

    const successLoginHandler = () => {
        setModalVisible(false);
    };

    const successRegisterHandler = () => {
        setModalContent('login');
    };

    const logoutHandler = async () => {
        await dispatch(logout());
        logoutContext();
    };

    const enterHandler = () => navigate('/profile');

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header>
                        <HeaderLogo />
                        {!isAuth
                        ? (
                            <>
                                <HeaderButton className={classes['header__btn-putAd']} id="btputAd" onClick={loginHandler}>
                                    Разместить объявление
                                </HeaderButton>
                                <HeaderButton className={classes['header__btn-lk']} id="btnlk" onClick={loginHandler}>
                                    Личный кабинет
                                </HeaderButton>
                            </>
                        )
                        : (
                            <>
                                <HeaderButton className={classes['header__btn-putAd']} id="btputAd" onClick={putAdHandler}>
                                    Разместить объявление
                                </HeaderButton>
                                <HeaderButton className={classes['header__btn-main-enter']} id="btnMainEnter" onClick={enterHandler}>
                                    Личный кабинет
                                </HeaderButton>
                                <HeaderButton className={classes['header__btn-main-out']} id="btnMainOut" onClick={logoutHandler}>
                                    Выйти
                                </HeaderButton>
                            </>
                        )}
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
            {modalVisible
            && (
                <Modal onClick={toggleModal}>
                    {modalContent === 'login' && <Login registerHandler={registerHandler} successLoginHandler={successLoginHandler} />}
                    {modalContent === 'register' && <Register successRegisterHandler={successRegisterHandler} />}
                </Modal>
            )}
        </ClassesContext.Provider>
    );
}

export default SellerProfilePage;
