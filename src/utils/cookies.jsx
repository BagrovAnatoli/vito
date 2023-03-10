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

    delete(name) {
        document.cookie = `${encodeURIComponent(name)}=''; max-age=0`;
    },
};

export default cookies;
