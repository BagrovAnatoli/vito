/* eslint-disable camelcase */
import axios from 'axios';
import BASE_URL from '../constants';

const instance = axios.create({
    baseURL: BASE_URL,
});

export const adsAPI = {
    getAds({ userId, sorting, page }) {
        return instance.get('/ads', { params: { user_id: userId, sorting, page } });
    },
    getAdById(pk) {
        return instance.get(`/ads/${pk}`);
    },
    createAd({
        title = '', description = '', price = '', file,
    }) {
        return instance.post(`/ads?title=${title}&description=${description}&price=${price}`, file);
    },
    deleteAdById(pk) {
        return instance.delete(`/ads/${pk}`);
    },
    editAd({
        pk, title, description, price,
    }) {
        return instance.patch(`/ads/${pk}`, { title, description, price });
    },
    getMyAds({ sorting, page }) {
        return instance.get('/ads/me', { params: { sorting, page } });
    },
    addImageToAd({ id, file }) {
        return instance.post(`/ads/${id}/image`, file);
    },
    removeImageFromAd({ id, imgUrl }) {
        return instance.delete(`/ads/${id}/image`, { file_url: imgUrl });
    },
    getAdComments({ adId, userId = '', page = '' }) {
        return instance.get(`/ads/${adId}/image`, { params: { user_id: userId, page } });
    },
    createAdComment({ adId, text }) {
        return instance.post(`/ads/${adId}/comments`, { text });
    },
    createAdWithoutImage({ title, description, price }) {
        return instance.post('/adstext', { title, description, price });
    },
};

export const commentsAPI = {
    getComments(page) {
        return instance.get('/comments', {
            params: {
              page,
            },
          });
    },
    getCommentById(pk) {
        return instance.get(`/comments/${pk}`);
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

export const userAPI = {
    getCurrentUser() {
        return instance.get('/user');
    },
    editCurrentUser({
        role,
        email,
        name,
        surname,
        phone,
        city,
    }) {
        return instance.patch('/user', {
            role,
            email,
            name,
            surname,
            phone,
            city,
        });
    },
    getAllUsers() {
        return instance.get('/user/all');
    },
    editPassword({ password1, password2 }) {
        return instance.put('/user/all', { password_1: password1, password_2: password2 });
    },
    setAvatar(file) {
        return instance.post('/user/avatar', file);
    },
};
