/* eslint-disable react/function-component-definition */
import { Form, Field } from 'react-final-form';
import classes from './index.module.scss';
import Logo from '../LogoText';
import ButtonMain from '../ButtonMain';
import Input from '../Input';

const LoginModal = () => {
  const onSubmit = (values) => {
    const value = values.search;
    window.alert(JSON.stringify(value, 0, 2));
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Logo className={classes.logo} />
          <div className={classes.inputs}>
            <Field name="login" component={Input} type="text" placeholder="логин" />
            {/* <Input type="text" name="login" placeholder="логин" /> */}
            <Field name="email" component={Input} type="text" placeholder="email" />
            {/* <Input type="text" name="email" placeholder="email" /> */}
            <Field name="password" component={Input} type="password" placeholder="пароль" />
            {/* <Input type="password" name="password" placeholder="пароль" /> */}
          </div>
          <div className={classes.buttons}>
            <ButtonMain type="submit" content="Войти" />
            <ButtonMain
              content="Зарегистрироваться"
              colorBtn="white"
            //   onClick={showSignup}
            />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            {/* {error && <div className={classes.message}>{error}</div>} */}
          </div>
        </form>
      )}
    />
  );
};

export default LoginModal;
