/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { Form, Field } from 'react-final-form';
import classes from './index.module.scss';
import Logo from '../LogoText';
import ButtonMain from '../ButtonMain';
import {
  required,
  minLength,
  mustBeEmail,
  composeValidators,
} from '../../utils/validators';

const LoginModal = ({ registerHandler }) => {
  const onSubmit = (values) => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <Logo className={classes.logo} />
          <div className={classes.inputs}>
            <Field name="login" validate={composeValidators(required, minLength(3))}>
              {({ input, meta }) => (
                <>
                  <input {...input} type="text" placeholder="логин" className={classes.input} />
                  {meta.error && meta.touched && <span className={classes.message}>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="email" validate={composeValidators(required, minLength(3), mustBeEmail)}>
              {({ input, meta }) => (
                <>
                  <input {...input} type="text" placeholder="email" className={classes.input} />
                  {meta.error && meta.touched && <span className={classes.message}>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="password" validate={composeValidators(required, minLength(3))}>
              {({ input, meta }) => (
                <>
                  <input {...input} type="password" placeholder="пароль" className={classes.input} />
                  {meta.error && meta.touched && <span className={classes.message}>{meta.error}</span>}
                </>
              )}
            </Field>
          </div>
          <div className={classes.buttons}>
            <ButtonMain type="submit" content="Войти" />
            <ButtonMain
              content="Зарегистрироваться"
              colorBtn="white"
              onClick={registerHandler}
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
