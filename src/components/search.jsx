/* eslint-disable no-promise-executor-return */
import React from 'react';
import { Form, Field } from 'react-final-form';
import ClassesContext from '../pages/context';

function Search() {
    const classes = React.useContext(ClassesContext);

    // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // const onSubmit = async (values) => {
    //     await sleep(300);
    //     window.alert(JSON.stringify(values, 0, 2));
    // };

    const onSubmit = (values) => {
        const value = values.search;
        window.alert(value);
    };

    return (
        <div className={`${classes.main__search} ${classes.search}`}>
            <a className={classes['search__logo-link']} href="/" target="_blank">
                <img className={classes['search__logo-img']} src="img/logo.png" alt="logo" />
            </a>
            <a className={classes['search__logo-mob-link']} href="/" target="_blank">
                <img className={classes['search__logo-mob-img']} src="img/logo-mob.png" alt="logo" />
            </a>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, values }) => (
                    <form className={classes.search__form} onSubmit={handleSubmit}>
                        <Field name="search" component="input" placeholder="Поиск по объявлениям" className={classes.search__text} type="search" />
                        <button className={`${classes.search__btn} ${classes['btn-hov02']}`} type="submit">Найти</button>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    );
}
export default Search;