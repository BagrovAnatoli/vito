import React from 'react';
import ClassesContext from '../pages/context';

function HeaderButton({
    children, className, id, onClick,
}) {
    const classes = React.useContext(ClassesContext);

    return (
        <button
          className={`${className} ${classes['btn-hov01']}`}
          id={id}
          onClick={onClick}
        >
            {children}
        </button>
    );
}

export default HeaderButton;
