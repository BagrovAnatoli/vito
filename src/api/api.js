import axios from 'axios';
import BASE_URL from '../constants';

const instance = axios.create({
    baseURL: BASE_URL,
});

export const adsAPI = {
    getAds() {
        return instance.get('/ads');
    },
    getAdById(pk) {
        return instance.get(`/ads/${pk}`);
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
