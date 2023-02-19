const generateQueryString = (params) => {
    let string = '';
    if (params && Object.keys(params).length > 0) {
        Object.keys(params).forEach((key) => {
            if (string === '') {
                string = `?${key}=${params[key]}`;
            } else {
                string += `&${key}=${params[key]}`;
            }
        });
    }
    return string;
};

export default generateQueryString;
