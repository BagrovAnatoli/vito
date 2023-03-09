import cookies from './cookies';

const auth = {
    on(accessToken, refreshToken) {
        cookies.set('access_token', accessToken);
        cookies.set('refresh_token', refreshToken);
    },
    off() {
        cookies.delete('access_token');
        cookies.delete('refresh_token');
    },
    check() {
        return (
            cookies.check('access_token')
            && cookies.check('refresh_token')
        );
    },
};

export default auth;
