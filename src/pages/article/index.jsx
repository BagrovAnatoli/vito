import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { ClassesContext, AuthContext } from '../../contexts';
import { logout } from '../../store/actions/thunks/auth';
import Header from '../../components/header';
import Article from '../../components/article';
import Footer from '../../components/footer';
import HeaderLogo from '../../components/headerLogo';
import HeaderButton from '../../components/headerButton';
import classes from './index.module.scss';
import Modal from '../../components/Modal';
import Login from '../../components/Login/index';
import Register from '../../components/Register/index';

function ArticlePage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('login');
    const { isAuth, logoutContext } = useContext(AuthContext);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                            <div className={`${classes.main__menu} ${classes.menu}`}>
                                <a className={classes['menu__logo-link']} href="/" target="_blank">
                                    <img className={classes['menu__logo-img']} src="/img/logo.png" alt="logo" />
                                </a>
                                <form className={classes.menu__form} action="/">
                                    <button className={`${classes['menu__btn-serch']} ${classes['btn-hov02']}`} id="btnGoBack">Вернуться на главную</button>
                                </form>
                            </div>
                        </div>
                        <Article />
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

export default ArticlePage;
