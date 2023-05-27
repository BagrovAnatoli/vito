export const required = (value) => (value ? undefined : 'Обязательное поле');
export const minLength = (length) => (value) => (value?.length >= length ? undefined : 'Минимум 3 символа');
export const mustBeEmail = (value) => (value?.includes('@') ? undefined : 'Не похоже на email');
export const samePassword = (password1) => (value) => (value === password1 ? undefined : 'Пароли не совпадают');
export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);
