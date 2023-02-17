import {
    getAdsStartAC,
    getAdsSuccessAC,
    getAdsErrorAC,
    getAdByIdStartAC,
    getAdByIdSuccessAC,
    getAdByIdErrorAC,
} from '../creators/ads';

import { adsAPI } from '../../../api/api';

export const getAds = () => async (dispatch) => {
    console.log('getAdsThunk');

    dispatch(getAdsStartAC());

    try {
        const response = await adsAPI.getAds();
        // console.log(response);
        dispatch(getAdsSuccessAC(response.data));
    } catch (error) {
        // console.log(error);
        dispatch(getAdsErrorAC(error));
    }
};

export const fetchArticleById = (id) => async (dispatch) => {
    console.log('fetchArticle thunk');

    dispatch(getAdByIdStartAC());

    try {
        const response = await adsAPI.getAdById(id);
        // console.log(response);
        dispatch(getAdByIdSuccessAC(response.data));
    } catch (error) {
        // console.log(error);
        dispatch(getAdByIdErrorAC(error));
    }
};
