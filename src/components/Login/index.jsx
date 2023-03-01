/* eslint-disable react/function-component-definition */
import classes from './index.module.scss';
import Logo from '../LogoText';
import ButtonMain from '../ButtonMain';
import Input from '../Input';

const LoginModal = () => (
    // <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
    <form className={classes.form}>
      <Logo className={classes.logo} />
      <div className={classes.inputs}>
        <Input type="text" name="login" placeholder="логин" />
        <Input type="text" name="email" placeholder="email" />
        <Input type="password" name="password" placeholder="парроль" />
      </div>
      <div className={classes.buttons}>
        <ButtonMain type="submit" content="Войти" />
        <ButtonMain
          content="Зарегистрироваться"
          colorBtn="white"
        //   onClick={showSignup}
        />
        {/* {error && <div className={classes.message}>{error}</div>} */}
      </div>
    </form>
);

export default LoginModal;
