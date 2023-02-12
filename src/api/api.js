import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8090',
});

export const adsAPI = {
    getAds() {
        return instance.get('/ads');
    },
};

export const imagesAPI = {
    getImages(page) {
        return instance.get('/images', {
            params: {
              page,
            },
          });
    },
    getImagesById(pk) {
        return instance.get(`/images/${pk}`);
    },
};
