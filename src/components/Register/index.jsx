/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
import { Form, Field } from 'react-final-form';
import classes from '../Login/index.module.scss';
import Logo from '../LogoText';
import ButtonMain from '../ButtonMain';
import {
  required,
  minLength,
  mustBeEmail,
  samePassword,
  composeValidators,
} from '../../utils/validators';

const RegisterModal = () => {
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
            <Field name="email" validate={composeValidators(required, minLength(3), mustBeEmail)}>
              {({ input, meta }) => (
                <>
                  <input {...input} type="email" placeholder="email" className={classes.input} />
                  {meta.error && meta.touched && <span className={classes.message}>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="password" validate={composeValidators(required, minLength(3))}>
              {({ input, meta }) => (
                <>
                  <input {...input} type="password" placeholder="Пароль" className={classes.input} />
                  {meta.error && meta.touched && <span className={classes.message}>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="repeatPassword" validate={composeValidators(required, minLength(3), samePassword(values.password))}>
              {({ input, meta }) => (
                <>
                  <input {...input} type="password" placeholder="Повторите пароль" className={classes.input} />
                  {meta.error && meta.touched && <span className={classes.message}>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="name">
              {({ input }) => (
                <input {...input} type="text" placeholder="Имя (не обязательно)" className={classes.input} />
              )}
            </Field>
            <Field name="surname">
              {({ input }) => (
                <input {...input} type="text" placeholder="Фамилия (не обязательно)" className={classes.input} />
              )}
            </Field>
            <Field name="city">
              {({ input }) => (
                <input {...input} type="text" placeholder="Город (не обязательно)" className={classes.input} />
              )}
            </Field>
          </div>
          <div className={classes.buttons}>
            <ButtonMain type="submit" content="Зарегистрироваться" />
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            {/* {error && <div className={classes.message}>{error}</div>} */}
          </div>
        </form>
      )}
    />
  );
};

export default RegisterModal;
