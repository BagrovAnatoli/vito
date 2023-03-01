import classes from './index.module.scss';

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
      />
      {/* <span className={classes.message}>{errors.username?.message}</span> */}
    </>
  );
}

export default Input;