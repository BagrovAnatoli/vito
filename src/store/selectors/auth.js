// const initialState = {
//     loginWaiting: false,
//     loginError: false,
//     registerWaiting: false,
//     registerError: false,
//     refreshWaiting: false,
//     refreshError: false,
//     accessToken: '',
//     refreshToken: '',
//     tokenType: '',
//     user: {
//         id: '',
//         email: '',
//         role: '',
//         name: '',
//         surname: '',
//         city: '',
//         avatar: '',
//         sells_from: '',
//         phone: '',
//     },
// };

export const storeAuthSelector = (store) => store?.auth;

export const accessTokenSelector = (store) => storeAuthSelector(store)?.accessToken;
export const refreshTokenSelector = (store) => storeAuthSelector(store)?.refreshToken;
export const tokenTypeSelector = (store) => storeAuthSelector(store)?.tokenType;

export const loginWaitingSelector = (store) => storeAuthSelector(store)?.loginWaiting;
export const registerWaitingSelector = (store) => storeAuthSelector(store)?.registerWaiting;
export const refreshWaitingSelector = (store) => storeAuthSelector(store)?.refreshWaiting;

export const loginErrorSelector = (store) => storeAuthSelector(store)?.loginError;
export const registerErrorSelector = (store) => storeAuthSelector(store)?.registerError;
export const refreshErrorSelector = (store) => storeAuthSelector(store)?.refreshError;

export const authUserSelector = (store) => storeAuthSelector(store)?.user;

export const authUserIdSelector = (store) => authUserSelector(store)?.id;
export const authUserEmailSelector = (store) => authUserSelector(store)?.email;
export const authUserRoleSelector = (store) => authUserSelector(store)?.role;
export const authUserNameSelector = (store) => authUserSelector(store)?.name;
export const authUserSurnameSelector = (store) => authUserSelector(store)?.surname;
export const authUserCitySelector = (store) => authUserSelector(store)?.city;
export const authUserAvatarSelector = (store) => authUserSelector(store)?.avatar;
export const authUserSells_fromSelector = (store) => authUserSelector(store)?.sells_from;
export const authUserPhoneSelector = (store) => authUserSelector(store)?.phone;
