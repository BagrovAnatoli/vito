import React from 'react';
import ClassesContext from '../pages/context';

function Button({ children, id }) {
    const classes = React.useContext(ClassesContext);

    return (
        <button
          className={`${classes.menu__btn} ${classes['btn-hov02']}`}
          id={id}
        >
            {children}
        </button>
    );
}

export default Button;
