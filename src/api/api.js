import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://127.0.0.1:3000',
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
