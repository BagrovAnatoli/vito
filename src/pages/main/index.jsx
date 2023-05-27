/* eslint-disable consistent-return */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ClassesContext, AuthContext } from '../../contexts';
import { logout } from '../../store/actions/thunks/auth';
import Header from '../../components/header';
import Search from '../../components/search';
import Footer from '../../components/footer';
// import Logo from '../../components/logo';
// import Button from '../../components/button';
import HeaderButton from '../../components/headerButton';
import Cards from '../../components/cards';
import classes from './index.module.scss';
import Modal from '../../components/Modal';
import Login from '../../components/Login/index';
import Register from '../../components/Register/index';

function MainPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('login');
    const { isAuth } = useContext(AuthContext);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const registerHandler = () => {
        setModalContent('register');
    };

    const loginHandler = () => {
        setModalContent('login');
        setModalVisible(true);
    };

    const successLoginHandler = () => {
        setModalVisible(false);
    };

    const successRegisterHandler = () => {
        setModalContent('login');
    };

    const logoutHandler = () => {
        dispatch(logout());
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
                        {!isAuth
                        ? (
                            <HeaderButton className={classes['header__btn-main-enter']} id="btnMainEnter" onClick={loginHandler}>
                                Вход в личный кабинет
                            </HeaderButton>
                        )
                        : (
                            <>
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
                        <Search />
                        <div className={classes.main__container}>
                            <h2 className={classes.main__h2}>Объявления</h2>
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

export default MainPage;
