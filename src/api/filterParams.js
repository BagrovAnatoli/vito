const filterParams = (params) => {
    const noEmptyParams = {};
    if (params) {
        Object.keys(params).forEach((key) => {
            if (params[key]) { noEmptyParams[key] = params[key]; }
        });
        return noEmptyParams;
    }
    return {};
};

export default filterParams;
