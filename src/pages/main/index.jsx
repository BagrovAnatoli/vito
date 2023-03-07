/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassesContext from '../context';
import Header from '../../components/header';
import Search from '../../components/search';
import Footer from '../../components/footer';
// import Logo from '../../components/logo';
// import Button from '../../components/button';
import HeaderButton from '../../components/headerButton';
import Cards from '../../components/cards';
import classes from './index.module.scss';
import cookies from '../../utils/cookies';
import Modal from '../../components/Modal';
import Login from '../../components/Login/index';
import Register from '../../components/Register/index';

function MainPage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('login');

    const navigate = useNavigate();

    const registerHandler = () => {
        setModalContent('register');
    };

    const enterHandler = () => {
        const isToken = cookies.check('token');
        if (isToken) {
            alert('Да');
            setModalVisible(false);
            return navigate('/profile');
        }
        if (!isToken) {
            alert('Нет');
            setModalContent('login');
            setModalVisible(true);
        }
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <ClassesContext.Provider value={classes}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <Header>
                        <HeaderButton className={classes['header__btn-main-enter']} id="btnMainEnter" onClick={enterHandler}>
                            Вход в личный кабинет
                        </HeaderButton>
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
                    {modalContent === 'login' && <Login registerHandler={registerHandler} />}
                    {modalContent === 'register' && <Register />}
                </Modal>
            )}
        </ClassesContext.Provider>
    );
}

export default MainPage;
