/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classes from './index.module.scss';
import Portal from '../Portal';

function Modal({ children, onClick }) {
  return (
    <Portal>
      <div className={classes.wrapper}>
        <div className={classes.modal}>{children}</div>
        <div className={classes.close} onClick={onClick} />
      </div>
    </Portal>
  );
}

export default Modal;
