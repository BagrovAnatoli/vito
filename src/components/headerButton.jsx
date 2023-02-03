import React from 'react';
import ClassesContext from '../pages/context';

function HeaderButton({ children, className, id }) {
    const classes = React.useContext(ClassesContext);

    return (
        <button
          className={`${className} ${classes['btn-hov01']}`}
          id={id}
        >
            {children}
        </button>
    );
}

export default HeaderButton;
