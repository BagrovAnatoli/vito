/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
const cookiesLiveTime = 360;

const cookies = {
    check(name) {
        return document.cookie.includes(`${name}=`);
    },

    set(name, value) {
        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
            value,
        )}; path=/; max-age=${cookiesLiveTime}`;
    },

    read(name) {
        console.log(`cookies read name ${name}`);
        // https://learn.javascript.ru/cookie
        // eslint-disable-next-line no-useless-escape
        // const reg = /([\.$?*|{}\(\)\[\]\\\/\+^])/g;
        // const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(reg, '\\$1')}=([^;]*)`));
        // return matches ? decodeURIComponent(matches[1]) : undefined;

        const allcookies = document.cookie;
         // Get all the cookies pairs in an array
        const cookiearray = allcookies.split('; ');
         // Now take key value pair out of this array
        let value = '';
        for (let i = 0; i < cookiearray.length; i++) {
            if (name === cookiearray[i].split('=')[0]) {
                value = decodeURIComponent(cookiearray[i].split('=')[1]);
            }
        }
        console.log(`cookies read value ${value}`);
        return value;
    },

    delete(name) {
        document.cookie = `${encodeURIComponent(name)}=''; path=/; max-age=0`;
    },
};

export default cookies;
