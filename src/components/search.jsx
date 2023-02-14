import React from 'react';
import ClassesContext from '../pages/context';

function Search() {
    const classes = React.useContext(ClassesContext);

    return (
        <div className={`${classes.main__search} ${classes.search}`}>
            <a className={classes['search__logo-link']} href="/" target="_blank">
                <img className={classes['search__logo-img']} src="img/logo.png" alt="logo" />
            </a>
            <a className={classes['search__logo-mob-link']} href="/" target="_blank">
                <img className={classes['search__logo-mob-img']} src="img/logo-mob.png" alt="logo" />
            </a>
            <form className={classes.search__form} action="#">
                <input className={classes.search__text} type="search" placeholder="Поиск по объявлениям" name="search" />
                <input className={classes['search__text-mob']} type="search" placeholder="Поиск" name="search-mob" />
                <button className={`${classes.search__btn} ${classes['btn-hov02']}`}>Найти</button>
            </form>
        </div>
    );
}
export default Search;
